import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <nav className={classes.header}>
        <h1>Cognizant Bank</h1>
      </nav>
    </>
  );
};

export default Header;
