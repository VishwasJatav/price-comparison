import { useState, useEffect } from 'react';

export const useSavedItems = () => {
  const [savedItems, setSavedItems] = useState(() => {
    const saved = localStorage.getItem('savedItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  }, [savedItems]);

  const addToSavedItems = (item) => {
    if (!savedItems.find(savedItem => savedItem.id === item.id)) {
      setSavedItems([...savedItems, item]);
    }
  };

  const removeFromSavedItems = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
  };

  const isItemSaved = (id) => {
    return savedItems.some(item => item.id === id);
  };

  return {
    savedItems,
    addToSavedItems,
    removeFromSavedItems,
    isItemSaved
  };
};