import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [

  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },

];

const Contact = () => {
  const [userData, setUserData] = useState({
    FirstName: "",
    Email: "",
    Message: "",
  });
  
 let name, value;
 const postUserData = (event) => {
  name = event.target.name;
  value= event.target.value;
  setUserData({...userData, [name]:value});
 };

 const submitData = async(event) =>{
  event.preventDefault();
  const {FirstName, Email, Message} = userData;
  const res = await fetch(
    'https://w-contact-55d0e-default-rtdb.firebaseio.com/userDataRecords.json',
    {
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
      FirstName, 
      Email, 
      Message
    }),
    }
    );
    if(res){
      setUserData({
        FirstName: "",
        Email: "",
        Message: "",
      });
      alert("Data Stored");
    }else {
      alert("fill the data");
    }
 };
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Contact us</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input name="FirstName"
                         placeholder="FirstName" 
                         type="text" 
                         value={userData.FirstName}
                         onChange={postUserData}/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input name="Email"
                         placeholder="Email" 
                         type="email"
                         value={userData.Email}
                         onChange={postUserData} />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    name="Message"
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    value={userData.Message}
                    onChange={postUserData}
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit"
                        onClick={submitData}>
                  Submit
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  6th street,RS puram,Coimbatore
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+919629408852</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">srinidhiashmi@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
