import { html } from '../../node_modules/lit-html/lit-html.js'
import * as movieService from '../services/movieService.js'
const addMovieTemplate = (onSubmit) => html /* html */ `
<h3>Add Movie</h3>
<form @submit=${onSubmit}>
<div class="mb-3">
  <label for="movie-title" class="form-label">Title</label>
  <input type="text" class="form-control" name="title" id="movie-title">
</div>
<div class="mb-3">
  <label for="movie-image-url" class="form-label">Image Url</label>
  <textarea class="form-control" id="movie-image-url" name="imageUrl" rows="3"></textarea>
</div>
<div class="mb-3">
  <label for="movie-description" class="form-label">Description</label>
  <textarea class="form-control" id="movie-description" name="description" rows="3"></textarea>
</div>
<div class="bm-3">
<input class="form-controll" type="submit" value="Create" /> 
</div>


</form>



`




export function addMoviePage(ctx) {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        console.log(formData.get('title'));



    }




    ctx.render(addMovieTemplate(onSubmit));
};