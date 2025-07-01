import userData from "../fixtures/user-data.json";
import LoginPage from "../pages/loginPage.js";
import DashboardPage from "../pages/dashboardPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

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
  };

  it.only("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkIfDashboardPage();
    dashboardPage.goToMyInfoPage();

    // cy.visit("/auth/login");
    // cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    // cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    // cy.get(selectorsList.loginButton).click();
    // cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    // cy.get(selectorsList.topbarHeader).contains("Dashboard");
    // cy.get(selectorsList.myInfoButton).click();
    // cy.get(selectorsList.firstNameField).clear().type("Rafael");
    // cy.get(selectorsList.middleNameField).clear().type("Danilo Santos");
    // cy.get(selectorsList.lastNameField).clear().type("Bortoluzzi");
    // cy.get(selectorsList.genericField).eq(3).clear().type("1234");
    // cy.get(selectorsList.genericField).eq(4).clear().type("1234");
    // cy.get(selectorsList.genericField).eq(5).clear().type("1234");
    // cy.get(selectorsList.genericField).eq(6).clear().type("2025-01-01");
    // cy.get(selectorsList.dateCloseButton).click();
    // cy.get(selectorsList.submitButton).eq(0).click();
    // cy.get("body").should("contain", "Successfully Updated");
  });
  it("Login - Failure", () => {
    cy.visit("/auth/login");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  });
});
