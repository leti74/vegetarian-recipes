import "./RecipeID.css";
export const RecipeID = ({ recipeIMG, name, dish, mainIngredient }) => {
  return (
    <>
      <div className="recipe">
        <div className="img-container">
          <img src={recipeIMG} alt="img recipe " />
        </div>

        <div className="title-container">
          <h4>{name}</h4>
        </div>

        <div className="div-categories">
          <div className="bt-category">{dish}</div>
          <div className="bt-category">{mainIngredient}</div>
        </div>
      </div>
    </>
  );
};
