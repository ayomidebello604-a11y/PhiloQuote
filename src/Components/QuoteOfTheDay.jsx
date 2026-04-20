import { motion } from "motion/react";
const QuoteOfTheDay = ({ quotes }) => {
  if (!quotes.length) return null;

  const index = new Date().getDate() % quotes.length;
  const quote = quotes[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 0.8 }}
    >
      <div className="flex flex-col gap-4 md:gap-6 text-center mb-8 p-4 md:p-8">
        <h2 className="tracking-wide text-base md:text-2xl">Quote of the Day</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="hidden md:block w-1 h-40 md:h-60 bg-gray-300"></div>
          <p className="text-lg md:text-5xl italic">"{quote.quote}"</p>
        </div>
        <span className="text-center md:text-right text-white text-xs md:text-base">— {quote.author}</span>
      </div>
    </motion.div>
  );
};

export default QuoteOfTheDay;