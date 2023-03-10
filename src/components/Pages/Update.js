import classes from "./Update.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Update = (props) => {
  const initialValues = {
    accountType: "",
    depositAmount: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [availableBalance, setAvailableBalance] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setAvailableBalance((prevAvailableBalance) => {
        return prevAvailableBalance + +formValues.depositAmount;
      });
    }
  };

  const validateForm = (values) => {
    const errors = {};
    if (+values.depositAmount < 0) {
      errors.depositAmount = "Deposit amount should be more than 0.";
    }
    return errors;
  };

  return (
    <div className={classes.flexcontainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="accountType">Account Type</label>
          <select
            id="accountType"
            name="accountType"
            value={formValues.accountType}
            onChange={handleChange}
            required
          >
            <option value="salary">Salary</option>
            <option value="savings">Savings</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="depositAmount">Deposit Amount</label>
          <input
            type="number"
            id="depositAmount"
            name="depositAmount"
            value={formValues.depositAmount}
            onChange={handleChange}
            required
          />
        </div>
        <p className={classes.errors}>{formErrors.depositAmount}</p>
        <div className={classes.actions}>
          <button>Deposit</button>
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>
      </form>
      <p>Your current available balance is ${availableBalance}.</p>
    </div>
  );
};

export default Update;
