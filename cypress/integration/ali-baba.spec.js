//what the test should do
import "@testing-library/cypress/add-commands";

describe("alibaba tests", () => {
  it("visit without any problem", () => {
    cy.visit("https://www.alibaba.ir/");
  });

  describe("user will fill inputs and will get result ", () => {
    describe("fill travel data", () => {
      it("user initialize the form", () => {
        cy.fillCities();
        cy.fillTimes(20, 22);
        cy.get('[name = "passengers"]').click({ force: true });
        cy.increaseNumberOfPassengers(4);
      });
    });

    describe("click in search and show result", () => {
      it("click in search button", () => {
        cy.get('[data-test = "search"]').click({ force: true });
        cy.wait(10000);
      });
    });

    describe("scroll and click in footer", () => {
      it("click in conactus fields", () => {
        cy.findByRole("contentinfo").scrollIntoView();
        cy.wait(4000);
        let contact_us = cy.findByRole("link", {
          name: /تماس با ما/i,
        });
        contact_us.scrollIntoView();
        contact_us.click({ force: true });
      });
    });
  });
});
