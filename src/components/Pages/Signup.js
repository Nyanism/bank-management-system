import classes from "./Signup.module.css";

const Signup = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="username">Userame</label>
        <input type="text" id="username" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="country">Country</label>
        <input type="text" id="country" />
      </div>
      <div className={classes.control}>
        <label htmlFor="State">State</label>
        <input type="text" id="state" />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="contact">Contact No.</label>
        <input type="tel" id="contact" />
      </div>
      <div className={classes.control}>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" />
      </div>
      <div className={classes.control}>
        <label htmlFor="accountType">Account Type</label>
        <select id="accountType">
          <option value="salary">Salary</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="branchName">Branch Name</label>
        <input type="text" id="branchName" />
      </div>
      <div className={classes.control}>
        <label htmlFor="initialDeposit">Initial Deposit</label>
        <input type="number" id="initialDeposit" />
      </div>
      <div className={classes.control}>
        <label htmlFor="identificationType">Identification Proof Type</label>
        <input type="text" id="identificationType" />
      </div>
      <div className={classes.control}>
        <label htmlFor="identificationNo">Identification Document No.</label>
        <input type="number" id="identificationNo" />
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Signup;
