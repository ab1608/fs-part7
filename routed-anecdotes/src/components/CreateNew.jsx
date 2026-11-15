import { useNavigate } from "react-router";
import { useField } from "../hooks/index";
import { useAnecdotes } from "../hooks/useAnecdotes";

const CreateNew = () => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");
  const { reset: resetContent, ...contentProps } = content;
  const { reset: resetAuthor, ...authorProps } = author;
  const { reset: resetInfo, ...infoProps } = info;
  const { addAnecdote } = useAnecdotes();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAnecdote = {
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    };

    addAnecdote(newAnecdote);
    navigate("/");
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentProps} />
        </div>
        <div>
          author
          <input {...authorProps} />
        </div>
        <div>
          url for more info
          <input {...infoProps} />
        </div>
        <button>create</button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
