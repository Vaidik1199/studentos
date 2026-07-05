const templates = [
  "Summarize this chapter",
  "Generate exam notes",
  "Explain this code",
  "Create interview questions",
  "Generate MCQs",
  "Make revision notes",
];

function PromptTemplates({ onSelect }) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {templates.map((template) => (
        <button
          key={template}
          onClick={() => onSelect(template)}
          className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-indigo-500 hover:text-white"
        >
          {template}
        </button>
      ))}
    </div>
  );
}

export default PromptTemplates;