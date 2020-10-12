let apiKey = "18623544-b4f5dbb9e909edd8c116f4e97";
export default {
  _searchQ: "",
  perPage: 4,
  page: 1,
  getFetch(){
    let url = `https://pixabay.com/api/videos/?key=${apiKey}&q=${this._searchQ}&per_page=${this.perPage}&`;
    return fetch(url).then(res => res.json());
  },
  get searchQ(){
    return this._searchQ
  },
  set searchQ(newSearch) {
    this._searchQ = newSearch
  }
}