import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <>
      <div className={classes.flexcontainer}>
        <h1>Welcome!</h1>
        <p>What would you like to do today?</p>
        <br></br>
        <Link to="/loan">
          <button className={classes.button}>Apply Loan</button>
        </Link>
        <Link to="/update">
          <button className={classes.button}>Update Account</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
