import { getByTitle } from '@testing-library/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Article from './components/Article';
import DataBase from './DataBase';

export default function App() {
  const [articles, setArticles] = useState(DataBase);

  function handleRemoveArticle(articleId) {
    setArticles(articles.filter((article) => article._id !== articleId));
  }

  function handleAddArticle() {
    setArticles([
      ...articles,
      { id: nanoid(), name: { en: getByTitle, de: '' } },
    ]);
  }

  return (
    <main className="App">
      <section className="AppTitle">
        <h1>Shopping List</h1>
      </section>
      <ul class="ArticleList">
        {articles.map((article) => (
          <Article
            key={article._id}
            article={article}
            onDelete={handleRemoveArticle}
          />
        ))}
      </ul>
      <form class="AddArticle">
        <label>Add an article</label>
        <input type="input" placeholder="Type your article here"></input>
        <button onKlick={handleAddArticle}>Add to shopping list</button>
      </form>
    </main>
  );
}
