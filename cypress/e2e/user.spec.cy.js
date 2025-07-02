import userData from "../fixtures/user-data";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Tests", () => {
  it("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkIfDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.fillPersonalDetails("Rafael", "Danilo", "Bortoluzzi");
    myInfoPage.fillEmployeeDetails("Employee", "12312", "111222", "2025-01-01");
    myInfoPage.submitData();
  });
});
