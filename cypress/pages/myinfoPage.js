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
      genderButton: ".oxd-radio-input",
    };
    return selectors;
  }
  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().middleNameField).clear().type(middleName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
  }
  fillEmployeeDetails(employeeId, OtherId, driversLicense, dateOfBirth) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId);
    cy.get(this.selectorsList().genericField)
      .eq(5)
      .clear()
      .type(driversLicense);
    cy.get(this.selectorsList().genericField).eq(6).clear().type(dateOfBirth);
    cy.get(this.selectorsList().dateCloseButton).click();
    cy.get(this.selectorsList().genderButton).eq(1).click();
  }
  submitData() {
    cy.get(this.selectorsList().submitButton).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  }
}

export default MyInfoPage;
