import { useState } from "react";
import { getFavorites, removeFavorite } from "../utils/localStorage";
import QuoteCard from "../Components/QuoteCard";
import { motion } from "motion/react";

const Favorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());

  const handleRemove = (id) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  };

  const cardVariants = {
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

  if (!favorites.length) {
    return (
      <div className="min-h-screen bg-black pt-2 md:pt-4">
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-300">❤️ Favorites</h2>
          <p className="text-base md:text-lg text-gray-400">You haven't saved any favorites yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div>
        <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-300 text-center px-2">❤️ Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 p-2 md:p-4 text-sm md:text-lg">
          {favorites.map((quote, index) => (
            <motion.div
              key={quote.id}
              className={index % 2 === 1 ? "md:translate-y-8" : ""}
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
      </div>
    </div>
  );
};

export default Favorites;