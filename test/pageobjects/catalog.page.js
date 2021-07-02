import Page from "./page";

class Catalog extends Page {
  get buyGood() {
    return $("[data-qa='60b7d25ae96e1dd509c11909=good'] button");
  }

  open() {
    return super.open();
  }
}

export default new Catalog();
