export default function Navbar({ setCategory }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <span className="navbar-brand">News App</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {[
              ["politics", "Politics"],
              ["tax", "Taxes"],
              ["technology", "Technology"],
              ["trade", "Trade"],
            ].map(([value, label]) => (
              <button
                key={value}
                className="nav-link btn btn-link text-start"
                type="button"
                onClick={() => setCategory(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
