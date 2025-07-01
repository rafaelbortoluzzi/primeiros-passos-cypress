class DashboardPage {
  selectorsList() {
    const selectors = {
      topbarHeader: ".oxd-topbar-header-breadcrumb-module",
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    };

    return selectors;
  }

  checkIfDashboardPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(this.selectorsList().topbarHeader).contains("Dashboard");
  }

  goToMyInfoPage() {
    cy.get(this.selectorsList().myInfoButton).click();
  }
}

export default DashboardPage;
