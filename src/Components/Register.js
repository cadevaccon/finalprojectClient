import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../JS/actions/index";
import { Redirect } from "react-router-dom";

function Register() {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);

  const errors = useSelector((state) => state.userReducer.errors);
  // need
  // const [usernameErr, setUsernameErr] = useState()
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  // to Check1
  // errors.onChange(errors.errors.filter(e=>e.param==="username"?setUsernameErr(e.msg):null))
  const addUser = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password, role, phonenumber }));
  };
  return (
    <div>
      {loading ? (
        <div>
          {" "}
          <h2>Loading ....</h2>{" "}
        </div>
      ) : user ? (
        <>
          <Redirect to="/login" />
          {console.log(user)}
        </>
      ) : (
        <div className="Container">
          <div className="col-md-8 offset-md-4">
            <div className="row">
              <h1>Please fill the form</h1>
            </div>
            <div className="row mt-3">
              <input
              
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="form-control"
              ></input>
                {errors?console.log(errors.errors):null}
              {/* {errors
                ? errors.errors.map((e) =>
                    e.param === "username" ? (
                      <div>
                        <br />
                        {e.msg}
                      </div>
                    ) : null
                  )
                : null} */}
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              ></input>

              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className="form-control"
              ></input>
              {/* to CHeck1
            {errors?errors.errors.map(e=>e.param==="password"):null} */}
              {errors? errors.errors.map((e) =>e.param === "password" ? (<div>
                        <br />
                        {e.msg}
                      </div>
                    ) : null
                  )
                : null}
              <input
                type="text"
                name="phonenumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="PhoneNumber"
                className="form-control"
              ></input>
              {/* toCheck1 */}
              {/* {errors?errors.errors.map(e=>e.param==="phonenumber"?<div ><br/>{e.msg}</div>:null):null} */}

              <div onChange={(e) => setRole(e.target.value)}>
                <input type="radio" value="Doctor" name="role" /> Doctor
                <input type="radio" value="Patient" name="role" /> Patient
              </div>
              <div className="row mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={addUser}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
