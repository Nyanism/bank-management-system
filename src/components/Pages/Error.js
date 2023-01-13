import { useHistory } from "react-router-dom";
import classes from "./Error.module.css";

const Error = (props) => {
  const history = useHistory();

  return (
    <div className={classes.flexcontainer}>
      <p>It seems like you have stumbled upon a broken link!</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default Error;
