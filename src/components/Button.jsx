import "../assets/styles/componentsStyle/button.css";

const Button = ({ onClick, title, className }) => {
  return (
    <div className={`btn ${className}`} onClick={() => onClick && onClick()}>
      {title}
    </div>
  );
};

export default Button;
