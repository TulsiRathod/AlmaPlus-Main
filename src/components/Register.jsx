import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WEB_URL } from "../baseURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [universityShow, setUniversityShow] = useState(false);
  const [university, setUniversity] = useState([]);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    nationality: "",
    dob: "",
    address: "",
    profilepic: "",
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

  const increaseStep = () => {
    setStep(step + 1);
  };
  const decraseStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let input = user;

    let errors = {};
    let isValid = true;

    if (!input["fname"]) {
      isValid = false;
      errors["fname_err"] = "Please Enter First Name";
    }
    if (!input["lname"]) {
      isValid = false;
      errors["lname_err"] = "Please Enter Last Name";
    }
    if (!input["gender"]) {
      isValid = false;
      errors["gender_err"] = "Please Choose Gender";
    }
    if (!input["dob"]) {
      isValid = false;
      errors["dob_err"] = "Please Choose Date of Birth";
    }
    if (!input["address"]) {
      isValid = false;
      errors["add_err"] = "Please Enter Address";
    }
    if (!input["phone"]) {
      isValid = false;
      errors["phone_err"] = "Please Enter Phone Number";
    }
    if (!input["nationality"]) {
      isValid = false;
      errors["nationality_err"] = "Please Enter Nationality";
    }
    if (!input["languages"]) {
      isValid = false;
      errors["languages_err"] = "Please Choose Language";
    }
    if (!input["institute"]) {
      isValid = false;
      errors["institute_err"] = "Please Choose Institute";
    }
    if (!input["course"]) {
      isValid = false;
      errors["course_err"] = "Please Choose Course";
    }
    if (!input["yearofjoining"]) {
      isValid = false;
      errors["yearofjoining_err"] = "Please Enter Year of Joining";
    }
    if (!input["designation"]) {
      isValid = false;
      errors["designation_err"] = "Please Enter Designation";
    }
    if (!input["email"]) {
      isValid = false;
      errors["email_err"] = "Please Enter Email";
    }
    if (!input["password"]) {
      isValid = false;
      errors["password_err"] = "Please Enter Password";
    }
    if(input["password"].length<8){
      isValid = false;
      errors["password_err"] = "Password must be at least 8 characters long";
    }
    if (input["cpassword"]!==input["password"]) {
      isValid = false;
      errors["cpassword_err"] = "Password not match";
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      var body = {
        fname: user.fname,
        lname: user.lname,
        gender: user.gender,
        nationality: user.nationality,
        dob: user.dob,
        address: user.address,
        profilepic: user.profilepic,
        phone: user.phone,
        email: user.email,
        password: user.password,
        languages: user.languages,
        github: user.github,
        linkedin: user.linkedin,
        portfolioweb: user.portfolioweb,
        institute: user.institute,
        yearofjoining: user.yearofjoining,
        course: user.course,
        skills: user.skills,
        companyname: user.companyname,
        designation: user.designation,
        experience: user.experience,
        role: user.role,
      };
      const myurl = `${WEB_URL}/api/register`;
      axios({
        method: "post",
        url: myurl,
        data: body,
      })
        .then((res) => {
          toast.success("Register Successful");
          setTimeout(()=>{
            nav("/login");
          },1000)
        })
        .catch((err) => {
          toast.error(err.response.data.msg);
        });
    }
    else{
      toast.error("Some Fields Missing!!")
    }
  };

  const handleImgChange = (e) => {
    var body = new FormData();
    body.append("profilepic", e.target.files[0]);
    axios({
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      url: `${WEB_URL}/api/uploadUserImage`,
      data: body,
    })
      .then((response) => {
        console.log(response.data.data.url);
        setUser({ ...user, profilepic: response.data.data.url });
      })
      .catch((error) => {});
  };

  const getUniversity = () => {
    axios({
      method: "get",
      url: `${WEB_URL}/api/getInstitutes`,
    }).then((response) => {
      setUniversity(response.data.data);
    });
  };

  useEffect(() => {
    getUniversity();
  }, []);

  return (
    <>
      <ToastContainer />
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
                    Institute Details
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
                    <div className="text-danger">{errors.fname_err}</div>
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      value={user.lname}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.lname_err}</div>
                    <div className="gender">
                      <div>Gender</div>
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
                    <div className="text-danger">{errors.gender_err}</div>
                    <input
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      value={user.dob}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.dob_err}</div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={user.address}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.add_err}</div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.phone_err}</div>
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
                    <div className="text-danger">{errors.nationality_err}</div>
                    <select
                      name="languages"
                      id=""
                      value={user.languages}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        - Language -
                      </option>
                      <option value="Hindi">Hindi</option>
                      <option value="English">Endlish</option>
                      <option value="Gujrati">Gujrati</option>
                      <option value="Spanish">Spanish</option>
                      <option value="Freanch">French</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Russian">Russian</option>
                      <option value="German">German</option>
                      <option value="Portuguese">Portuguese</option>
                      <option value="Japanese">Japanese</option>
                    </select>
                    <div className="text-danger">{errors.languages_err}</div>
                    <input
                      name="skills"
                      placeholder="Skills"
                      value={user.skills}
                      onChange={handleChange}
                    ></input>
                    <div className="text-danger">{errors.skills_err}</div>
                    <input
                      type="file"
                      name="profilepic"
                      placeholder="Select your profile picture"
                      onChange={handleImgChange}
                    />
                    <div className="text-danger">{errors.profilepic_err}</div>
                    {user.profilepic ? (
                      <div>
                        <img
                          src={`${WEB_URL}${user.profilepic}`}
                          alt=""
                          height={150}
                          width={150}
                          style={{ objectFit: "cover", borderRadius: "50%" }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
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
                    <div
                      class="prise_main_drop"
                      onClick={() => setUniversityShow(!universityShow)}
                    >
                      <span class="prise-data">{user.institute?user.institute:"Select Institute"}</span>
                      <span class="prise_down_icon">
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                      {university.length > 0 ? (
                        <ul
                          class={
                            universityShow === true
                              ? "prise-list-merge opened"
                              : "prise-list-merge"
                          }
                        >
                          {university.map((elem) => (
                            <li
                              class={
                                user.institute === elem.name
                                  ? "prise_list selected"
                                  : "prise_list"
                              }
                              onClick={() => {
                                setUser({ ...user, institute: elem.name });
                              }}
                            >
                              {elem.image !== "" ? (
                                <img
                                  src={`${WEB_URL}${elem.image}`}
                                  className="option-img"
                                  alt=""
                                />
                              ) : (
                                ""
                              )}
                              <span>{elem.name}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <li>Intitutes Not Found</li>
                      )}
                    </div>
                    <div className="text-danger">{errors.institute_err}</div>
                    <select
                      name="course"
                      id=""
                      value={user.course}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        - Select Course -
                      </option>
                      <option value="BBA">BBA</option>
                      <option value="BCA">BCA</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="B. Sc.">BSc</option>
                      <option value="B.Arch">B.Arch</option>
                      <option value="B.E.">B.E.</option>
                      <option value="MBBS">MBBS</option>
                      <option value="BDS">BDS</option>
                      <option value="BHMS">BHMS</option>
                      <option value="B. Pharmacy">B. Pharmacy</option>
                      <option value="BPT">BPT</option>
                      <option value="BAMS">BAMS</option>
                      <option value="BUMS">BUMS</option>
                      <option value="Bioinformatics">Bioinformatics</option>
                      <option value="Genetics">Genetics</option>
                      <option value="Microbiology">Microbiology</option>
                      <option value="Forensic Sciences">Forensic Sciences</option>
                      <option value="Biotechnology">Biotechnology</option>
                      <option value="Environmental Science">Environmental Science</option>
                      <option value="Nursing">Nursing</option>
                      <option value="Postgraduate diploma">Postgraduate diploma</option>
                      <option value="MBA">MBA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="MA / MSc Economics">MA / MSc Economics</option>
                      <option value="MA / MSc Statistics / Mathematics">MA / MSc Statistics / Mathematics</option>
                      <option value="MCA / MSc Computer Science">MCA / MSc Computer Science</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="PGD Hotel Management">PGD Hotel Management</option>
                      <option value="PGP – Business Accounting & Taxation">PGP – Business Accounting & Taxation</option>
                      <option value="Tally">Tally</option>
                      <option value="M.com">M.com</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Finance & Accounts">Finance & Accounts</option>
                      <option value="Mass Communication">Mass Communication</option>
                      <option value="Law">Law</option>                        
                    </select>
                    <div className="text-danger">{errors.course_err}</div>
                    <input
                      type="text"
                      name="yearofjoining"
                      placeholder="Year of joining"
                      value={user.yearofjoining}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.yearofjoining_err}</div>
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
                    <div className="text-danger">{errors.designation_err}</div>
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
                    <div className="text-danger">{errors.email_err}</div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.password_err}</div>
                    <input
                      type="password"
                      name="cpassword"
                      placeholder="Confirm Password"
                      value={user.cpassword}
                      onChange={handleChange}
                    />
                    <div className="text-danger">{errors.cpassword_err}</div>
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
