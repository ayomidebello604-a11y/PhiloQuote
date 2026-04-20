import { useState } from "react";
import { saveFavorite, removeFavorite, isFavorite } from "../utils/localStorage";
import { saveJournalEntry, getJournalEntries } from "../utils/localStorage";

const QuoteCard = ({ quote }) => {
  const [favorited, setFavorited] = useState(isFavorite(quote.id));
  const [showJournal, setShowJournal] = useState(false);
  const [note, setNote] = useState(getJournalEntries()[quote.id] || "");
  const [saved, setSaved] = useState(false);

  const toggleFavorite = () => {
    if (favorited) {
      removeFavorite(quote.id);
    } else {
      saveFavorite(quote);
    }
    setFavorited(!favorited);
  };

  const handleSaveNote = () => {
    saveJournalEntry(quote.id, note);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-3 md:p-4 mb-4 md:mb-6 border-2 border-gray-900 shadow-lg hover:shadow-xl transition-shadow rounded-xl">
      <p className="italic text-sm md:text-lg">"{ quote.quote}"</p>
      <span className="text-xs md:text-sm">— {quote.author}</span>

      <div className="flex gap-4 mt-4">
        <button 
          onClick={toggleFavorite} 
          title="Favorite" 
          className={`border-1 rounded-xl text-lg md:text-2xl transition-all ${
            favorited ? "opacity-100" : "opacity-50 hover:opacity-75"
          }`}
        >
          {favorited ? "🤍" : "🤍"}
        </button>
        <button
          onClick={() => setShowJournal(!showJournal)}
          title="Reflect"
          className="text-lg md:text-xl"
        >
          ✍️
        </button>
      </div>

      {showJournal && (
        <div className="m-2  p-4">
          <textarea
            placeholder="Write your reflection here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="border-1 border-white p-2 rounded-lg m-2 w-full text-xs md:text-sm text-white"
          />
          <button onClick={handleSaveNote} className="border-1 rounded-lg text-xs md:text-sm p-2 cursor-pointer">
            {saved ? "Saved ✓" : "Save Note"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;