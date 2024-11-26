import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchCocktail } from "../store/cocktailsSlice";
import { CocktailCode } from "../constants/routes";
import Cocktail from "../components/Cocktail";

interface Props {
  cocktailCode: CocktailCode;
}

const CocktailPage: React.FC<Props> = ({ cocktailCode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cocktails, loading, error } = useSelector(
    (state: RootState) => state.cocktails
  );
  const cocktailsArr = cocktails[cocktailCode];

  useEffect(() => {
    if (!cocktailsArr || (cocktailsArr.length === 0 && !loading)) {
      dispatch(fetchCocktail(cocktailCode));
    }
  }, [cocktailCode, cocktailsArr, loading, dispatch]);

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

  if (!cocktailsArr || cocktailsArr.length === 0) {
    return null;
  }

  return (
    <div className="cocktails__container">
      {cocktailsArr.map((c) => (
        <Fragment key={c.idDrink}>
          <Cocktail cocktail={c} />
        </Fragment>
      ))}
    </div>
  );
};

export default CocktailPage;
