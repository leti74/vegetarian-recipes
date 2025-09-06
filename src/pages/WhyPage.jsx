import { Navigationbar } from "../components/Navigationbar";
import "./WhyPage.css";
import { Footer } from "../components/Footer";
import { WhyVeg } from "../components/WhyVeg";
export const WhyPage = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <WhyVeg
        whyIMG="/vegetarian-recipes/farms.jpg"
        whyTitle1="Why animals deserve fairness."
        whyTesto="We often distinguish between companions and farm animals, but
        this division is artificial. A pig can be as affectionate
        as a dog, and a cow can bond deeply with its
        baby. Only some animals receive love, while others are
        exploited. Changing perspective means recognizing that all
        animals feel, suffer, and desire to live.
        With a plant-based diet, we can help save hundreds
        of lives every year. It's a powerful gesture that starts with a simple
        choice."
        whyTitle2="The true cost of
        meat."
        whyParagraph="In Italy alone, hundreds of millions of animals are raised and killed every year for food. Behind the
        packaging on the shelves, there are stories of chickens grown
        in less than two months, rabbits killed at three months, and cows that
        don't even live a quarter of the time that
        nature would allow them. The places where they are raised are
        often crowded, devoid of stimulation, and full of invisible
        suffering. In those facilities, time stands still: they
        survive, waiting for the day when it will all end. To
        prevent dangerous behaviors caused by the stress of
        overcrowding, the animals are mutilated: beaks, tails, horns.
        Pigs are castrated without anesthesia. These procedures
        are performed on sentient beings, who feel pain. In narrow
        cages, bare pens, or sheds, the animals cannot
        express their natural behaviors. They live deprived of everything
        that would make their lives worth living. Fish
        are often the great forgotten ones. Despite feeling pain,
        they are raised in densely overcrowded conditions, immersed
        in polluted or stagnant water. Often, there are no
        regulations regarding their slaughter: they are left to die
        slowly, out of the water, so as not to drown our
        consciences. Yet, they too fight for life."
        whyStyle="animal-theme"
      ></WhyVeg>

      <WhyVeg
        whyIMG="/vegetarian-recipes/environment.jpg"
        whyTitle1="Because it's our planet and our responsibility"
        whyTesto="The Earth is our only home, and caring for it is a choice that goes far beyond our present: it means protecting every living being that inhabits it. And while we're taught as children to turn off the lights or not waste water, no one explains to us that the most powerful gesture we make every day: choosing what to eat."
        whyTitle2="The enormous impact on the planet."
        whyParagraph="Imagine millions of animals turning plant-based feed into meat, milk, or eggs every day. It seems simple, but it's one of the most inefficient energy conversions in existence: we use enormous quantities of grains and legumes to feed animals instead of directly feeding them to people. Globally, most of the soy grown ends up in animal feed, and only a tiny fraction reaches our tables. A plant-based diet, by contrast, uses fewer resources and contributes to a more equitable use of food on Earth. When we talk about climate change, we think of factories and cars. But there's another source, quieter but even more impactful: livestock farming. Methane and nitrous oxide emissions from animals are among the most dangerous for global warming.
        We're told to turn off the faucet while brushing our teeth to save water—a helpful gesture, but insignificant compared to the amount of water needed to produce meat and animal products. Each hamburger requires thousands of liters of water, not only for the animal itself but also to grow its food and manage the waste it produces. Shifting our choices towards a plant-based diet means concretely reducing our water impact, every day."
        whyStyle="planet-theme"
      ></WhyVeg>

      <WhyVeg
        whyIMG="/vegetarian-recipes/wellbeing.jpg"
        whyTitle1="Because our health depends on the food we eat and the environment we live in."
        whyTesto="Following a plant-based diet is a recommended nutritional strategy at all stages of life. The latest scientific research confirms that a plant-based diet can offer numerous benefits for overall health, if well-balanced and planned. Numerous medical and nutritional professionals affirm that properly structured vegan and vegetarian diets are perfectly nutritionally adequate and can positively contribute to the prevention and management of many chronic diseases."
        whyTitle2="The power of a plant-based diet."
        whyParagraph="Cardiovascular diseases remain a leading cause of death globally. A healthy lifestyle, including a diet rich in plant-based foods, can play a crucial role in reducing risk factors such as high cholesterol and high blood pressure.
        Furthermore, regular consumption of fruits, vegetables, whole grains, legumes, and nuts is a powerful weapon against type 2 diabetes and obesity, often aggravated by excessive consumption of meat and simple sugars. Intensive livestock farming has negative effects not only on animals, but also on humans and the environment. The systemic use of antibiotics in livestock farming contributes to antimicrobial resistance, while pollution from animal waste and deforestation compromises air and water quality.
        Furthermore, most emerging infectious diseases originate from close contact between humans and animals, often facilitated by intensive livestock farming and the destruction of natural habitats. It is precisely in these contexts that viruses make the so-called species leap, generating new zoonoses."
        whyStyle="health-theme"
      ></WhyVeg>
      <Footer></Footer>
    </>
  );
};
