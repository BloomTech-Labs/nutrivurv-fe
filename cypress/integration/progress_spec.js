describe("Dashboard", () => {
  before("Login to the application", function () {
    cy.visit("/signin");
    cy.typeLogin({ email: "test@test.com", password: "123456789" });
    cy.get("[data-cy=submit]").click();
  });
  it("sidebar progress link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
