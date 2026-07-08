import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Modal({
  isOpen,
  title,
  children,
  onClose,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
        >
          <div className="flex min-h-screen items-center justify-center p-6">
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-900 px-6 py-5">
                <h2 className="text-2xl font-bold text-white">
                  {title}
                </h2>

                <button
                  onClick={onClose}
                  className="rounded-full p-2 transition hover:bg-slate-800"
                >
                  <X className="text-slate-400" />
                </button>
              </div>

              <div className="p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;