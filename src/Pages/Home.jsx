import { useState } from "react";
import { useQuotesContext } from "../context/QuoteContext";
import QuoteOfTheDay from "../Components/QuoteOfTheDay";
import FilterBar from "../Components/FilterBar";
import QuoteList from "../Components/QuoteList";
import schools from "../data/schools";

const Home = () => {
  const { quotes, loading, error } = useQuotesContext();
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSchool = selectedSchool
      ? schools
          .find((s) => s.name === selectedSchool)
          ?.authors.some((a) =>
            quote.author.toLowerCase().includes(a.toLowerCase())
          )
      : true;

    return matchesSearch && matchesSchool;
  });

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">Loading quotes...</div>;
  if (error) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">{error}</div>;

  return (
    <div className="min-h-screen bg-black">
      <QuoteOfTheDay quotes={quotes} />
      <FilterBar
        selectedSchool={selectedSchool}
        onSelectSchool={setSelectedSchool}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      <QuoteList quotes={filteredQuotes} />
    </div>
  );
};

export default Home;