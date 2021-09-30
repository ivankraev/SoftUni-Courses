import authService from "../services/authService.js"
import { navTemplate } from "./navTemplate.js"

function getView(ctx, next) {
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        currentPage: ctx.pathname,
    }


    let templateResult = navTemplate(navInfo)
    ctx.renderNav(templateResult);
    next();


}
export default {
    getView
}