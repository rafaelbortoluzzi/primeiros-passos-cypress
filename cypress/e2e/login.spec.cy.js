import userData from "../fixtures/user-data";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Login Orange HRM Tests", () => {
  it("Login - Failure", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    loginPage.checkWrongCredentialsAlert();
  });
  it("Login - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkIfDashboardPage();
  });
});
