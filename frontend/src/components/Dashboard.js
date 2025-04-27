import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c"];

const Dashboard = ({ expenses }) => {
  const categoryData = Object.values(
    expenses.reduce((acc, { category, amount }) => {
      acc[category] = acc[category] || { name: category, value: 0 };
      acc[category].value += amount;
      return acc;
    }, {})
  );

  const monthlyData = Object.values(
    expenses.reduce((acc, { date, amount }) => {
      const month = new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' });
      acc[month] = acc[month] || { month, total: 0 };
      acc[month].total += amount;
      return acc;
    }, {})
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <div className="text-3xl text-center font-bold mb-10 text-gray-800">Expense Overview</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Category Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Category Distribution</h2>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  innerRadius={60}
                  paddingAngle={5}
                  label
                >
                  {categoryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Expenses */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Monthly Expenses</h2>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="total" fill="#82ca9d" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
