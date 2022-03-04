import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import DataBase from './DataBase';

export default function App() {
  const [articles, setArticles] = useState(DataBase);

  function handleRemoveArticle(articleId) {
    setArticles(articles.filter((article) => article._id !== articleId));
  }

  function handleAddArticle(title) {
    const newArticle = { _id: nanoid(), name: { en: title, de: '' } };
    setArticles([...articles, newArticle]);
  }

  return (
    <main className="App">
      <section className="AppTitle">
        <h1>Shopping List</h1>
      </section>
      <ul className="ArticleList">
        {articles.map((article) => (
          <Article
            key={article._id}
            article={article}
            onDelete={handleRemoveArticle}
            name={article.name.en}
          />
        ))}
      </ul>
      <AddArticle onAddArticle={handleAddArticle} />
    </main>
  );
}
