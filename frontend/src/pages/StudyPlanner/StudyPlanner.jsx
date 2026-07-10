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

// Clean Lucide Icon imports matching the design language
import {
  Sparkles,
  CalendarDays,
  Clock3,
  BookOpen,
  Target,
  Save,
  RotateCw,
  Wand2,
  CheckCircle2,
} from "lucide-react";

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
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:space-y-8 sm:px-0">
          {/* Header */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 shadow-xl sm:rounded-3xl sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              <Sparkles size={16} />
              AI Powered Study Planner
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Create Your Perfect
              <span className="text-indigo-400"> Study Plan</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
              Let StudentOS AI build a personalized timetable based on your exam
              date, available study hours and subjects.
            </p>
          </div>

          {/* Planner Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 shadow-xl sm:rounded-3xl">
            <div className="border-b border-slate-800 px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Study Details</h2>
              <p className="mt-2 text-slate-400">
                Fill in the information below to generate your personalized
                study schedule.
              </p>
            </div>

            <div className="space-y-6 p-5 sm:space-y-8 sm:p-8">
              {/* Date + Hours */}
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <label className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    <CalendarDays size={16} className="text-indigo-400" />
                    Exam Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-base sm:p-4 sm:text-lg text-white outline-none transition focus:border-indigo-500 [color-scheme:dark]"
                  />
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <label className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    <Clock3 size={16} className="text-indigo-400" />
                    Study Hours / Day
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="18"
                    placeholder="Example : 4"
                    value={studyHours}
                    onChange={(e) => setStudyHours(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-base sm:p-4 sm:text-lg text-white outline-none transition focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Subjects */}
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <label className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    <BookOpen size={16} className="text-indigo-400" />
                    Subjects
                  </label>
                  <textarea
                    rows={7}
                    value={subjects}
                    onChange={(e) => setSubjects(e.target.value)}
                    placeholder={`DBMS\nComputer Networks\nArtificial Intelligence\nWeb Technology`}
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-3 text-base sm:p-4 sm:text-lg text-white outline-none transition focus:border-indigo-500"
                  />
                  <p className="mt-3 text-sm text-slate-500">
                    Enter one subject per line.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                  <label className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    <Target size={16} className="text-indigo-400" />
                    Weak Subjects
                  </label>
                  <textarea
                    rows={7}
                    value={weakSubjects}
                    onChange={(e) => setWeakSubjects(e.target.value)}
                    placeholder={`DBMS\nComputer Networks`}
                    className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 p-3 text-base sm:p-4 sm:text-lg text-white outline-none transition focus:border-indigo-500"
                  />
                  <p className="mt-3 text-sm text-slate-500">
                    StudentOS AI will allocate extra study time for these
                    subjects.
                  </p>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl py-4 text-base font-semibold sm:rounded-2xl sm:py-5 sm:text-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-600/40 disabled:cursor-not-allowed disabled:opacity-60 text-white"
              >
                {loading ? (
                  <>
                    <RotateCw size={18} className="animate-spin" />
                    Generating Your Study Plan...
                  </>
                ) : (
                  <>
                    <Wand2 size={18} />
                    Generate AI Study Plan
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Presentation Pane */}
          {plan && (
            <div className="rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
              <div className="flex flex-col gap-5 border-b border-slate-800 p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                    <CheckCircle2 size={16} />
                    AI Generated Successfully
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-white">
                    Your Personalized Study Plan
                  </h2>

                  <p className="mt-2 text-slate-400">
                    Review the schedule below and save it for future access.
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <button
                    onClick={handleSave}
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                  >
                    <Save size={18} />
                    Save Plan
                  </button>

                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
                  >
                    <RotateCw size={18} />
                    Regenerate
                  </button>
                </div>
              </div>

              {/* Markdown Display Area */}
              <div className="p-8">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 sm:p-8 overflow-x-auto">
                  <div
                    className="
                    prose-sm
                    sm:prose
                    lg:prose-lg
                    prose-invert
                    max-w-none
                    
                    prose-headings:text-white
                    prose-headings:font-bold
                    
                    prose-p:text-slate-300
                    prose-p:leading-8
                    
                    prose-li:text-slate-300
                    prose-li:leading-8
                    
                    prose-strong:text-indigo-300
                    prose-code:text-emerald-300
                    prose-pre:bg-slate-900
                    prose-blockquote:border-indigo-500
                    "
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight]}
                    >
                      {plan}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageTransition>
    </DashboardLayout>
  );
}

export default StudyPlanner;
