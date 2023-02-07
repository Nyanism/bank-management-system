# Bank Management System

This repository contains the code for a bank management system React app that was created as part of a React credential course.

Testing was carried out manually based on the given business rules and required validations. Some examples can be found below:

**Customer name should contain only alphabets and space**

![A screenshot showing a sign up form, with the "Name" field filled with "Abram2". A red error message is displayed below the field, citing "Name should only contain alphabets and spaces."](src/assets/namevalidation.png?raw=true)

**Contact number should be 10 digits**

![A screenshot showing a sign up form, with the "Contact No." field filled with "123456789". A red error message is displayed below the field, citing "Contact number should contain exactly 10 digits."](src/assets/contact10digit.png?raw=true)

**Loan apply date should not be earlier than system date**

![A screenshot showing a loan form, with the "Loan Apply Date" field filled with "22/12/2022". A red error message is displayed below the field, citing "Loan apply date should not be earlier than system date."](src/assets/loandate.png?raw=true)

**Deposit amount should be numeric greater than zero and should contains only positive values**

![A screenshot showing a deposit form, with the "Deposit Amount" field filled with "-2000". A red error message is displayed below the field, citing "Deposit amount should be more than 0."](src/assets/depositnegative.png?raw=true)
