import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, isActive }) => {
  const currLocation = useLocation();
  return (
    <header className="header">
      <h1 title="Task Tracker">{title}</h1>
      {currLocation.pathname === "/" && (
        <Button
          text={isActive ? "Hide" : "Add"}
          color={isActive ? "red" : "green"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
