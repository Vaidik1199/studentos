import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is StudentOS completely free?",
    answer:
      "Yes. StudentOS is completely free to use and is open source. You can use every feature without any subscription.",
  },
  {
    question: "How does the AI Study Assistant work?",
    answer:
      "The AI Study Assistant helps generate study plans, explains difficult concepts, summarizes notes and assists with exam preparation using AI.",
  },
  {
    question: "Can I track attendance for multiple subjects?",
    answer:
      "Absolutely. StudentOS lets you manage attendance subject-wise and provides overall attendance analytics.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your account is protected with encrypted passwords, secure authentication and private user data storage.",
  },
  {
    question: "Can I contribute to StudentOS?",
    answer:
      "Yes! StudentOS is open source. You can contribute through GitHub by reporting bugs, suggesting features or submitting pull requests.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-28">

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-400">
            FAQ
          </span>

          <h2 className="mt-8 text-4xl font-extrabold text-white md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Everything you need to know about StudentOS.
          </p>

        </div>

        <div className="mt-20 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition duration-300 ${
                      isOpen ? "rotate-180 text-indigo-400" : "text-slate-400"
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 leading-8 text-slate-400">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default FAQ;