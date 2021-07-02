import CatalogPage from "../pageobjects/catalog.page";
import SecurePage from "../pageobjects/secure.page";

describe("My internetshop test application", () => {
  it("should login with valid credentials", async () => {
    await CatalogPage.open("");
    await browser.pause(3000);
    await $('[name="lange"]')[0].click();
    await browser.pause(3000);

    // await CatalogPage.buyGood.click();
    // await browser.pause(3000);
  });
});
