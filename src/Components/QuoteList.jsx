import QuoteCard from "./QuoteCard";
import { motion } from "motion/react";

const QuoteList = ({ quotes }) => {
  if (!quotes.length) {
    return <p>No quotes found. Try a different filter.</p>;
  }

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -40 : 40,
      scale: 0.9,
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.6 },
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 p-2 md:p-4 text-sm md:text-lg overflow-hidden">
      {quotes.map((quote, index) => (
        <motion.div
          key={quote.id}
          // className={index % 2 === 1 ? "md:translate-y-8" : ""}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariants}
          custom={index}
        >
          <QuoteCard quote={quote} />
        </motion.div>
      ))}
    </div>
  );
};

export default QuoteList;