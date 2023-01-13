import { useState } from "react";
import classes from "./EducationLoan.module.css";

const EducationLoan = (props) => {
  const initialValues = {
    courseFee: "",
    course: "",
    fatherName: "",
    fatherOccupation: "",
    annualIncome: "",
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
        <label htmlFor="courseFee">Course Fee</label>
        <input
          type="number"
          id="courseFee"
          name="courseFee"
          value={formValues.courseFee}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="course">Course</label>
        <input
          type="text"
          id="course"
          name="course"
          value={formValues.course}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="fatherName">Father's Name</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={formValues.fatherName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="fatherOccupation">Father's Occupation</label>
        <input
          type="text"
          id="fatherOccupation"
          name="fatherOccupation"
          value={formValues.fatherOccupation}
          onChange={handleChange}
          required
        />
      </div>
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
    </>
  );
};

export default EducationLoan;
