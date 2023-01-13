import { useState } from "react";
import classes from "./OtherLoan.module.css";

const OtherLoan = (props) => {
  const initialValues = {
    annualIncome: "",
    companyName: "",
    designation: "",
    totalExp: "",
    currentExp: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [name]: value };
    });
    props.setLoanDetails(formValues);
  };

  return (
    <>
      <div className={classes.control}>
        <label htmlFor="annualIncome">Annual Income</label>
        <input
          type="number"
          id="annualIncome"
          name="annualIncome"
          value={formValues.annualIncome}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formValues.companyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="designation">Designation</label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formValues.designation}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="totalExp">Total Experience (in years)</label>
        <input
          type="number"
          id="totalExp"
          name="totalExp"
          value={formValues.totalExp}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="currentExp">
          Experience with Current Company (in years)
        </label>
        <input
          type="number"
          id="currentExp"
          name="currentExp"
          value={formValues.currentExp}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default OtherLoan;
