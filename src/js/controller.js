const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.jonas.io/

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res);
    console.log(data);

    let { id, title, publisher, source_url, image_url, servings ,cooking_time, ingredients }  = data.data.recipe;
    
    recipe = {
      id,
      title,
      publisher,
      sourceUrl: source_url,
      image: image_url,
      servings,
      cookingTime: cooking_time,
      ingredients
    };

    console.log(recipe);
  } catch (error) {
    alert(error);
  }
};

showRecipe();