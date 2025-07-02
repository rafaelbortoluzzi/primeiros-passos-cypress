class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
      performanceButton:
        '[href="/web/index.php/performance/viewPerformanceModule"]',
      recruitmentButton:
        '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
      timeButton: '[href="/web/index.php/time/viewTimeModule"]',
      leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
      pimButton: '[href="/web/index.php/pim/viewPimModule"]',
      adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
      directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
      maintenanceButton:
        '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
      claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
      buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
    };
    return selectors;
  }
  accessMyInfoPage() {
    cy.get(this.selectorsList().myInfoButton).click();
  }
  accessPerformancePage() {
    cy.get(this.selectorsList().performanceButton).click();
  }
}

export default MenuPage;
