import * as model from './model';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const recipeId = window.location.hash.replace('#', '');

    if (!recipeId) return;

    recipeView.renderSpinner();

    await model.loadRecipe(recipeId);

    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipes));