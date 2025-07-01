class DashboardPage {
  selectorsList() {
    const selectors = {
      topbarHeader: ".oxd-topbar-header-breadcrumb-module",
    };

    return selectors;
  }

  checkIfDashboardPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(this.selectorsList().topbarHeader).contains("Dashboard");
  }
}

export default DashboardPage;
