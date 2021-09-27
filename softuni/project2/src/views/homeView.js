import { html } from "../../node_modules/lit-html/lit-html.js";



let homeTemplate = () => html /* html */ `
<section>
<h2>Home Page</h2>
<p> lorem 10</p>
</section>   
`




export function homePage(ctx) {
    ctx.render(homeTemplate());
};