import authService from "../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";

async function submitHandler(ctx, e) {
    e.preventDefault();
    let formData = new FormData(e.target);



    let user = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    let registerResult = await authService.register(user);
    ctx.page.redirect('/dashboard');

}



function getView(ctx) {
    let boundSubmitHandler = submitHandler.bind(null, ctx);

    let templateResult = registerTemplate(boundSubmitHandler)
    ctx.renderView(templateResult);


}
export default {
    getView
}