

import ExpenseForm from '../components/ExpenseForm';

import Dashboard from '../components/Dashboard';


const Home = ({ expenses, onSave, selectedExpense }) => {
  
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Expense Tracker</h1>
      <ExpenseForm onSave={onSave} selectedExpense={selectedExpense} />
      
      <Dashboard expenses={expenses} />
    </div>
  );
};

export default Home;
