import classes from "./Loan.module.css";
import { useState } from "react";
import EducationLoan from "./EducationLoan";
import OtherLoan from "./OtherLoan";
import { Link } from "react-router-dom";

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
  };

  const setLoanDetails = (details) => {
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, loanDetails: details };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsApplied(true);
    }
  };

  const validateForm = (values) => {
    const errors = {};
    const nameRegex = "[a-zA-Z][a-zA-Z ]+";
    if (values.loanType === "education") {
      if (+values.loanDetails.courseFee <= 0) {
        errors.courseFee = "Course fee should be more than 0.";
      }

      if (values.loanDetails.fatherName.match(nameRegex) === null) {
        errors.fatherName = "Name should only contain alphabets and spaces.";
      }
    }

    if (+values.loanDetails.annualIncome < 0) {
      errors.annualIncome = "Annual income should not be less than 0.";
    }

    if (+values.loanAmount <= 0) {
      errors.loanAmount = "Loan amount should be more than 0.";
    }

    const loanApplyDate = new Date(values.loanApplyDate);
    const currentDate = new Date();
    if (loanApplyDate < currentDate) {
      errors.loanApplyDate =
        "Loan apply date should not be earlier than system date.";
    }
    return errors;
  };

  return (
    <div className={classes.flexcontainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
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
          <EducationLoan
            setLoanDetails={setLoanDetails}
            formErrors={formErrors}
          />
        )}
        {formValues.loanType === "personal" && (
          <OtherLoan setLoanDetails={setLoanDetails} formErrors={formErrors} />
        )}
        {formValues.loanType === "home" && (
          <OtherLoan setLoanDetails={setLoanDetails} formErrors={formErrors} />
        )}
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
        <p className={classes.errors}>{formErrors.loanAmount}</p>
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
        <p className={classes.errors}>{formErrors.loanApplyDate}</p>
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
          <Link to="/home">
            <button>Back</button>
          </Link>
        </div>
        {isApplied && <p>Application successfully submitted.</p>}
      </form>
    </div>
  );
};

export default Loan;
