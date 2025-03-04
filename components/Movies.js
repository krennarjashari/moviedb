export function Movies(movies) {
  const current_page = window.location.pathname;
  let movies_html = `<div class="row">`;

  movies.forEach((movie) => {
    movies_html += `
    <div class="col-md-3 col-sm-12 mb-3">
        <div class="card" style="height:300px">
            <img src="https://image.tmdb.org/t/p/w500/${
              movie.backdrop_path
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <div class="card-text d-flex align-items-center justify-content-between">
                    <div>
                        <span><i class="bi bi-calendar"></i>${
                          movie.release_date
                        }</span>
                        <br/>
                        <span><i class="bi bi-star"></i>${
                          movie.vote_average
                        } / 10</span>
                    </div>
                    <div class="actions">
                        ${
                          current_page === "/favorites.html"
                            ? `<button class="btn btn-sm btn-outline-secondary" movie-id=${movie.id}><i class="bi bi-trash"></i></button>`
                            : ""
                        }
                        <a href="movie.html?id=${
                          movie.id
                        }" class="btn btn-sm btn-outline-secondary"><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  movies_html += `</div>`;

  return movies_html;
}
