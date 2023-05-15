const baseImgUrl = 'https://image.tmdb.org/t/p/w500'
class MovieItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
    box-sizing: border-box;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .card {
    width: 300px;
    flex-wrap:wrap;
    margin: 20px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card img {
    width: 100%;
    height: auto;
  }
  
  .card-content {
    padding: 10px;
    background-color: #fff;
  }
  
  .card-content h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .card-content p {
    margin: 0;
    font-size: 16px;
  }
  
  .card-content a {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
  }
  
  .card-content a:hover {
    background-color: #444;
  }
    </style>
    <div class="container">
        <div class="card">
            <img src="${baseImgUrl}/${this._movie.poster_path}" alt="Card Image">
            <div class="card-content">
                <h3>${this._movie.title}</h3>
                <p>Date release :${this._movie.release_date}</p>
                <p>Rating : ${this._movie.vote_average}</p>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
