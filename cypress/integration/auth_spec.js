describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("Sign In Onboarding", () => {
  it("Should successfully load", () => {
    cy.visit("http://localhost:3000/onboarding");
  });

  it("Continue Button Should Work", () => {
    cy.get("[id=getStarted]").click();
  });

  it("Should show errors under inputs", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should complete step one signup", () => {
    cy.get("[name=dateOfBirth]")
      .type("1989-01-01")
      .should("have.value", "1989-01-01");
    cy.get("[name=gender]")
      .select("Non-Binary")
      .should("have.value", "Non-Binary");
    cy.get("[name=gender]").select("male").should("have.value", "male");
    cy.get("[name=gender]").select("female").should("have.value", "female");
    cy.get("[data-cy=submit]").click();
  });

  it("Should show errors under radios", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should select Activity Level", () => {
    cy.get("[id=ActivityLevel1]").check();
    cy.get("[id=activityLevel]").check();
    cy.get("[id=ActivityLevel3]").check();
    cy.get("[id=ActivityLevel4]").check();
    cy.get("[data-cy=submit]").click();
  });

  it("Should show errors under inputs", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should recieve BMI input", () => {
    cy.get("[name=ft]").type("6").should("have.value", "6");
    cy.get("[id=inches]").type("6").should("have.value", "6");
    cy.get("[id=pounds]").type("160").should("have.value", "160");
    cy.get("[data-cy=submit]").click();
  });

  it("Should proceed to next page", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should show errors under inputs", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should fill out Sign In forms and Create User", () => {
    cy.get("[name=username]")
      .type("Steve Irwin")
      .should("have.value", "Steve Irwin");
    cy.get("[name=email]")
      .type("email@email.com")
      .should("have.value", "email@email.com");
    cy.get("[name=password]").type("password").should("have.value", "password");
    cy.get("[name=password_repeat]")
      .type("password")
      .should("have.value", "password");
    cy.get("[data-cy=submit").click();
  });
});
