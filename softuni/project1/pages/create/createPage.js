import { createTemplate } from "./createTemplate.js";

async function submitHandler(ctx, e) {
    e.preventDefault();

}



function getView(ctx) {
    let boundSubmitHandler = submitHandler.bind(null, ctx);
    let form = {
        submitHandler: boundSubmitHandler
    };
    let templateResult = createTemplate(form)
    ctx.renderView(templateResult);


}
export default {
    getView
}