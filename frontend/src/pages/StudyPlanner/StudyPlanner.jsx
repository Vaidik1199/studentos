import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PageTransition from "../../components/common/PageTransition";
import { generateStudyPlan } from "../../services/aiService";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { saveStudyPlan } from "../../services/studyPlanService";

function StudyPlanner() {
  const [examDate, setExamDate] = useState("");
  const [studyHours, setStudyHours] = useState("");
  const [subjects, setSubjects] = useState("");
  const [weakSubjects, setWeakSubjects] = useState("");

  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!examDate || !studyHours || !subjects.trim()) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateStudyPlan({
        examDate,
        studyHours,
        subjects,
        weakSubjects,
      });

      setPlan(response.data);

      toast.success("Study plan generated successfully.");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to generate study plan.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!plan) {
      toast.error("Generate a study plan first.");
      return;
    }

    try {
      await saveStudyPlan({
        title: `Exam Plan - ${examDate}`,
        examDate,
        studyHours,
        subjects,
        weakSubjects,
        plan,
      });

      toast.success("Study plan saved successfully.");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to save study plan.",
      );
    }
  };

  return (
    <DashboardLayout>
      <PageTransition>
        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white">AI Study Planner</h1>

            <p className="mt-2 text-slate-400">
              Generate a personalized study schedule using AI.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-slate-300">Exam Date</label>

                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="mb-2 block text-slate-300">
                  Study Hours / Day
                </label>

                <input
                  type="number"
                  placeholder="3"
                  value={studyHours}
                  onChange={(e) => setStudyHours(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-slate-300">Subjects</label>

              <textarea
                rows={5}
                value={subjects}
                onChange={(e) => setSubjects(e.target.value)}
                placeholder={`DBMS
CN
AI
WT`}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-slate-300">Weak Subjects</label>

              <input
                value={weakSubjects}
                onChange={(e) => setWeakSubjects(e.target.value)}
                placeholder="DBMS, CN"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Generating Study Plan..." : "Generate AI Study Plan"}
            </button>
          </div>

          {plan && (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">
                📚 Your AI Study Plan
              </h2>

              <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-indigo-300">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {plan}
                </ReactMarkdown>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  💾 Save Plan
                </button>

                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  🔄 Regenerate
                </button>
              </div>
            </div>
          )}
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default StudyPlanner;
