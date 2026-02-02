export default function NewsCard(props) {
  const { title, description, url, urlToImage, author } = props;

  return (
    <div className="card h-100 w-100 shadow-sm">
      <img
        src={urlToImage || "/placeholder.png"}
        className="card-img-top"
        alt={title || "news image"}
        style={{ height: "200px", objectFit: "cover" }}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.png";
        }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title || "No title"}</h5>

        <p className="card-text flex-grow-1">
          {description
            ? description.slice(0, 120)
            : "No description available."}
        </p>

        <small className="text-muted mb-2">{author || "Unknown author"}</small>

        <a
          href={url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noreferrer"
        >
          Read article
        </a>
      </div>
    </div>
  );
}

// title,description, url,urlToImage, author
