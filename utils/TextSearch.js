import MiniSearch from 'minisearch';

class TextSearch {
  constructor(items, options) {
    this.searchEngine = new MiniSearch(options)

    this.searchEngine.addAll(items)
  }

  searchBy(keyword) {
    return this.searchEngine.search(keyword);
  }
}

export default TextSearch;