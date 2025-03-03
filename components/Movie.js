export function Movie(movie) {
  return `
    <div class="row">
        <div class="col-5">
            <img src ="https://image.tmdb.org/t/p/w500/${movie.backdrop_path}" class="card-img-top">
        </div>
        <div class="col-6 offset-1">
                    <div class="d-flex justify-content-between align-items-center"> 
                        <h3> ${movie.original_title}</h3>
                        <div>
                            <button class="btn btn-sm btn-outline-warning" id="add-to-favorites">
                            <i class="bi bi-heart-fill"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-warning" id="share">
                            <i class="bi bi-share"></i>
                            </button>
                        </div>
                    </div>
                <p class="my-4">
                    ${movie.overview} 
                </p> 
                <div>
                    <span>Status: ${movie.status}</span>
                    <br/>
                    <span>Revenue: &dollar;${movie.revenue}</span>
                    <br/>
                    <span><i class="bi bi-calendar"></i>${movie.release_date}</span>
                    <br/>
                    <span><i class="bi bi-star"></i>${movie.vote_average} / 10</span> 
                </div>
        </div>
    </div>
    `;
}
