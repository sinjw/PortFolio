import React, { useState } from "react";
import axios from "axios";

const Contact: React.FC = () => {
  const [emailInfo, setEmailInfo] = useState({
    from: "",
    subject: "",
    text: "",
  });

  const [result, setResult] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/send-email",
        emailInfo
      );
      setResult(response.data.message);
    } catch (error) {
      console.error(error);
      setResult("Error sending email.");
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Email Sender</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From:</label>
        <input
          type="email"
          id="from"
          name="from"
          value={emailInfo.from}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={emailInfo.subject}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="text">Message:</label>
        <textarea
          id="text"
          name="text"
          value={emailInfo.text}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Send Email</button>
      </form>

      {result && <div>{result}</div>}
    </div>
  );
};

export default Contact;
