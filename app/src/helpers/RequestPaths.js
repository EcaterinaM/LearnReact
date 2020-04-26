export default class RequestPaths {
    static paths = [
        { path: '/alcoholic', request: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic' },
        { path: '/non-alcoholic', request: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic' },
        { path: '/ordinary', request: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink' },
        { path: '/cocktail-glass', request: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass' },
        { path: '/champagne-flute', request: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute' }
    ];

    static getRequestPath(path) {
        return this.paths.find(p => p.path === path).request;
    }
}