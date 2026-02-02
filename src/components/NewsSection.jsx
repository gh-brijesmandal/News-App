import { useState, useEffect } from "react";

export default function NewsSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2026-02-02&sortBy=popularity&apiKey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch news!");
        }
        return response.json();
      })
      .then((response) => setArticles(response.articles || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="news-section text-center mt-5 mb-5">
      <h2>
        Welcome to the <span class="badge text-bg-success">News App</span>
      </h2>
    </section>
  );
}
