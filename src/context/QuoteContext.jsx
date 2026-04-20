import { createContext, useContext, useState, useEffect } from "react";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes?limit=150");
        const data = await res.json();
        setQuotes(data.quotes);
      } catch (err) {
        setError("Failed to fetch quotes. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuotes();
  }, []);

  return (
    <QuoteContext.Provider value={{ quotes, loading, error }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuotesContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuotesContext must be used within QuoteProvider");
  }
  return context;
};
