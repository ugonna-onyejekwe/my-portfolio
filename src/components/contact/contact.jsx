import "./contact.scss";
import { icons } from "../info";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w04o4ui",
        "template_8g70l08",
        form.current,
        "tBaDgdosiThcZixcY"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading" >
            <h2>contact me</h2>
            <p>
              <span>lets</span> talk
            </p>
          </div>
          <div className="wrapper">
            <div className="txt_con" >
              <div className="box">
                <div className="icon_con">{icons.location_icon}</div>
                <div className="txt">
                  <h4>address</h4>
                  <p>enugu, nigeria</p>
                </div>
              </div>
              <div className="box">
                <div className="icon_con">{icons.person_icon}</div>
                <div className="txt">
                  <h4>freelencer</h4>
                  <p>avaliable right now</p>
                </div>
              </div>
              <div className="box">
                <div className="icon_con">{icons.mail_icon}</div>
                <div className="txt">
                  <h4>email</h4>
                  <p>ugonna013308@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon_con">{icons.phone_icon}</div>
                <div className="txt">
                  <h4>phone</h4>
                  <p>+234 8101 3308 34</p>
                </div>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} >
              <div className="name_section">
                <div className="input_con">
                  <label htmlFor="name">your full name </label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="input_con">
                  <label htmlFor="email">your email </label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="input_con">
                <label htmlFor="subject">your subject </label>
                <input type="text" id="subject" name="subject " required />
              </div>

              <div className="input_con">
                <label htmlFor="message">your message </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button type="submit" value={"send"}>
                send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
