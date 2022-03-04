import { useState } from 'react';

export default function AddArticle({ onAddArticle }) {
  const [newArticle, setNewArticle] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    onAddArticle(newArticle);
    setNewArticle('');
  }
  return (
    <form onSubmit={handleSubmit} className="AddArticle">
      <label htmlFor="newArticle">Add an article</label>
      <input
        onChange={(event) => setNewArticle(event.target.value)}
        value={newArticle}
        type="text"
        id="newArticle"
        placeholder="Type your article here"
      ></input>
      <button>Add to shopping list</button>
    </form>
  );
}
