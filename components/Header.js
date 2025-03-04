export function Header() {
  const current_page = window.location.pathname;

  return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">moviedb</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="home.html"><i class="bi bi-house"></i>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="favorites.html"><i class="bi bi-heart-fill"></i> Favorites</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html"><i class="bi bi-info-circle"></i>About</a>
        </li>
      </ul>
      ${
        current_page === "/home.html"
          ? `<button class="btn btn-outline-success ms-4" id="search-btn">
            <i class="bi bi-search"></i>
          </button>`
          : ""
      }
    </div>
  </div>
</nav>`;
}
