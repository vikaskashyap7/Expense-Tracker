import React, { useState } from "react";

const ExpensesList = ({ expenses, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const handleEditClick = (expense) => {
    setCurrentExpense(expense);
    setIsModalOpen(true);
  };

  const handleModalSave = () => {
    onEdit(currentExpense);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setCurrentExpense({ ...currentExpense, [e.target.name]: e.target.value });
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState(null);

  const handleDeleteClick = (expense) => {
    setExpenseToDelete(expense);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(expenseToDelete._id);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="mt-24 w-[95%] mx-auto px-4">
      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center">No expenses found. Add some!</p>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-white uppercase bg-blue-500">
              <tr>
                <th className="px-6 py-3 text-base font-semibold">Amount</th>
                <th className="px-6 py-3 text-base font-semibold">Category</th>
                <th className="px-6 py-3 text-base font-semibold">Description</th>
                <th className="px-6 py-3 text-base font-semibold">Date</th>
                <th className="px-6 py-3 text-center text-base font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr
                  key={expense._id}
                  className="bg-white border-b border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <td className="px-6 py-4 font-medium">₹{expense.amount}</td>
                  <td className="px-6 py-4 font-medium">{expense.category}</td>
                  <td className="px-6 py-4 font-medium">{expense.description}</td>
                  <td className="px-6 py-4 font-medium">
                    {new Date(expense.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleEditClick(expense)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(expense)}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for editing */}
      {isModalOpen && currentExpense && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg sm:max-w-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Edit Expense</h3>

            <div className="space-y-4">
              <input
                type="number"
                name="amount"
                value={currentExpense.amount}
                onChange={handleChange}
                placeholder="Amount"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="category"
                value={currentExpense.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="description"
                value={currentExpense.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                name="date"
                value={currentExpense.date?.slice(0, 10)}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end mt-6 gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-full transition"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSave}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && expenseToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Are you sure you want to delete this expense?
            </h3>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleDeleteConfirm}
                className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-5 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-full transition"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensesList;
