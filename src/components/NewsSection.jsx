import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

export default function NewsSection({ option }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${option}&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch(console.error);
  }, [option]);

  return (
    <section className="news-section text-center mt-5">
      <h2 className="mb-5">
        Welcome to the <span className="badge text-bg-success">News App</span>
      </h2>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {articles.length === 0 ? (
            <div className="col-12">
              <p className="lead">No articles available.</p>
              <p className="text-muted">
                {import.meta.env.VITE_API_KEY
                  ? "Try a different query or check your network (news API may return no results)."
                  : "No API key detected — add VITE_API_KEY to a .env file at the project root and restart the dev server."}
              </p>
            </div>
          ) : (
            articles.map((article, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4">
                <NewsCard
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  url={article.url}
                  urlToImage={article.urlToImage}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <footer className="bg-dark text-light">
        <div className="container-fluid py-4">
          <p className="text-center mb-0">Copyright © 2026 Brijes Mandal</p>
        </div>
      </footer>
    </section>
  );
}
