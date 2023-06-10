import React, { useState } from "react";
import "./Create.css";

const Create = () => {
  
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [shoulderSize, setShoulderSize] = useState('');
  const [waistCircumference, setWaistCircumference] = useState('');
  const [modelId, setModelId] = useState('');

  const postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error:', error.message);
      throw error;
    }
  };

  const submit = (e) => {
    e.preventDefault();

    var url = `http://localhost:5180/model`;
    var data = { name, height, shoulderSize, waistCircumference };
    var response = postData(url, data);

    setModelId(response.id);
  };

  return (
    <div className="createDiv">
      <div className="formDiv">
        <form className="createForm" onSubmit={submit}>
          <label htmlFor="name" className="labelCreateForm">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="createFormInput"
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="height" className="labelCreateForm">
            Height:
          </label>
          <input
            type="number"
            id="height"
            name="height"
            className="createFormInput"
            onChange={(event) => setHeight(event.target.value)}
          />

          <label htmlFor="shoulderSize" className="labelCreateForm">
            Shoulder Size:
          </label>
          <input
            type="number"
            id="shoulderSize"
            name="shoulderSize"
            className="createFormInput"
            onChange={(event) => setShoulderSize(event.target.value)}
          />

          <label htmlFor="waistCircumference" className="labelCreateForm">
            Waist Circumference:
          </label>
          <input
            type="number"
            id="waistCircumference"
            name="waistCircumference"
            className="createFormInput"
            onChange={(event) => setWaistCircumference(event.target.value)}
          />

          <input
            type="submit"
            value="Submit"
            className="submitButtonCreateForm"
          />
        </form>
      </div>

      <div className="modelDiv" ></div>
    </div>
  );
};

export default Create;
