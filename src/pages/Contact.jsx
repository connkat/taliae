import "./Contact.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

// import ReCAPTCHA from "react-google-recaptcha";
// import Grecaptcha from "grecaptcha";
import { init, sendForm } from "emailjs-com";
init("user_AmUpjUDLPeSmXgW4Qa9xC");

const initialState = {
  user_name: "",
  user_email: "",
  message: "",
};

// const client = new Grecaptcha("secret");
// const checkCaptcha = () => {
//   if (client.verify("token")) {
//     console.log("CAPTCHA ACCEPTED");
//   } else {
//     console.log("CAPTCHA NO DICE BRO");
//   }
// };

function Contact() {
  const { register, formState } = useForm();
  const [{ user_name, user_email, message }, setState] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
    console.log("sent", message);
  };

  // function recaptcha(value) {
  //   console.log("Captcha value:", value);
  // }

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    sendForm("default_service", "template_qheiyl2", ".contact-form").then(
      function (response) {
        clearState();
        console.log("SUCCESS!", response.status, response.text);
        // checkCaptcha()
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  const messageCharsLeft = 1500 - message.length;

  return (
    <div className="Contact">
      <div className="contact-body">
        <p>Use this form to e-mail my mom for more information or to book!</p>
        <form className="contact-form" onSubmit={onSubmit}>
          {formState.isSubmitted && (
            <div className="success">Form submitted successfully</div>
          )}
          <input
            type="text"
            name="user_name"
            {...register("user_name")}
            placeholder="Name"
            onChange={onChange}
            value={user_name}
          />

          <br />
          <input
            type="user_email"
            name="user_email"
            {...register("user_email", { required: true, maxLength: 100 })}
            placeholder="Email"
            onChange={onChange}
            value={user_email}
          />
          <br />
          <textarea
            name="message"
            {...register("message", { required: true, maxLength: 1000 })}
            placeholder="Message"
            maxLength="1000"
            aria-multiline={true}
            onChange={onChange}
            value={message}
          />
          <p className="message-chars-left">{messageCharsLeft}</p>
          <br />
          {/* <ReCAPTCHA
          sitekey="6LcjFkoeAAAAAF7eyeQL6dHJb1TpH0MXw3gHG1Wq"
          onChange={recaptcha}
        /> */}

          <br />
          <input type="submit" disabled={false} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
