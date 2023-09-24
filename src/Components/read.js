import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    try {
      // fetch(
      //   "https://.mockapi.io/crud-reactjs/reactjs",
      //   {
      //     method: "GET",
      //   }
      // )
      //   .then((res) => {
      //     if (!res.ok) {
      //       throw new Error("Network response was not ok");
      //     }
      //   })
      //   .then((res) => {
      //     setData(res);
      //   })
      //   .catch((err) => console.log(err));

      axios
        .get("https://.mockapi.io/crud-reactjs/reactjs")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(
        `https://.mockapi.io/crud-reactjs/reactjs/${id}`
      )
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <h2>READ</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((list) => (
              <tr>
                <th scope="row">{list.id}</th>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td>
                  <Link to={`/update`}>
                    <button
                      class="btn btn-success"
                      onClick={() => {
                        setToLocalStorage(list.id, list.name, list.email);
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      handleDelete(list.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
