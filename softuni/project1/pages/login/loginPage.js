import authService from "../../services/authService.js";
import { loginTemplate } from "./loginTemplate.js";


async function submitHandler(ctx, e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    let loginResult = await authService.login(user);
    ctx.page.redirect('/dashboard');

}



function getView(ctx) {
    let boundSubmitHandler = submitHandler.bind(null, ctx);
    let form = {
        submitHandler: boundSubmitHandler,
    };
    let templateResult = loginTemplate(form)
    ctx.renderView(templateResult);


}
export default {
    getView
}