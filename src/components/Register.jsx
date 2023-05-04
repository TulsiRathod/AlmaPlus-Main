import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [universityShow,setUniversityShow]=useState(false);
  const [university,setUniversity]=useState([]);
  const nav = useNavigate();
  const [step, setStep] = useState(1);
  const increaseStep = () => {
    setStep(step + 1);
  };
  const decraseStep = () => {
    setStep(step - 1);
  };

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    nationality: "",
    dob: "",
    address: "",
    profilepic: [],
    phone: "",
    email: "",
    password: "",
    cpassword: "",
    languages: "",
    github: "",
    linkedin: "",
    portfolioweb: "",
    institute: "",
    yearofjoining: "",
    course: "",
    skills: "",
    companyname: "",
    designation: "",
    experience: "",
    role: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

const handleSubmit = () => {
      var body = new FormData();
      body.append("fname",user.fname);
      body.append("lname",user.lname);
      body.append("gender",user.gender);
      body.append("nationality",user.nationality);
      body.append("dob",user.dob);
      body.append("address",user.address);
      body.append("profilepic",user.profilepic);
      body.append("phone",user.phone);
      body.append("email",user.email);
      body.append("password",user.password);
      body.append("languages",user.languages);
      body.append("github",user.github);
      body.append("linkedin",user.linkedin);
      body.append("portfolioweb",user.portfolioweb);
      body.append("institute",user.institute);
      body.append("yearofjoining",user.yearofjoining);
      body.append("course",user.course);
      body.append("skills",user.skills);
      body.append("companyname",user.companyname);
      body.append("designation",user.designation);
      body.append("experience",user.experience);
      body.append("role",user.role);
      const myurl=`${WEB_URL}/api/registerUser`;
      axios({
        method: "post",
        url: myurl,
        headers: { 'Content-Type': 'multipart/form-data' },
        data: body,
      })
        .then((res) => {
          console.log(res);

        })
        .catch((err) => {
          console.log("err", err.response.data.message);
        });
  };

  const handleImgChange = (e) => {
    setUser({ ...user, profilepic: e.target.files[0] });
  };

  const getUniversity = () => {
    axios({
      method: "get",
      url: `${WEB_URL}/api/getInstitutes`,
    })
      .then((response) => {
        console.log(response.data.data);
        setUniversity(response.data.data);
      })
      .catch((error) => {
        
      });
  };

  useEffect(()=>{
    getUniversity();
  },[])

  return (
    <>
      <Navbar />
      <div className="form-fields-container">
        <div className="left-container">
          <div className="left-container-content">
            <h2>Already a member ?</h2>
            <p>
              To keep track on your dashboard please login with your personal
              info
            </p>
            <a
              onClick={() => {
                nav("/login");
              }}
            >
              Login
            </a>
          </div>
          <img src="./images/Usability testing-bro.png" alt="" />
        </div>
        <div className="right-container">
          <div className="back-icon">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <form id="msform">
                <ul id="progressbar">
                  <li
                    className={step >= 1 ? "active" : ""}
                    onClick={() => {
                      setStep(1);
                    }}
                  >
                    Personal Details
                  </li>
                  <li
                    className={step >= 2 ? "active" : ""}
                    onClick={() => {
                      setStep(2);
                    }}
                  >
                    Social Profiles
                  </li>
                  <li
                    className={step >= 3 ? "active" : ""}
                    onClick={() => {
                      setStep(3);
                    }}
                  >
                    Additional Details
                  </li>
                  <li
                    className={step >= 4 ? "active" : ""}
                    onClick={() => {
                      setStep(4);
                    }}
                  >
                    Institute/Company Details
                  </li>
                  <li
                    className={step >= 5 ? "active" : ""}
                    onClick={() => {
                      setStep(5);
                    }}
                  >
                    Account Setup
                  </li>
                </ul>

                {step === 1 ? (
                  <fieldset>
                    <h2 className="fs-title">Personal Details</h2>
                    <h3 className="fs-subtitle">
                      Tell us something more about you
                    </h3>
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      value={user.fname}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      value={user.lname}
                      onChange={handleChange}
                    />
                    <div className="gender">
                      <div>Gender :</div>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          onChange={(e) => {
                            setUser({ ...user, gender: e.target.value });
                          }}
                          value="Male"
                          checked={user.gender === "Male" ? true : false}
                        />
                        <span>Male</span>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="gender"
                          onChange={(e) => {
                            setUser({ ...user, gender: e.target.value });
                          }}
                          value="Female"
                          checked={user.gender === "Female" ? true : false}
                        />
                        <span>Female</span>
                      </div>
                    </div>
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      value={user.dob}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={user.address}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Next"
                      onClick={increaseStep}
                    />
                  </fieldset>
                ) : (
                  ""
                )}
                {step === 2 ? (
                  <fieldset>
                    <h2 className="fs-title">Social Profiles</h2>
                    <h3 className="fs-subtitle">
                      Your presence on the social network
                    </h3>
                    <input
                      type="text"
                      name="github"
                      placeholder="Github"
                      value={user.github}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="LinkedIn"
                      value={user.linkedin}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="portfolioweb"
                      placeholder="Portfolio Web"
                      value={user.portfolioweb}
                      onChange={handleChange}
                    />
                    <input
                      type="button"
                      name="previous"
                      className="previous action-button-previous"
                      value="Previous"
                      onClick={decraseStep}
                    />
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Next"
                      onClick={increaseStep}
                    />
                  </fieldset>
                ) : (
                  ""
                )}
                {step === 3 ? (
                  <fieldset>
                    <h2 className="fs-title">Additional Info</h2>
                    <h3 className="fs-subtitle">
                      Tell us something more about you
                    </h3>
                    <input
                      type="text"
                      name="nationality"
                      placeholder="Nationality"
                      value={user.nationality}
                      onChange={handleChange}
                    />
                    <select
                      name="languages"
                      id=""
                      value={user.languages}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        - Language -
                      </option>
                      <option value="hindi">Hindi</option>
                      <option value="english">Endlish</option>
                      <option value="gujrati">Gujrati</option>
                    </select>
                    <input
                      name="skills"
                      placeholder="Skills"
                      value={user.skills}
                      onChange={handleChange}
                    ></input>
                    <input
                      type="file"
                      name="profilepic"
                      placeholder="Select your profile picture"
                      onChange={handleImgChange}
                    />
                    <input
                      type="button"
                      name="previous"
                      className="previous action-button-previous"
                      value="Previous"
                      onClick={decraseStep}
                    />
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Next"
                      onClick={increaseStep}
                    />
                  </fieldset>
                ) : (
                  ""
                )}
                {step === 4 ? (
                  <fieldset>
                    <h2 className="fs-title">Institute/Company Details</h2>
                    <h3 className="fs-subtitle">
                      Your institute and company related info
                    </h3>
                    {/* <select
                      name="institute"
                      id=""
                      value={user.institute}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        - Select College -
                      </option>
                      <option value="VNSGU">
                        Veer namrmad south gujrat university
                      </option>
                    </select> */}
                    <div
                      class="prise_main_drop"
                      onClick={() => setUniversityShow(!universityShow)}
                    >
                      <span class="prise-data">{user.institute}</span>
                      <span class="prise_down_icon"><i class="fa-solid fa-angle-down"></i></span>
                      {university.length>0?
                      <ul
                      class={
                        universityShow === true
                          ? "prise-list-merge opened"
                          : "prise-list-merge"
                      }
                    >
                      {university.map((elem)=>
                      <li
                        class={
                          user.institute === elem.name
                            ? "prise_list selected"
                            : "prise_list"
                        }
                        onClick={() => {
                          setUser({...user,institute:elem.name})
                        }}
                      >
                        <img
                        src={`${WEB_URL}${elem.image}`}
                          className="option-img"
                          alt=""
                        />
                        <span>{elem.name}</span>
                      </li>)}
                    </ul>:""}
                    </div>
                    <select
                      name="course"
                      id=""
                      value={user.course}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        - Select Course -
                      </option>
                      <option value="MscIT">MscIT</option>
                      <option value="BBA">BBA</option>
                      <option value="BCA">BCA</option>
                    </select>
                    <input
                      type="text"
                      name="yearofjoining"
                      placeholder="Year of joining"
                      value={user.yearofjoining}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="companyname"
                      placeholder="Name of Company"
                      value={user.companyname}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="designation"
                      placeholder="Designation"
                      value={user.designation}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="experience"
                      placeholder="Experience"
                      value={user.experience}
                      onChange={handleChange}
                    />
                    <input
                      type="button"
                      name="previous"
                      className="previous action-button-previous"
                      value="Previous"
                      onClick={decraseStep}
                    />
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      value="Next"
                      onClick={increaseStep}
                    />
                  </fieldset>
                ) : (
                  ""
                )}
                {step === 5 ? (
                  <fieldset>
                    <h2 className="fs-title">Create your account</h2>
                    <h3 className="fs-subtitle">Fill in your credentials</h3>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="cpassword"
                      placeholder="Confirm Password"
                      value={user.cpassword}
                      onChange={handleChange}
                    />
                    <input
                      type="button"
                      name="previous"
                      className="previous action-button-previous"
                      value="Previous"
                      onClick={decraseStep}
                    />
                    <input
                      type="button"
                      name="submit"
                      className="submit action-button"
                      value="Submit"
                      onClick={handleSubmit}
                    />
                  </fieldset>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
