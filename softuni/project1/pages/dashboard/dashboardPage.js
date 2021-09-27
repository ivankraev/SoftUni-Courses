import { dashboardTemplate } from "./dashboardTemplates.js"

async function getView(context) {
    console.log(context);
    let templateResult = dashboardTemplate([]);
    context.renderView(templateResult);
}
export default {
    getView
}