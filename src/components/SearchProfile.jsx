import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { WEB_URL } from "../baseURL";

export default function SearchProfile() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = (e) => {
    setName(e.target.value);
    axios({
      url: `${WEB_URL}/api/searchUser`,
      method: "post",
      data: {
        search: name,
      },
    })
      .then((Response) => {
        console.log(Response.data.data);
        setUsers(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div class="body1">
        <div className="search-hearder">
          <div class="search-box">
            <i
              class="fa-sharp fa-solid fa-magnifying-glass"
              style={{ color: "#787878" }}
            ></i>
            <input
              type="text"
              placeholder="search"
              value={name}
              onChange={handleSearch}
            />
          </div>
          <i class="fa-solid fa-filter"></i>
        </div>
        {users && users.length > 0 ? (
          <div class="card-wrapper">
            {users.map((elem) => (
              <div class="card">
                <div class="image-content">
                  <span class="overlay"></span>
                  <div class="card-image">
                    {elem.profilepic !== "" ? (
                      <img
                        src={`${WEB_URL}${elem.profilepic}`}
                        alt="amir-esrafili"
                        class="card-img"
                      />
                    ) : (
                      <img src="images/profile1.png" class="card-img"></img>
                    )}
                  </div>
                </div>
                <div class="card-content">
                  <h2 class="name">
                    {elem.fname} {elem.lname}
                  </h2>
                  <p>
                    {elem.city && elem.city} {elem.state && elem.state}{" "}
                    {elem.nation ? `, ${elem.nation} ` : null}
                  </p>
                  <div class="nav">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            class="fa-brands fa-whatsapp"
                            style={{ color: "#7e7f81" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class="fa-brands fa-linkedin-in"
                            style={{ color: "#7e7f81" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class="fa-brands fa-github"
                            style={{ color: "#7e7f81" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            class="fa-brands fa-google"
                            style={{ color: "#7e7f81" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button class="btn-more">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <img src="images/search-bro.png" className="no-search-img" />
        )}
      </div>
    </>
  );
}
