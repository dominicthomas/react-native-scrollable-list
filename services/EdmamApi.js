import { APP_ID, APP_KEY } from '../apikeys'

const BASE_URL = 'https://api.edamam.com';
const SEARCH_ENDPOINT = '/search';
const DEFAULT_COUNT = 100;
const Health = {
    VEGAN: "vegan",
    RED_MEAT_FREE: "red-meat-free",
    PORK_FREE: "pork-free",
    SHELL_FISH_FREE: "shellfish-free",
    EGG_FREE: "egg-free",
    DAIRY_FREE: "dairy-free",
    CRUSTACEAN_FREE: "crustacean-free"
}

export const searchRecipes = async (query) => {
    const URL = BASE_URL + SEARCH_ENDPOINT
        + `?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}`
        + `&from=0&to=${DEFAULT_COUNT}`
        + `&health=${Health.VEGAN}`
        + `&health=${Health.RED_MEAT_FREE}`
        + `&health=${Health.PORK_FREE}`
        + `&health=${Health.SHELL_FISH_FREE}`
        + `&health=${Health.EGG_FREE}`
        + `&health=${Health.DAIRY_FREE}`
        + `&health=${Health.CRUSTACEAN_FREE}`;
    const res = await fetch(URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    return await res.json();
}