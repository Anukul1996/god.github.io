/* eslint-disable */
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

// import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

function Newsletter() {
  const formid = "8gHYSLTG";
  const formURL = `https://submit-form.com/${formid}`;

  const initialFormState = {
    name: "",
    email: "",
    message: "",
  }

  const [message, setMessage] = useState(initialFormState);

  let submitMessage = async (event) => {
    event.preventDefault();
    console.log("clicked");
    await postSubmissioin();
    setMessage("");
  }

  const postSubmissioin = async () => {
    const payload = {
      ...message,
    };

    try {
      const result = await axios.post(formURL, payload);
      alert("Thanks for reaching out to us. Someone will be in touch shortly.");
    } catch (error) {
      console.log(error);
    }
  }

  const handleMessage = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updatedFormState = { ...message };
    updatedFormState[formKey] = value;
    setMessage(updatedFormState);
  }

  return (
    <div className="app__newsletter">
      {/* <form onSubmit={(event) => submitMessage(event)}> */}
      <div className="app__newsletter-heading">
        {/* <SubHeading title="Reach out to us" /> */}
        <h1 className="headtext__cormorant">Reach out to us</h1>
        <p className="p__opensans">Your query is our Priority</p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input type="text" id="name" placeholder="Enter Name" value={initialFormState.name} onChange={handleMessage} />
        <input type="email" id="email" placeholder="Enter Email" value={initialFormState.email} onChange={handleMessage} />
        <input type="text" id="message" placeholder="Enter Message" value={initialFormState.message} onChange={handleMessage} />
        <button type="button" onClick={submitMessage} className="custom__button">SEND</button>
      </div>
      {/* </form> */}
    </div>
  )
};

export default Newsletter;
