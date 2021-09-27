import { html } from '../../node_modules/lit-html/lit-html.js'

const showUserIfo = (email) => html /* html */ `
<span>Welcome ${email}</span>
`
const guestButtons = () => html /* html */ `
<a class="nav-link" href="/login">Login</a>
<a class="nav-link" href="/register">Register</a>
`;
const privateButtons = () => html /* html */ `
<a class="nav-link" href="/my-movies">My Movies</a>
<a class="nav-link" href="/movies/add">Add Movie</a>
`;
const navigationTemplate = (isAuthenticated, email) => html /* html */ `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MovieDB</a>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
             <a class="nav-link" href="/movies">Movies</a>
            ${isAuthenticated
    ? privateButtons()
    : guestButtons()
  }
        </ul>
    </div>
    ${isAuthenticated ? showUserIfo(email) : ''}
  </div>
</nav>
`
export function renderNavigation(ctx) {
    console.log(ctx);
    console.log(localStorage);
    return navigationTemplate(ctx.isAuthenticated, ctx.email);
}
z