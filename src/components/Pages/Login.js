import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={classes.flexcontainer}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="street">Password</label>
          <input type="text" id="password" />
        </div>
        <div className={classes.actions}>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
      <p>Not a user?</p>
      <button className={classes.button}>Signup</button>
    </div>
  );
};

export default Login;
