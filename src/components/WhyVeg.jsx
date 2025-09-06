import "./WhyVeg.css";
export const WhyVeg = ({
  whyIMG,
  whyParagraph,
  whyTesto,
  whyTitle1,
  whyTitle2,
  whyStyle,
}) => {
  return (
    <>
      <div className="div1-why">
        <div className="background-img-why">
          <img src={whyIMG} alt="img" className="img-div1" />
        </div>

        <div className={`div1-text ${whyStyle}`}>
          <h2>{whyTitle1}</h2>
          <p>{whyTesto}</p>
        </div>
      </div>
      <div className={`div2-why ${whyStyle}`}>
        <h3>{whyTitle2}</h3>
        <p>{whyParagraph}</p>
      </div>
    </>
  );
};
