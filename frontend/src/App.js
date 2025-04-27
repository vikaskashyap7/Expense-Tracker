import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import ExpensesList from './components/ExpenseList';
import { fetchExpenses, createExpense, updateExpense, deleteExpense } from './services/api';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const loadExpenses = async () => {
    const { data } = await fetchExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleSave = async (expense) => {
    if (selectedExpense) {
      await updateExpense(selectedExpense._id, expense);
    } else {
      await createExpense(expense);
    }
    setSelectedExpense(null);
    loadExpenses();
  };

  const handleEdit = async (updatedExpense) => {
    await updateExpense(updatedExpense._id, updatedExpense); // updated here
    loadExpenses(); // reload after edit
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              expenses={expenses}
              onSave={handleSave}
              selectedExpense={selectedExpense}
            />
          }
        />
        <Route
          path="/expenses"
          element={
            <ExpensesList
              expenses={expenses}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
