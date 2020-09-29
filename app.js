import store from './store';
import { addRecipe } from './actions/recipes.action';
import { addIngredient } from './actions/ingredients.action';

store.dispatch(addRecipe('Pancakes'));
store.dispatch(addIngredient('Pancakes', 'Egg', 3));
