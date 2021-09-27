import { html, render } from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'

const movieCardTemplate = ({ title, description, img, _id }) => html /* html */ `
<li class="movie-list-item" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="${title}">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <a href="/movies/${_id}" class="btn btn-primary">Details</a>
 </div>
</li>
`
const moviesTemplate = (movies) => html /* html */ `
<h2>Movie Page</h2>
<ul class="movie-list">
    ${movies.map(x => movieCardTemplate(x))}
</ul>
`;


export function moviePage(ctx) {
    movieService.getAll()
        .then(movies => {
            ctx.render(moviesTemplate(movies));
        });

};