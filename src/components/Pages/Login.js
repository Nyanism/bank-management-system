import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className={classes.flexcontainer}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <Link to="/home">
          <div className={classes.actions}>
            <button className={classes.submit}>Log In</button>
          </div>
        </Link>
      </form>
      <p>Not a user?</p>
      <Link to="/signup">
        <button className={classes.button}>Sign Up</button>
      </Link>
    </div>
  );
};

export default Login;
