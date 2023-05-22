import React, { useEffect } from "react";

const EditProfileModal = ({ closeModal, user, setUser }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="close-modal" onClick={closeModal}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={user.fname}
          onChange={handleChange}
        />
        {/* <div className="text-danger">{errors.fname_err}</div> */}
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={user.lname}
          onChange={handleChange}
        />
        {/* <div className="text-danger">{errors.lname_err}</div> */}
        <div className="datefield">
          <span>Date of Birth</span>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={user.dob}
            onChange={handleChange}
          />
        </div>
        {/* <div className="text-danger">{errors.dob_err}</div> */}
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
        {/* <div className="text-danger">{errors.gender_err}</div> */}

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
        />
        {/* <div className="text-danger">{errors.phone_err}</div> */}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        {/* <div className="text-danger">{errors.email_err}</div> */}
      </div>
    </>
  );
};

export default EditProfileModal;
