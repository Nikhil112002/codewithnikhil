import React, { useState } from "react";
import Header from "./header";
import FooterAll from "./FooterAll";
//import toastify library and css
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  document.title="Contact | BlogWithNikhil"
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [msg,setMsg]=useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name&&phone&&email&&msg){
      setName("");
      setPhone("");
      setEmail("");
      setMsg("");
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
      toast.error('Please fill all the data', {
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
      <div class="container my-4">
        <div class="row shadow p-3 mb-5 bg-body rounded ">
          <div class="col-md-7">
            <div class="text-center">
              <h1 class="mx-5 mt-5" 
              style={{fontWeight: "700", fontSize: "30px"}}>
                Lets talk about everything!
              </h1>
              <img
                class="mx-auto mt-3   py-2"
                src="assets/images/Nikhil.jpeg"
                style={{borderRadius: "50%"}}
                alt="Human "
                width="146px"
                height="162px"
              ></img>
            </div>
            <h3
              class="mt-3  mb-0 text-center"
              style={{fontSize: "24px", fontWeight: "500"}}
            >
              Feel free to ask us anything!
            </h3>
            <p
              class="mx-5 mb-0 py-4 px-4 textalign1"
              style={{fontSize: "16px", fontWeight: "400"}}
            >
              Have doubt or suggestion to make? Feel free to ask anything. If
              you have any suggestions, please let me know. Your suggestions are
              highly appreciated. I appreciate your time and try hard to reply
              to every single message posted here! Keep dropping your priceless
              opinions.
            </p>
          </div>
          <div class="col-md-5 my-5">
            <form class="row g-3" action="https://formspree.io/f/xjvdpqjk" onSubmit={handleSubmit}>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label labelClr">
                  Full Name 
                </label>
                <input
                  type="text"
                  name="Name"
                  value={name}
                  class="form-control boxCss1"
                  id="inputEmail4"
                  onChange={(e)=>setName(e.target.value)}
                ></input>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label labelClr">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  class="form-control boxCss1"
                  id="inputAddress"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                ></input>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label labelClr">
                  Phone
                </label>
                <input
                  type="text"
                  name="Phone Number"
                  class="form-control boxCss1"
                  value={phone}
                  id="inputAddress2"
                  onChange={(e)=>setPhone(e.target.value)}
                ></input>
              </div>
              <div class="col-md-12">
                <label for="inputCity" class="form-label labelClr">
                  Message
                </label>
                <textarea
                  type="text"
                  class="form-control boxCss1"
                  name="Message"
                  id="inputCity"
                  style={{height: "226px"}}
                  value={msg}
                  onChange={(e)=>setMsg(e.target.value)}
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style={{width: "100%", borderRadius: "10px"}}
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
