export function Movies(movies) {
  let movies_html = `<div class="row">`;

  movies.forEach((movie) => {
    movies_html += `
    <div class="col-md-3 col-sm-12 mb-3">
        <div class="card" style="height:300px">
            <img src="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <div class="card-text d-flex align-items-center justify-content-between">
                    <div>
                        <span><i class="bi bi-calendar"></i>${movie.release_date}</span>
                        <br/>
                        <span><i class="bi bi-star"></i>${movie.vote_average}</span>
                    </div>
                    <a href="#" class="btn btn-sm btn-outline-primary"><i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  movies_html += `</div>`;

  return movies_html;
}
