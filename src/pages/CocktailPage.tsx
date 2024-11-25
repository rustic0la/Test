import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchCocktail } from "../store/cocktailsSlice";
import { CocktailCode } from "../constants/routes";
import LazyImage from "../components/LazyImage";
import getIngredientMeasurePairs from "../utils";

interface Props {
  cocktailCode: CocktailCode;
}

const CocktailPage: React.FC<Props> = ({ cocktailCode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cocktails, loading, error } = useSelector(
    (state: RootState) => state.cocktails
  );
  const cocktail = cocktails[cocktailCode];
  const ingredientMeasurePairs = getIngredientMeasurePairs(cocktail);

  useEffect(() => {
    if (!cocktail && !loading) {
      dispatch(fetchCocktail(cocktailCode));
    }
  }, [cocktailCode, cocktail, loading, dispatch]);

  if (loading) {
    return <div className="cocktail">Loading...</div>;
  }

  if (error) {
    return (
      <div className="cocktail" style={{ color: "red" }}>
        {error}
      </div>
    );
  }

  if (!cocktail) {
    return null;
  }

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

export default CocktailPage;
