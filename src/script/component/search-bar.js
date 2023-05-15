class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
          .search-container > input{
            background-color: #DFF6FF;
            padding: 5px 8px;
            border-radius: 10px;
          }
          .search-button{
            background-color: #47B5FF;
            border: none;
            border-radius: 10px;
            color: #06283D;
            padding: 6px 8px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
            margin: 4px 2px;
            cursor: pointer;
          }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search Movie" id="searchElement" type="search">
        <button id="searchButtonElement" class="search-button" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement')
        .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
