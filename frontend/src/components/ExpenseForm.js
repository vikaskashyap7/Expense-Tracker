import { useState, useEffect } from 'react';

const ExpenseForm = ({ onSave, selectedExpense }) => {
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (selectedExpense) {
      setFormData(selectedExpense);
    }
  }, [selectedExpense]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ amount: '', category: '', description: '', date: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto bg-white p-8 rounded-2xl  space-y-6 mt-8 "
    >
     <div className='text-xl font-bold mb-6 text-gray-700'>Add Expense</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            name="category"
            type="text"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            name="description"
            type="text"
            placeholder="Enter description (optional)"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out"
        >
          {selectedExpense ? "Update Expense" : "Add Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
