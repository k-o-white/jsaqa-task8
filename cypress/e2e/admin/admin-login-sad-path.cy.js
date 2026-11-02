import selectors from "../../fixtures/selectors.json";
import loginData from "../../fixtures/login-data.json";

describe("Autorization to admin panel", () => {
  beforeEach(() => {
    cy.visit("/admin/");
  });

  it("Authorization with empty login", () => {
    cy.login(
      null, 
      loginData.right.password, 
      selectors.admin.email, 
      selectors.admin.password, 
      selectors.admin.submit
    );
    cy.shouldHaveValueMissing(selectors.admin.email);
  });

  it("Authorization with empty password", () => {
    cy.login(
      loginData.wrong.login, 
      null, 
      selectors.admin.email, 
      selectors.admin.password, 
      selectors.admin.submit
    );
    cy.shouldHaveValueMissing(selectors.admin.password);
  });
});  