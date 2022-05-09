import "./assets/styles/app.css";
import wobotLogo from "./assets/img/wobot-logo.svg";
import solidLines from "./assets/img/Solid_lines.svg";
import Button from "./components/Button";
import Input from "./components/Input";
import CompanySize from "./components/CompanySize";
import SelectBox from "./components/SelectBox";

function App() {
  return (
    <div className="App">
      <div>
        <nav className="logo">
          <img src={wobotLogo} alt="wobot logo" />
        </nav>
        <div className="container">
          <div className="card">
            <div className="card-head">
              <div className="card-head-img">
                <img src={solidLines} alt="lines" />
              </div>
              <h3 className="card-head-heading">
                It’s a delight to have you onboard
              </h3>
              <p className="card-head-text">
                Help us know you better.
                <br />
                (This is how we optimize Wobot as per your business needs)
              </p>
            </div>
            <Input label={"Company name"} />
            <SelectBox
              label={"Industry"}
              options={["Wobot"]}
              className={"indrustry"}
            />

            <CompanySize />
            <Button
              title={"Get Started"}
              onClick={() => alert("button clicked")}
              className="card-btn"
            />
          </div>
        </div>
      </div>
      <div className="terms">Terms of use | Privacy policy</div>
    </div>
  );
}

export default App;
