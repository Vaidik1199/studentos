import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays } from "date-fns";

const values = [
  { date: "2026-06-07", count: 2 },
  { date: "2026-06-08", count: 4 },
  { date: "2026-06-09", count: 1 },
  { date: "2026-06-10", count: 5 },
  { date: "2026-06-11", count: 3 },
  { date: "2026-06-12", count: 4 },
  { date: "2026-06-13", count: 5 },
];

function StudyHeatmap() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Weekly Study Activity
      </h2>

      <CalendarHeatmap
        startDate={subDays(new Date(), 30)}
        endDate={new Date()}
        values={values}
        classForValue={(value) => {
          if (!value) return "color-empty";

          if (value.count >= 5) return "color-github-4";
          if (value.count >= 4) return "color-github-3";
          if (value.count >= 2) return "color-github-2";

          return "color-github-1";
        }}
      />
    </div>
  );
}

export default StudyHeatmap;