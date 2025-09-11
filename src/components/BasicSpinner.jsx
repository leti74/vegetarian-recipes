import Spinner from "react-bootstrap/Spinner";
import "./BasicSpinner.css";
function BasicSpinner() {
  return (
    <Spinner
      animation="border"
      role="status"
      className="custom-spinner"
    ></Spinner>
  );
}

export default BasicSpinner;
