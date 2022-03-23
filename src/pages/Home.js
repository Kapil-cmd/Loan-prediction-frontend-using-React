import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function Index() {
  return (
    <React.Fragment>
      <header>
        <div class="topbar">
          <div class="container clearfix">
            <div class="logo">
              <span id="menu-toggle" onclick="openNav()">
                <b>&equiv;</b>
              </span>
              <link to="/"></link>
            </div>
            <div id="mySidenav" class="sidenav">
              <a
                href="javascript:void(0)"
                class="closebtn"
                onclick="closeNav()"
              >
                &times;
              </a>
              <a href="#aboutus">About</a>
              <a href="#contactUs">Contact</a>
            </div>
          </div>
        </div>
      </header>
      <div class="banner">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <img src="assets/dollar.jpg" alt="Banner Here"></img>
            <div class="banContent">
              <div class="container">
                <h1>LOAN PREDICTION SYSTEM</h1>
                <Link to="/predict">CLICK TO PREDICT</Link>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="assets/dollar1.jpg" alt="Banner Here"></img>
            <div class="banContent">
              <div class="container">
                <h1>LOAN PREDICTION SYSTEM</h1>
                <Link to="/predict">CLICK TO PREDICT</Link>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="assets/dollar3.jpg" alt="Banner Here"></img>
            <div class="banContent">
              <div class="container">
                <h1>LOAN PREDICTION SYSTEM</h1>
                <Link to="/predict">CLICK TO PREDICT</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="aboutSec clearfix">
        <div class="container clearfix">
          <div class="aboutus" id="aboutus">
            <div class="container clearfix">
              <h5>About Us</h5>
              <h4>
                WE BELIEVE OUR PREDICTION SYSTEM SHOULD DELIVER ACCURATE RESULTS
              </h4>
              <br></br>
              <p>
                The aim of this project is to provide quick, immediate and easy
                way to choose the deserving applicants.
              </p>
              <br></br>
              <p>
                {" "}
                Customer first apply for loan after that prediction system
                validates the customer eligibility for loan. Prediction system
                wants to automate the loan eligibility process (real time) based
                on customer details provided while filling application form.
                These details are Gender, Marital Status, Education, Number of
                Dependents, Income, Loan Amount, Credit History and other.
              </p>
              <br></br>
            </div>
            <div class="rightPanel " style={{ height: "500px" }}>
              <img src="assets/aboutus" alt="aboutus"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="ourteam" id="ourteam">
        <div class="container clearfix">
          <h1>OUR TEAM</h1>
          <ul>
            <li>
              <img alt="" src="assets/kapil.jpg"></img>
              <h3>KAPIL KARKI</h3>
              <h4>Student</h4>
            </li>
            <li>
              <img alt="" src="assets/suman.jpg"></img>
              <h3>SUMAN KHADKA</h3>
              <h4>Sudent</h4>
            </li>
            <li>
              <img alt="" src="Assets/saujan.jpg"></img>
              <h3>SAUJAN THAPA</h3>
              <h4>Student</h4>
            </li>
          </ul>
        </div>
      </div>

      <div id="contactUs">
        <h1>CONTACT US</h1>
        <div id="listcontainer">
          <div class="categ">
            <h3>Phone</h3>
            <p>9863921480</p>
            <img src="assets/social/phone.png" alt="phone icon"></img>
          </div>
          <div class="categ">
            <h3>Email</h3>
            <p>info@loanprediction.com</p>
            <img src="assets/social/email.png" alt="email icon"></img>
          </div>
          <div class="categ">
            <h3>Location</h3>
            <p>Sankhamul, New Baneshor</p>
            <img src="assets/social/location.png" alt="location icon"></img>
          </div>
        </div>
        <br></br>
      </div>

      <div id="footer">
        <img src="assets/predlogo.png" alt="logo"></img>
        <div id="social">
          <img src="Assets/social/facebook.png" alt="facebook_connect"></img>
          <img src="Assets/social/instagram.png" alt="instagram_connect"></img>
          <img src="assets/social/google.png" alt="google_connect"></img>
          <img src="Assets/social/twitter.png" alt="twitter_connect"></img>
        </div>
        <div
          id="copyright_text"
          style={{
            width: "300px",
            float: "right",
            marginTop: "90px",
            fontFamily: "Segoe UI light",
          }}
        >
          Copyright © 2021. All rights reserved.
        </div>
      </div>
      {/* 
      <script>
        //sideNav function openNav(){" "}
        {(document.getElementById("mySidenav").style.width = "200px")}
        function closeNav(){" "}
        {(document.getElementById("mySidenav").style.width = "0")}
      </script>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
        crossorigin="anonymous"
      ></script> */}
    </React.Fragment>
  );
}
