import React, { useState, useEffect } from "react";
import "./addForm.css";
function AddForm({ onSubmit,validate}) {
  const [formData, setFormData] = useState({
    url: "",
    key: "",
  });

  function addData(e) {
    const isValid = validate(formData.key);
    if (!isValid) return;

    e.preventDefault();
    console.log(formData);
    if (formData.url === "" || formData.key === "") {
      alert("Please enter both url and key");
      return;
    }
    onSubmit(formData);
  }

  useEffect(() => {
    const savedData = localStorage.getItem("myData");
    if (savedData) setFormData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(formData));
  }, [formData]);

  return (
    <form className="formContainer" onSubmit={addData}>
      <div className="topHeader"></div>
      <div className="nameDiv--m">
        <div className="name">
          Enter The URL <span className="required">*</span>
        </div>
        <div className="inputDiv">
          <input
            type="text"
            name="Name"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            id="name"
            placeholder="Your Answer"
            required
          />
          
        </div>
      </div>

      <div className="mobileDiv--m">
        <div className="name">
          Enter Unique Key <span className="required">*</span>
        </div>
        <div className="inputDiv">
          <input
            type="number"
            name="Mobile No"
            value={formData.key}
            onChange={(e) => setFormData({ ...formData, key: e.target.value })}
            placeholder="Your Answer"
            required
          />
        </div>
      </div>

      <input className="btn" type="Submit" name="Submit" id="" />
    </form>
  );
}

export default AddForm;
