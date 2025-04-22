import "../styles/toggleButton.css";

const ToggleButton = () => {
  return (
    <label htmlFor="toggle">
      <input type="checkbox" id="toggle" className="toggle-input"></input>
      <div className="toggle-switch"></div>
    </label>
  );
};

export default ToggleButton;
