import classes from "./Loan.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Loan = (props) => {
  const initialValues = {
    loanType: "",
    loanAmount: "",
    loanApplyDate: "",
    interestRate: "",
    duration: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <div className={classes.flexcontainer}>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="loanType">Loan Type</label>
          <select
            id="loanType"
            name="loanType"
            value={formValues.loanType}
            onChange={handleChange}
            required
          >
            <option value="education">Education Loan</option>
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formValues.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="loanApplyDate">Loan Apply Date</label>
          <input
            type="date"
            id="loanApplyDate"
            name="loanApplyDate"
            value={formValues.loanApplyDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="interestRate">Rate of Interest (%)</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={formValues.interestRate}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.control}>
          <label>Loan Duration (Years)</label>
          <label htmlFor="loanDuration">5</label>
          <input
            type="radio"
            id="5"
            name="loanDuration"
            value={formValues.loanDuration}
            onChange={handleChange}
            required
          />
          <label htmlFor="loanDuration">10</label>
          <input
            type="radio"
            id="10"
            name="loanDuration"
            value={formValues.loanDuration}
            onChange={handleChange}
            required
          />
          <label htmlFor="loanDuration">15</label>
          <input
            type="radio"
            id="15"
            name="loanDuration"
            value={formValues.loanDuration}
            onChange={handleChange}
            required
          />
          <label htmlFor="loanDuration">20</label>
          <input
            type="radio"
            id="20"
            name="loanDuration"
            value={formValues.loanDuration}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.submit}>Apply</button>
        </div>
      </form>
    </div>
  );
};

export default Loan;
