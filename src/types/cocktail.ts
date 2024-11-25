export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strGlass: string;
  [key: string]: string | null;
}

export interface CocktailsState {
  cocktails: Record<string, Cocktail>;
  loading: boolean;
  error: string | null;
}
