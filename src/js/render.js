import fetch from './fetch';
import refs from './refs';
import template from './../template/template.hbs';
import debounce from 'lodash.debounce'
import infiniteScroll from 'infinite-scroll'

refs.userInput.addEventListener('input', debounce((e) => {
  fetch.searchQ = e.target.value;
  refs.galleryList.innerHTML = "";
  fetch.getFetch()
    .then((data) => render(data.hits));
  e.target.value ="";
}, 1000));




function render(data){
  const item = template(data);
  refs.galleryList.insertAdjacentHTML('beforeend', item)
};
