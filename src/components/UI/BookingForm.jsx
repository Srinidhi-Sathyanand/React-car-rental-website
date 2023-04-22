import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const [userData, setUserData] = useState({
    FirstName: "",
    lastName: "",
    Email: "",
    phoneNumber:"",
    FromAddress:"",
    ToAddress:"",
    person:"",
    luggage:"",
    date:"",
    time:"",
    write:"",
  });
  
 let name, value;
 const postUserData = (event) => {
  name = event.target.name;
  value= event.target.value;
  setUserData({...userData, [name]:value});
 };

 const submitData = async(event) =>{
  event.preventDefault();
  const {FirstName,lastName,Email,phoneNumber,FromAddress,ToAddress,person,luggage,date,time,write} = userData;
  const res = await fetch(
    'https://w-contact-55d0e-default-rtdb.firebaseio.com/userDataRecords.json',
    {
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
      FirstName,lastName,Email,phoneNumber,FromAddress,ToAddress,person,luggage,date,time,write
    }),
    }
    );
    if(res){
      setUserData({
        FirstName: "",
        lastName: "",
        Email: "",
        phoneNumber:"",
        FromAddress:"",
        ToAddress:"",
        person:"",
        luggage:"",
        date:"",
        time:"",
        write:"",
      });
      alert("Data Stored");
    }else {
      alert("fill the data");
    }
 };
  // const submitHandler = (event) => {
  //   event.preventDefault();
  // };
  return (
    <Form >
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input name="FirstName"
        type="text" placeholder="First Name"
        value={userData.FirstName}
        onChange={postUserData} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input name="Lastname"
        type="text" placeholder="Last Name"
        value={userData.LastName}
        onChange={postUserData} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input name="Email"
        type="email" placeholder="Email"
        value={userData.Email}
        onChange={postUserData} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input name="PhoneNumber" 
        type="number" placeholder="PhoneNumber"
        value={userData.phoneNumber}
        onChange={postUserData} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input name="FromAddress"
        type="text" placeholder="From Address"
        value={userData.FromAddress}
        onChange={postUserData} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input name="ToAddress"
        type="text" placeholder="To Address" 
        value={userData.ToAddress}
        onChange={postUserData}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="person" 
        value={userData.person}
        onChange={postUserData} 
        id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
        
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="luggage" 
        value={userData.luggage}
        onChange={postUserData}
        id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
        
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input name="date"
        type="date" placeholder="Journey Date" 
        value={userData.date}
        onChange={postUserData}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          name="time"
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          value={userData.time}
          onChange={postUserData}
        />
      </FormGroup>

      <FormGroup>
        <textarea
        name="write"
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          value={userData.write}
          onChange={postUserData}
        ></textarea>
      </FormGroup>
      <button className=" contact__btn" type="submit"
                        onClick={submitData}>
                  Submit
      </button>
    </Form>
  );
};

export default BookingForm;
