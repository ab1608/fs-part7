import { getAll, createNew, removeAnecdote } from "../services/anecdotes";
import { useState, useEffect } from "react";

export const useAnecdotes = () => {
  const [anecdotes, setAnecdotes] = useState([]);

  useEffect(() => {
    const fetchAnecdotes = async () => {
      const allAnecdotes = await getAll();
      setAnecdotes(allAnecdotes);
    };
    fetchAnecdotes();
  }, []);

  const addAnecdote = async (newAnecdote) => {
    await createNew(newAnecdote);
    const latestAnecdotes = await getAll();
    setAnecdotes(latestAnecdotes);
  };

  const deleteAnecdote = async (id) => {
    await removeAnecdote(id);
    const latestAnecdotes = await getAll();
    setAnecdotes(latestAnecdotes);
  };

  return {
    anecdotes,
    addAnecdote,
    deleteAnecdote,
  };
};
