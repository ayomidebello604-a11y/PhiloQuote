// FAVORITES
export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const saveFavorite = (quote) => {
  const favorites = getFavorites();
  const exists = favorites.find((q) => q._id === quote._id);
  if (!exists) {
    localStorage.setItem("favorites", JSON.stringify([...favorites, quote]));
  }
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter((q) => q._id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const isFavorite = (id) => {
  return getFavorites().some((q) => q._id === id);
};

// JOURNAL
export const getJournalEntries = () => {
  return JSON.parse(localStorage.getItem("journal")) || {};
};

export const saveJournalEntry = (quoteId, text) => {
  const entries = getJournalEntries();
  entries[quoteId] = text;
  localStorage.setItem("journal", JSON.stringify(entries));
};

export const deleteJournalEntry = (quoteId) => {
  const entries = getJournalEntries();
  delete entries[quoteId];
  localStorage.setItem("journal", JSON.stringify(entries));
};