import "../assets/styles/componentsStyle/selectbox.css";
const SelectBox = ({ options, label, className }) => {
  return (
    <div className={`selectBox ${className ? className : ""}`}>
      <label htmlFor={label}>{label}</label>
      <br />
      <select name={label}>
        <option value="select">Select</option>
        {options?.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
