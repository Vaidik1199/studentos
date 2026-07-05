const questions = [
  "Generate DBMS revision notes",
  "Explain React Hooks with examples",
  "Create 10 Java interview questions",
  "Generate Operating System MCQs",
  "Create a 7-day DSA study plan",
  "Explain Binary Search in Java",
];

function SuggestedQuestions({ onSelect }) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Popular Questions
      </h3>

      <div className="flex flex-wrap gap-3">
        {questions.map((question) => (
          <button
            key={question}
            onClick={() => onSelect(question)}
            className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-indigo-500 hover:text-white"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestedQuestions;