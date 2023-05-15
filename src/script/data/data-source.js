const apiKey = '28b16e5b68e7ea71ccdf6af43f6db542';
const baseUrl = 'https://api.themoviedb.org/3';

class DataSource {
  static searchMovie(keyword) {
    return fetch(`${baseUrl}/search/movie?query=${keyword}&page=1&api_key=${apiKey}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.results) {
            return Promise.resolve(responseJson.results);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        })
  }
  
}


export default DataSource;
