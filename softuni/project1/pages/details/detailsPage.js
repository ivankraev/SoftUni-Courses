import authService from "../../services/authService.js";
import furnitureService from "../../services/furnitureService.js";
import { detailsTemplate } from "./detailsTemplate.js";


async function deleteHandler(ctx, id, e) {
    let confirmed = confirm('Are you sure you want to delete this?');
    if (confirmed) {
        let deleteResult = await furnitureService.deleteItem(id);
        ctx.page.redirect('/dashboard');
    }
}



async function getView(ctx) {

    let id = ctx.params.id;
    let boundDeleteHandler = deleteHandler.bind(null, ctx, id);

    let furniture = await furnitureService.get(id);
    let isOwner = authService.getUserId() === furniture._ownerId;
    let templateResult = detailsTemplate(furniture, boundDeleteHandler, isOwner);
    ctx.renderView(templateResult);
}
export default {
    getView
}