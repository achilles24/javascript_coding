```HTML
<div id="app">
  <div class="search-input" id="search-input">
    <input id="search" name="searchTerm" />
    <button id="searchBtn">Search</button>
    <button id="clearBtn">Clear</button>
  </div>
  <div id="search-list" class="search-list"></div>
  <div class="paginations"></div>
</div>
```
// index.js

const app = document.getElementById('app');

const searchButton = document.getElementById('searchBtn');
const clearButton = document.getElementById('clearBtn');
const searchList = document.querySelector('.search-list');
const paginations = document.querySelector('.paginations');

let resultList;

const URL = 'https://jsonplaceholder.typicode.com/todos';

const PAGE = 1;
const LIMIT = 10;

searchButton.addEventListener('click', handleSearch);
clearButton.addEventListener('click', clearSearch);
paginations.addEventListener('click', handleNavigate);

function clearSearch() {
  searchList.innerHTML = '';
  paginations.innerHTML = '';
}

function handleNavigate(e) {
  const match = e.target.closest('.btn');
  if (match) {
    clearSearch();
    const goto = e.target.dataset.goto;
    renderResult(resultList, goto);
  }
}

function createButton(page, type) {
  return `<button class="btn btn-${
    type === 'prev' ? 'prev' : 'nxt'
  }" data-goto=${type === 'prev' ? page - 1 : parseInt(page) + 1}>
      <span class="arrow">${type === 'prev' ? '<<' : '>>'}</span>
      Page ${type === 'prev' ? page - 1 : parseInt(page) + 1}
    </button>`;
}

function renderButton(page, results, itemPerPage) {
  let totalPages = Math.ceil(results.length / itemPerPage);
  let button;
  if (page == 1 && totalPages > 1) {
    button = createButton(page, 'next');
  } else if (page < totalPages) {
    button = `${createButton(page, 'prev')}${createButton(page, 'next')}`;
  } else if (page == totalPages) {
    button = createButton(page, 'prev');
  }
  paginations.insertAdjacentHTML('afterbegin', button);
}

function renderResult(results, page = PAGE, itemPerPage = LIMIT) {
  const start = (page - 1) * itemPerPage;
  const end = page * itemPerPage;
  renderButton(page, results, itemPerPage);
  results.slice(start, end).forEach((each) => renderItems(each));
}

function renderItems(todo) {
  const markup = `<div class="todo">${todo.title}</div>`;
  searchList.insertAdjacentHTML('beforeend', markup);
}

function handleSearch() {
  const searchInput = document.getElementById('search').value;
  fetchData(searchInput).then((response) => {
    resultList = response;
    renderResult(response);
  });
}

async function fetchData(keyword) {
  if (keyword.length > 0) {
    let url = `${URL}?title_like=^${keyword}`;
    let response = await fetch(url);
    return await response.json();
  }
}


