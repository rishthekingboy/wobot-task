import "../assets/styles/componentsStyle/input.css";

const Input = ({ label }) => {
  return (
    <div className="input">
      <label htmlFor="">{label}</label>
      <br />
      <input type={"text"} placeholder="e.g. Example Inc" />
    </div>
  );
};

export default Input;
