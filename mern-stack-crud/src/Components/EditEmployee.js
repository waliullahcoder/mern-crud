import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate , useParams } from "react-router-dom";
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 const EditEmployee = () => {
    let history = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
  
    const { firstName, lastName, email, phone} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post(`http://localhost:4000/employees/updateEmployee/${id}`, user);
      history.push("/");
    };
  
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:4000/employees/editEmployee/${id}`);
      setUser(result.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="firstName"
                value={firstName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="lastName"
                value={lastName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
          
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditEmployee;