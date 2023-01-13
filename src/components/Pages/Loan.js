import classes from "./Loan.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import EducationLoan from "./EducationLoan";

const Loan = (props) => {
  const initialValues = {
    loanType: "education",
    loanAmount: "",
    loanApplyDate: "",
    interestRate: "",
    duration: "",
    loanDetails: {},
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isApplied, setIsApplied] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [name]: value };
    });
    console.log(formValues);
  };

  const setLoanDetails = (details) => {
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, loanDetails: details };
    });
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

        {formValues.loanType === "education" && (
          <EducationLoan setLoanDetails={setLoanDetails} />
        )}
        {/* {formValues.loanType === "personal" && <OtherLoan />}
        {formValues.loanType === "home" && <OtherLoan />} */}
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
          <select
            id="loanDuration"
            name="loanDuration"
            value={formValues.loanDuration}
            onChange={handleChange}
            required
          >
            <option value="5">5 Years</option>
            <option value="10">10 Years</option>
            <option value="15">15 Years</option>
            <option value="20">20 Years</option>
          </select>
        </div>
        <div className={classes.actions}>
          <button className={classes.submit}>Apply</button>
        </div>
      </form>
    </div>
  );
};

export default Loan;
