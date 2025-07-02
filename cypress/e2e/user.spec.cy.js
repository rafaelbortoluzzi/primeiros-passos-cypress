import userData from "../fixtures/user-data";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const Chance = require("chance");

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

function generateAnoDiaMes() {
  const dateStr = chance.date({ string: true, american: false });
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month}-${day}`;
}

describe("Orange HRM Tests", () => {
  it("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
    dashboardPage.checkIfDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.string(),
      chance.last()
    );
    myInfoPage.fillEmployeeDetails(
      "Employee",
      chance.integer({ min: 1000, max: 9999 }),
      chance.integer({ min: 100000, max: 999999 }),
      generateAnoDiaMes(),
      chance.integer({ min: 2, max: 120 }),
      chance.integer({ min: 2, max: 4 })
    );
    myInfoPage.submitData();
  });
});
