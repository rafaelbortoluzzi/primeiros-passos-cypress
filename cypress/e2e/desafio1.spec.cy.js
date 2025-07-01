import userData from "../fixtures/user-data.json";

describe("Orange HRM Tests", () => {
  const selectorsList = {
    usernameField: "[name= 'username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    topbarHeader: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    submitButton: ".oxd-button--medium",
    comboboxSelector: ".oxd-select-wrapper",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(16)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    fourthItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
  };

  it.only("User Info Update - Success", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorsList.topbarHeader).contains("Dashboard");
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.comboboxSelector).eq(0).click();
    cy.get(selectorsList.secondItemCombobox).click();
    cy.get(selectorsList.comboboxSelector).eq(1).click();
    cy.get(selectorsList.thirdItemCombobox).click();
    cy.get(selectorsList.comboboxSelector).eq(1).click();
    cy.get(selectorsList.fourthItemCombobox).click();
  });
});
