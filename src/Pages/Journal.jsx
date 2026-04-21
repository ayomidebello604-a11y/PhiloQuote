import { useState } from "react";
import { getJournalEntries, deleteJournalEntry } from "../utils/localStorage";
import { motion } from "motion/react";

const Journal = () => {
  const [entries, setEntries] = useState(getJournalEntries());

  const handleDelete = (id) => {
    deleteJournalEntry(id);
    setEntries(getJournalEntries());
  };

  const entryList = Object.entries(entries);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const entryVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      scale: 0.9,
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.1 },
    }),
  };

  if (!entryList.length) {
    return (
      <div className="min-h-screen bg-black pt-2 md:pt-4">
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-300">✍️ Journal</h2>
          <p className="text-base md:text-lg text-gray-400">No reflections yet. Start writing from a quote!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div>
        <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-300 text-center px-2">✍️ Journal</h2>
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 px-2 md:px-4">
          {entryList.map(([quoteId, note], index) => (
            <motion.div
              key={quoteId}
              className="p-4 md:p-6 border-2 border-gray-700 rounded-xl bg-gray-900 hover:bg-gray-800 transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={entryVariants}
              custom={index}
            >
              <p className="text-sm md:text-base text-white mb-4 leading-relaxed italic">"{note}"</p>
              <button
                onClick={() => handleDelete(quoteId)}
                className="px-4 py-2 border-2 border-red-500 text-red-400 rounded-lg hover:bg-red-900 hover:text-red-200 transition-all text-sm md:text-base"
              >
                🗑 Delete
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;