import axios from 'axios';

const API = axios.create({ baseURL: 'https://expense-tracker-vdh8.onrender.com/api' });

export const fetchExpenses = () => API.get('/expenses');
export const createExpense = (newExpense) => API.post('/expenses', newExpense);
export const updateExpense = (id, updatedExpense) => API.put(`/expenses/${id}`, updatedExpense);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
