class MyInfoPage {
  selectorsList() {
    const selectors = {
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
    return selectors;
  }
  fillwithData() {
    cy.get(this.selectorsList().firstNameField).clear().type("Rafael");
    cy.get(this.selectorsList().middleNameField).clear().type("Danilo Santos");
    cy.get(this.selectorsList().lastNameField).clear().type("Bortoluzzi");
    cy.get(this.selectorsList().genericField).eq(3).clear().type("123456");
    cy.get(this.selectorsList().genericField).eq(4).clear().type("1234");
    cy.get(this.selectorsList().genericField).eq(5).clear().type("1234");
    cy.get(this.selectorsList().genericField).eq(6).clear().type("2025-01-01");
    cy.get(this.selectorsList().dateCloseButton).click();
  }
  submitData() {
    cy.get(this.selectorsList().submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  }
}

export default MyInfoPage;
