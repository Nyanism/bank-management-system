import classes from "./Signup.module.css";
import { useState } from "react";

const Signup = (props) => {
  const initialValues = {
    name: "",
    username: "",
    password: "",
    address: "",
    country: "",
    state: "",
    email: "",
    contactNo: "",
    dob: "",
    accountType: "",
    branchName: "",
    initialDeposit: "",
    identificationType: "",
    identificationNo: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    console.log(formErrors);
  };

  const validateForm = (values) => {
    const errors = {};
    const nameRegex = "[a-zA-Z][a-zA-Z ]+";
    const emailRegex =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";

    if (values.name.match(nameRegex) === null) {
      errors.name = "Name should only contain alphabets and spaces.";
    }

    if ((+values.contactNo).length !== 10) {
      errors.contactNo = "Contact number should contain exactly 10 digits.";
    }

    if (values.email.match(emailRegex) === null) {
      errors.email = "Email should contain @ and . symbols.";
    }

    const dob = new Date(values.dob);
    const currentDate = new Date();
    if (currentDate < dob) {
      errors.dob = "DOB should be less than system date.";
    }

    if (+values.initialDeposit < 0) {
      errors.initialDeposit = "Initial deposit amount should be more than 0.";
    }

    return errors;
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.name}</p>
      <div className={classes.control}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formValues.country}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="State">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formValues.state}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.email}</p>
      <div className={classes.control}>
        <label htmlFor="contactNo">Contact No.</label>
        <input
          type="number"
          id="contactNo"
          name="contactNo"
          value={formValues.contactNo}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.contactNo}</p>
      <div className={classes.control}>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formValues.dob}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.dob}</p>
      <div className={classes.control}>
        <label htmlFor="accountType">Account Type</label>
        <select
          id="accountType"
          name="accountType"
          value={formValues.accountType}
          onChange={handleChange}
        >
          <option value="salary">Salary</option>
          <option value="savings">Savings</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="branchName">Branch Name</label>
        <input
          type="text"
          id="branchName"
          name="branchName"
          value={formValues.branchName}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="initialDeposit">Initial Deposit</label>
        <input
          type="number"
          id="initialDeposit"
          name="initialDeposit"
          value={formValues.initialDeposit}
          onChange={handleChange}
        />
      </div>
      <p>{formErrors.initialDeposit}</p>
      <div className={classes.control}>
        <label htmlFor="identificationType">Identification Proof Type</label>
        <input
          type="text"
          id="identificationType"
          name="identificationType"
          value={formValues.identificationType}
          onChange={handleChange}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="identificationNo">Identification Document No.</label>
        <input
          type="number"
          id="identificationNo"
          name="identificationNo"
          value={formValues.identificationNo}
          onChange={handleChange}
        />
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Signup;