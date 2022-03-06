import { useState, useEffect } from 'react';

export default function FilterArticles() {
  const [articles, setArticles] = useState([]);
  const apiURL = 'https://fetch-me.vercel.app/api/shopping/items';
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    filterArticles();
    async function filterArticles() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <section className="FilterSection">
      <input
        type="text"
        placeholder="Search article..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="FilterList">
        {articles
          .filter((article) => {
            if (searchTerm === '') {
              return searchTerm;
            } else if (
              article.name.en.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return article;
            }
          })
          .map((article, index) => {
            return (
              <ul className="FilteredArticles" key={index}>
                <li className="FilteredArticle">{article.name.en}</li>
              </ul>
            );
          })}
      </div>
    </section>
  );
}
