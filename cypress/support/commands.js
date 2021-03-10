import "@testing-library/cypress/add-commands";
// general Commands

Cypress.Commands.add("fillCities", () => {
  cy.get('[data-test = "twoWayRadio"]').click();
  cy.get('[data-test = "originPicker"]').click();
  cy.findByRole("link", { name: /تهران/i }).click();

  cy.get('[data-test = "destinationPicker"]').click();
  cy.findByRole("link", { name: /مشهد/i }).click();
});

Cypress.Commands.add("fillTimes", (startDate, endDate) => {
  cy.findAllByText(startDate).each((el, index) => {
    if (index === 0) {
      //  cy.log("this is the first 20");
      el.click();
    }
  });

  cy.findAllByText(endDate).each((el, index) => {
    if (index === 0) {
      // cy.log("this is the first 22");
      el.click();
    }
  });
});

Cypress.Commands.add("increaseNumberOfPassengers", (numberOfClicks) => {
  cy.get('[data-test = "passengerPickerValueIncrease"]').each((el, idx) => {
    if (idx === 0) {
      let numberOfClickArr = Array.from(
        { length: numberOfClicks },
        (v, k) => k + 1
      );
      cy.wrap(numberOfClickArr).each(() => {
        el.click();
      });
    }
  });
});
