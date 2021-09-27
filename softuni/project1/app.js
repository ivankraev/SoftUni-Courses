import page from "./node_modules/page/page.mjs";
import dashboardPage from "./pages/dashboard/dashboardPage.js";
import renderingMiddleware from "./rendering/renderingMiddleware.js";
let appContainer = document.getElementById('viewContainer');
let navContainer = document.getElementById('navigation')
renderingMiddleware.initialize(appContainer, navContainer)

page('/dashboard', renderingMiddleware.decorateContext, dashboardPage.getView);
page('/index.html', '/dashboard');
page('/', '/dashboard')
page.start();