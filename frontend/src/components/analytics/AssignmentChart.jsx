import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function AssignmentChart({ assignments }) {
  const data = [
    {
      name: "Completed",
      value: assignments.completed,
    },
    {
      name: "Pending",
      value: assignments.pending,
    },
  ];

  const COLORS = [
    "#10B981",
    "#F59E0B",
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Assignments
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AssignmentChart;