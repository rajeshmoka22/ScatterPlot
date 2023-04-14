
class Builder{
  #url;
  setDomain(domain) {
    this.#url = domain;
    return this;
  }

  setPath(path){
    this.#url = `${this.#url}/${path}`;
    return this;
  }

  finish() {
    return this.#url;
  }
}
const builder = new Builder();
export default  builder;