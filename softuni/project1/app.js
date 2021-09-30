import page from "./node_modules/page/page.mjs";
import dashboardPage from "./pages/dashboard/dashboardPage.js";
import renderingMiddleware from "./rendering/renderingMiddleware.js";
import nav from "./nav/nav.js"
import loginPage from "./pages/login/loginPage.js";
import registerPage from "./pages/register/registerPage.js";
import authService from "./services/authService.js";
import detailsPage from "./pages/details/detailsPage.js";
import createPage from "./pages/create/createPage.js";
let appContainer = document.getElementById('viewContainer');
let navContainer = document.getElementById('navigation')
renderingMiddleware.initialize(appContainer, navContainer)

page('/dashboard', renderingMiddleware.decorateContext, nav.getView, dashboardPage.getView);
page('/login', renderingMiddleware.decorateContext, nav.getView, loginPage.getView);
page('/register', renderingMiddleware.decorateContext, nav.getView, registerPage.getView);
page('/logout', async(ctx) => {
    await authService.logout();
    ctx.page.redirect('/login')
});
page('/details/:id', renderingMiddleware.decorateContext, nav.getView, detailsPage.getView);
page('/create', renderingMiddleware.decorateContext, nav.getView, createPage.getView);

page('/index.html', '/dashboard');
page('/', '/dashboard')
page.start();