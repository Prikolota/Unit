const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function (event) {
    if (!searchForm.classList.contains('search--visible')) {
        event.preventDefault();
        searchForm.classList.toggle('search--visible');
    }
})