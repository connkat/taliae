import "./Contact.css"
// import { useForm } from "react-hook-form";

function Contact() {
  // const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  // const message = watch("message") || "";
  // const messageCharsLeft = 1500 - message.length;

  return (
    <div className="Contact">
      <form id="contact-form">
        <input type="text" name="user_name" placeholder="Name" />
        <br />
        <input type="email" name="user_email" placeholder="Email" />
        <br />
        <textarea name="message" placeholder="Message" maxLength="1500" />
        {/* <p className="message-chars-left">{messageCharsLeft}</p> */}
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
