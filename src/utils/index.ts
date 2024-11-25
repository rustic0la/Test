interface CocktailData {
  [key: string]: string | null;
}

function getIngredientMeasurePairs(
  cocktailData: CocktailData
): [string, string][] {
  const pairs: [string, string][] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktailData?.[`strIngredient${i}`];
    const measure = cocktailData?.[`strMeasure${i}`];

    if (ingredient && measure) {
      pairs.push([ingredient, measure.trim()]);
    }
  }

  return pairs;
}

export default getIngredientMeasurePairs;
