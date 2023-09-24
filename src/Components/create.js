import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  // const handleSubmit = () => {
  //   const header = { "Access-Control-Allow-Origin": "*" };
  //   fetch("https://650d235fa8b42265ec2bbab0.mockapi.io/crud-reactjs/reactjs", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       header,
  //     }),
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://.mockapi.io/crud-reactjs/reactjs",
          {
            name,
            email,
          }
        )
        .then(() => {
          history("/read");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>CREATE</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
