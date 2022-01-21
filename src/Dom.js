import removeChildren from "./delChildren";
import generateGymPage from "./gymModule";
import generateMonthPage from "./monthModule";
import { generateTodayPage, autoGenerateTodayPage } from "./todayModule";
import generateWeekPage from "./weekModule";
import addProject from "./addProject";

export default function generateDOM() {
    const taskContainer = document.querySelector('.task-container');
    if (taskContainer.innerHTML === '\n        ') {
        autoGenerateTodayPage();
    }
    generateGymPage();
    generateTodayPage();
    generateWeekPage();
    generateMonthPage();
    addProject();
}