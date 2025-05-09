"use client"; // This is needed to use interactive JS (e.g., show/hide button)

import { useState, useEffect } from "react";
import Banner from "../../components/banner/banner";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!(name.trim() && email.trim() && message.trim()));
  }, [name, email, message]);

  useEffect(() => {
    const submitButton = document.querySelector(
      `.${styles.submitButton}`
    ) as HTMLElement;

    if (isVisible) {
      submitButton.style.transition = "opacity 0.5s ease-in-out";
      submitButton.style.opacity = "1";
    } else {
      submitButton.style.transition = "opacity 0.5s ease-in-out";
      submitButton.style.opacity = "0";
    }
  }, [isVisible]);

  return (
    <div>
      <Banner title="02 &nbsp;Contact"></Banner>

      <div className={styles.typingContainer}>
        <form action="https://formspree.io/f/mgvakkna" method="POST">
          <input type="hidden" name="_subject" value="New submission!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <textarea
            name="Message"
            required
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className={`${styles.submitButton}`}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
