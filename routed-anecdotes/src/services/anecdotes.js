const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch anecdotes");
  }

  return await response.json();
};

export const createNew = async (object) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(object),
  });

  if (!response.ok) {
    throw new Error("Failed to create anecdote");
  }

  return await response.json();
};

export const removeAnecdote = async (id) => {
  const options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${baseUrl}/${id}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};
