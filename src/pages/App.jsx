import { Navigationbar } from "../components/Navigationbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../components/Footer";
import { ListRecipes } from "../components/ListRecipes";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>EasyVeg | Ricette Vegetariane e Vita Sostenibile</title>
        <meta
          name="description"
          content="Scopri ricette vegetariane facili e veloci, consigli per uno stile di vita sano e sostenibile, e l'ispirazione per trasformare il mondo un ingrediente alla volta."
        />
      </Helmet>

      <ScrollToTop />
      <Navigationbar />

      <div className="wallpaper"></div>
      <div className="home1">
        <img src="vegetable.jpg" alt="img vegetarian cuisine" loading="lazy" />

        <div className="slogan">
          <h1>
            TRANSFORM THE WORLD,
            <br></br>
            ONE INGREDIENT AT A TIME.
          </h1>

          <div className="slogan-p">
            <p>
              Choose wellness and discover the taste of a vegan lifestyle.
              <br></br>
              Recipes, inspiration, awareness: everything in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="home2">
        <h2>Support a healthy and sustainable lifestyle</h2>
        <p>
          Understanding food and knowing how to prepare it is essential to
          taking care of ourselves over time. This is why we promote a{" "}
          <span className="bold"> plant-based cuisine</span>, A conscious choice
          that is good for your health, stems from an ethical vision, and
          <span className="bold">protects the environment we live in.</span>
        </p>
      </div>

      <div className="home3">
        <h3>
          Vegetarian recipes,
          <br></br>
          easy and fast
        </h3>
        <p>Get inspired</p>

        <ListRecipes></ListRecipes>
      </div>

      <div className="home4">
        <h3>
          A space where plant-based cuisine isn't a sacrifice, but an adventure
          of flavor and creativity that can make a difference every day.
        </h3>
        <button className="bt-search">
          <Link to={"/search"} className="bold">
            Search for a recipe
          </Link>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
