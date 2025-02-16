
import React, { useState } from 'react';
import './SignUp.css'

function SignUp() {
  const [formData, setFormData] = useState({
    name:'',
    password:'',
    height: '',
    weight: '',
    reach: '',
    record: '',
    bio: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();

    const userData = {
        id : crypto.randomUUID(),
        ...formData
    };
   
    try{
        const response = await fetch("https://smrv02nmxk.execute-api.us-east-2.amazonaws.com/items",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        console.log(result);
        alert("Sign up successful")
    } catch(error){
        console.error("Error signing up:", error);
        alert("Error signing up. Please try again.")
    }
  };

  return (
    <div className="sign-up-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter height"
            required
          />
        </div>
        <div>
          <label>Weight:</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter weight"
            required
          />
        </div>
        <div>
          <label>Reach:</label>
          <input
            type="text"
            name="reach"
            value={formData.reach}
            onChange={handleChange}
            placeholder="Enter reach"
            required
          />
        </div>
        <div>
          <label>Record:</label>
          <input
            type="text"
            name="record"
            value={formData.record}
            onChange={handleChange}
            placeholder="Enter record"
            required
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Enter bio"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
