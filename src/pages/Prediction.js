import React from "react";
import "./Prediction.css";
import axios from "axios";

export default function Prediction() {
  const [inputValues, setInputValues] = React.useState({
    Gender: "",
    Married: "",
    Dependents: null,
    Education: "",
    Self_Employed: "",
    ApplicantIncome: null,
    CoapplicantIncome: null,
    LoanAmount: null,
    Loan_Amount_Term: null,
    Credit_History: null,
    Property_Area: "",
  });

  const [result, setResult] = React.useState(null);

  const integerValues = [
    "Dependents",
    "ApplicantIncome",
    "CoapplicantIncome",
    "LoanAmount",
    "Loan_Amount_Term",
    "Credit_History",
  ];
  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: integerValues.includes(event.target.name)
        ? parseInt(event.target.value)
        : event.target.value,
    });
  };

  const handleSubmit = () => {
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .post("http://127.0.0.1:8000/api/v1/predict", inputValues, {
        headers: headers,
      })
      .then((response) => setResult(response.data.Result))
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <div class="w3ls-banner">
        <div class="heading">
          <h1>loan prediction system</h1>
        </div>
        <div class="container">
          <div class="heading">
            <h2>Fill the application form below and predict.</h2>
          </div>
          <div>
            <h2>{result}</h2>
          </div>
          <li>
            <label class="form-label">
              {" "}
              Gender <span class="form-required"> * </span>
            </label>
            <div class="form-input">
              <select
                class="form-dropdown"
                name="Gender"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select gender
                </option>
                <option value="Male"> Male </option>
                <option value="Female"> Female </option>
              </select>
            </div>
          </li>{" "}
          <li>
            <label class="form-label">
              {" "}
              Married <span class="form-required"> * </span>
            </label>
            <div class="form-input">
              <select
                class="form-dropdown"
                name="Married"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Marital Status
                </option>
                <option value="Yes"> Yes </option>
                <option value="No"> No </option>
              </select>
            </div>
          </li>
          <li>
            <label class="form-label">
              Dependents
              <span class="Dependents"> * </span>
            </label>
            <div class="form-input add">
              <span class="form-sub-label-address">
                <input
                  type="text"
                  name="Dependents"
                  placeholder="Dependents "
                  required
                  onChange={handleInputChange}
                ></input>
              </span>
            </div>
          </li>
          <li>
            <label class="form-label">
              {" "}
              Education <span class="form-required"> * </span>
            </label>
            <div class="form-input">
              <select
                class="form-dropdown"
                name="Education"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Education
                </option>
                <option value="Graduate">Graduate </option>
                <option value="Not Graduate"> Not Graduate </option>
              </select>
            </div>
          </li>
          <li>
            <label class="form-label">
              {" "}
              Self Employed <span class="form-required"> * </span>
            </label>
            <div class="form-input">
              <select
                class="form-dropdown"
                name="Self_Employed"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Employment Status
                </option>
                <option value="Yes">Yes </option>
                <option value="No"> No </option>
              </select>
            </div>
          </li>
          <li>
            <label class="form-label">
              ApplicantIncome
              <span class="ApplicantIncome"> * </span>
            </label>
            <div class="form-input add">
              <span class="form-sub-label-address">
                <input
                  type="number"
                  name="ApplicantIncome"
                  placeholder="ApplicantIncome "
                  required
                  onChange={handleInputChange}
                ></input>
              </span>
            </div>
          </li>
          <li>
            <label class="form-label">
              CoApplicantIncome
              <span class="CoApplicantIncome"> * </span>
            </label>
            <div class="form-input add">
              <span class="form-sub-label-address">
                <input
                  type="number"
                  name="CoapplicantIncome"
                  placeholder="CoApplicantIncome "
                  required
                  onChange={handleInputChange}
                ></input>
              </span>
            </div>
          </li>
          <li>
            <label class="form-label">
              Loan Amount
              <span class="form-required"> * </span>
            </label>
            <div class="form-input add">
              <span class="form-sub-label-address">
                <input
                  id="loan"
                  type="number"
                  name="LoanAmount"
                  placeholder="Enter Loan Amount "
                  required
                  onChange={handleInputChange}
                ></input>
              </span>
            </div>
          </li>
          <li>
            <label class="form-label">
              Loan Amount Term
              <span class="form-required"> * </span>
            </label>
            <div class="form-input add">
              <span class="form-sub-label-address">
                <input
                  id="loan"
                  type="number"
                  name="Loan_Amount_Term"
                  placeholder="Enter Loan Amount Term"
                  required
                  onChange={handleInputChange}
                ></input>
              </span>
            </div>
          </li>
          <li>
            <label class="form-label">
              {" "}
              Credit_History <span class="form-required"> * </span>
            </label>
            <div class="form-input">
              <select
                class="form-dropdown"
                name="Credit_History"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Credit History
                </option>
                <option value="0"> No </option>
                <option value="1"> Yes </option>
              </select>
            </div>
          </li>
          <li>
            <label class="form-label">
              {" "}
              Property_Area <span class="form-required"> * </span>
            </label>
            <div class="form-input">
              <select
                class="form-dropdown"
                name="Property_Area"
                required
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select Property Area
                </option>
                <option value="Urban"> Urban </option>
                <option value="Rural"> Rural </option>
                <option value="SemiUrban"> SemiUrban </option>
              </select>
            </div>
          </li>
          <br></br>
          <div class="submit_btn">
            <input type="submit" value="predict" onClick={handleSubmit} />
          </div>
          <div class="Back_btn">
            <input
              action="action"
              onclick="window.history.go(-1);"
              type="submit"
              value="Cancel"
            />
          </div>
          <div class="display">
            <div class="total">
              <p>
                <b>Total</b>
              </p>
            </div>
            <div class="result">
              <h4 id="result14"></h4>
            </div>
          </div>
          <h2 id="Result will be display"></h2>
        </div>
      </div>

      <script src="./scripts/loan.js"></script>
    </React.Fragment>
  );
}
