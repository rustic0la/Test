import { Cocktail as ICocktail } from "../types/cocktail";
import getIngredientMeasurePairs from "../utils";
import LazyImage from "./LazyImage";

const Cocktail = ({ cocktail }: { cocktail: ICocktail }) => {
  const ingredientMeasurePairs = getIngredientMeasurePairs(cocktail);

  return (
    <div className="cocktail">
      <div className="cocktail__container">
        <div className="cocktail__content">
          <h1 className="cocktail__title">{cocktail.strDrink}</h1>
          <div className="cocktail__section">
            <h2 className="cocktail__section-title">Category</h2>
            <p>{cocktail.strCategory}</p>
          </div>
          <div className="cocktail__section">
            <h2 className="cocktail__section-title">Glass</h2>
            <p>{cocktail.strGlass}</p>
          </div>
          <div className="cocktail__section">
            <h2 className="cocktail__section-title">Instructions:</h2>
            <p>{cocktail.strInstructions}</p>
          </div>
          <div className="cocktail__section">
            <h2 className="cocktail__section-title">List of ingredients:</h2>
            <ul>
              {ingredientMeasurePairs.map(([ingredient, measure]) => (
                <li key={`${measure}_${ingredient}`}>
                  {`${measure} ${ingredient}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cocktail__image-wrapper">
          <LazyImage
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="cocktail__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
