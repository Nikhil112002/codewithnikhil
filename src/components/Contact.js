import React, { useState } from "react";
import Header from "./header";
import FooterAll from "./FooterAll";
//import toastify library and css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Contact = () => {
  document.title="Contact | BlogWithNikhil"

  const[user,setUser] = useState({
    name:"", email:"", phone:"", message:""
  });

  let name,value;
  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value
    setUser({...user, [name]:value})
  }

    const sendData = async (e) => {
      e.preventDefault();
      const {name, email, phone, message} = user;
      // console.log(user);
      if(name&&phone&&email&&message){
        const resp = await axios.post("https://nikhilblog.onrender.com/api/products/contacts",{
        name,email,phone,message
      })
      console.log(resp);
      setUser({
        name:"", email:"", phone:"", message:""
      });
        toast.success('Your message has been successfully delivered', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
              }else{
                toast.error('Please fill all the fileds', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                  });
              }
      
    }

  return (
    <>
    <Header />
      <div className="container my-4">
        <div className="row shadow p-3 mb-5 bg-body rounded ">
          <div className="col-md-7">
            <div className="text-center">
              <h1 className="mx-5 mt-5" 
              style={{fontWeight: "700", fontSize: "30px"}}>
                Lets talk about everything!
              </h1>
              <img
                className="mx-auto mt-3   py-2"
                src="assets/images/Nikhil.jpeg"
                style={{borderRadius: "50%"}}
                alt="Human "
                width="146px"
                height="162px"
              ></img>
            </div>
            <h3
              className="mt-3  mb-0 text-center"
              style={{fontSize: "24px", fontWeight: "500"}}
            >
              Feel free to ask us anything!
            </h3>
            <p
              className="mx-5 mb-0 py-4 px-4 textalign1"
              style={{fontSize: "16px", fontWeight: "400"}}
            >
              Have doubt or suggestion to make? Feel free to ask anything. If
              you have any suggestions, please let me know. Your suggestions are
              highly appreciated. I appreciate your time and try hard to reply
              to every single message posted here! Keep dropping your priceless
              opinions.
            </p>
          </div>
          <div className="col-md-5 my-5">
            <form className="row g-3" 
            // onSubmit={handleSubmit}
            method="POST"
            >
              <div className="col-md-12">
                <label for="inputEmail4" className="form-label labelClr">
                  Full Name 
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  className="form-control boxCss1"
                  id="inputEmail4"
                  value={user.name}
                  onChange={handleInputs}
                ></input>
              </div>
              <div className="col-12">
                <label for="inputAddress" className="form-label labelClr">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="form-control boxCss1"
                  id="inputAddress"
                  value={user.email}
                  onChange={handleInputs}
                ></input>
              </div>
              <div className="col-12">
                <label for="inputAddress2" className="form-label labelClr">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  autoComplete="off"
                  className="form-control boxCss1"
                  id="inputAddress2"
                  value={user.phone}
                  onChange={handleInputs}
                ></input>
              </div>
              <div className="col-md-12">
                <label for="inputCity" className="form-label labelClr">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control boxCss1"
                  name="message"
                  id="inputCity"
                  style={{height: "226px"}}
                  value={user.message}
                  onChange={handleInputs}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{width: "100%", borderRadius: "10px"}}
                  onClick={sendData}
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterAll />
      <ToastContainer/>
    </>
  );
};

export default Contact;
