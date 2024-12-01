"use client";
import { useState, useRef } from "react";
import NewsLatterBox from "./NewsLatterBox";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const REACT_APP_EMAILJS_PUBLIC_KEY = "s8b7U1SRRnHsihdoU";
  const REACT_APP_EMAILJS_TEMPLATE_ID = "template_48q90ss";
  const REACT_APP_EMAILJS_SERVICE_ID = "service_ygcepqk";

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;

    if (name.trim().length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }

    if (!email.trim().toLowerCase().match(emailRegex)) {
      alert("Enter a valid email address.");
      return false;
    }

    if (!phone.trim().match(phoneRegex)) {
      alert("Enter a valid Indian phone number (e.g., +91 9876543210).");
      return false;
    }

    if (message.trim().length < 5) {
      alert("Message must be at least 5 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "BOOKIZAP",
          from_email: form.email.trim().toLowerCase(),
          to_email: "bookizap@gmail.com",
          phone: form.phone.trim(),
          message: form.message,
        },
        REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Thanks for contacting us. We'll get back to you soon!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("[EMAILJS_ERROR]: ", error);
        alert("An error occurred while sending your message. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container md:flex flex-wrap w-full">
        <h3 className="md:hidden block md:mb-4 mb-2 text-2xl font-bold leading-tight text-black dark:text-white">
          Have queries? Let’s discuss
        </h3>
        <p className="md:hidden block md:mb-11 mb-2 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
          Our support team will get back to you ASAP
        </p>
        <div className="w-5/12 md:block hidden">
          <NewsLatterBox />
        </div>
        <div className="md:w-7/12 w-full">
          <div
            className="mb-12 rounded-sm bg-white px-1 md:px-8 py-2 md:py-11 shadow-three dark:bg-gray-dark slg:mb-5"
            data-wow-delay=".15s"
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="md:-mx-4 mx-1 flex flex-wrap">
                <div className="md:px-4 px-0 w-full flex">
                  <div className="mb-8 w-full">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your Name"
                      disabled={loading}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-1 md:px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="md:px-4 px-1 w-full flex">
                  <div className="mb-8 w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter Email ID"
                      disabled={loading}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-1 md:px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 w-1/2 ml-5">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Enter Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone"
                      disabled={loading}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-1 md:px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full md:px-4 px-1">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Enter your Message here"
                      disabled={loading}
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-1 md:px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full md:px-4 px-1 md:mb-16 mb-3">
                  <button
                    className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:hidden block">
          <NewsLatterBox />
        </div>
      </div>
    </section>
  );
};

export default Contact;
