import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
};

export const loadRecipe = async function (recipeId) {
  try {
    const data = await getJSON(`${API_URL}/${recipeId}`);
    const { id, title, publisher, source_url, image_url, servings ,cooking_time, ingredients }  = data.data.recipe;
    
    state.recipe = {
      id,
      title,
      publisher,
      sourceUrl: source_url,
      image: image_url,
      servings,
      cookingTime: cooking_time,
      ingredients
    };
  } catch (error) {
    throw error;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    
    const data = await getJSON(`${API_URL}?search=${query}`);
    const { recipes }  = data.data;

    state.search.results = recipes.map(({ id, title, publisher, image_url }) => ({ id, title, publisher, image: image_url }));
  } catch (error) {
    throw error;
  }
};