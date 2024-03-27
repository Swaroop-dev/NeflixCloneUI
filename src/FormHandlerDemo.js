import React, { useCallback, useEffect, useState } from "react";
// import { debounce } from "./jsUtilities/asyncoperations";

const FormHandler = () => {
  const [profile, setProfile] = useState({
    firstname: "",
    address: "",
    lastname: "",
  });
  const simulateApiCall = (val) => {
    setTimeout(() => console.log(val, "debounced"), 2000);
  };
  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
  const handleChange = debounce((e) => {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    simulateApiCall(e.target.value)
  },300);
  //const optimised=useCallback(debounce(handleChange,1000),[])
  return (
    <div>
      <div>
        <input
          name="firstname"
          onChange={handleChange}
          placeholder="first name"
        />
      </div>
      <div>
        <input
          name="lastname"
          onChange={handleChange}
          placeholder="last name"
        />
      </div>

      <div>
        <input name="address" onChange={handleChange} placeholder="address" />
      </div>
      <p>{profile.firstname}</p>
      <p>{profile.lastname}</p>
      <p>{profile.address}</p>
    </div>
  );
};

export default FormHandler;
