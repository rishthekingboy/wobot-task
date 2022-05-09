import { useState } from "react";
import "../assets/styles/componentsStyle/companySize.css";

const CompanySize = () => {
  const [size, setSize] = useState("51-200");
  return (
    <div className="companySize">
      <label htmlFor="Company size">Company size</label>
      <br />
      <div className="sizes">
        <span
          className={`size-option ${size === "1-20" ? "activeSize" : ""}`}
          onClick={() => setSize("1-20")}
        >
          1-20
        </span>
        <span
          className={`size-option ${size === "21-50" ? "activeSize" : ""}`}
          onClick={() => setSize("21-50")}
        >
          21-50
        </span>
        <span
          className={`size-option ${size === "51-200" ? "activeSize" : ""}`}
          onClick={() => setSize("51-200")}
        >
          51-200
        </span>
        <span
          className={`size-option ${size === "201-500" ? "activeSize" : ""}`}
          onClick={() => setSize("201-500")}
        >
          201-500
        </span>
        <span
          className={`size-option ${size === "500+" ? "activeSize" : ""}`}
          onClick={() => setSize("500+")}
        >
          500+
        </span>
      </div>
    </div>
  );
};

export default CompanySize;
