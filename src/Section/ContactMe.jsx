/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { slideIn } from "../Constant/motionSlideIn";
import EarthCanvas from "../Components/Earth";
import { motion, useMotionValue, useSpring } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const emailParams = {
      name: form.name,
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        setLoading(false);
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-20 overflow-hidden section-spacing c-space`}
    >
      <motion.div
        variants={{
          hidden: {
            x: "-100%",
            y: 0,
          },
          show: {
            x: 0,
            y: 0,
            transition: {
              type: "tween",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="flex-1 flex flex-col items-center justify-center max-w-md p-5 mx-auto rounded-2xl bg-primary shadow-md"
      >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!loading ? "Send" : "Sending..."}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={{
          hidden: {
            x: "100%",
            y: 0,
          },
          show: {
            x: 0,
            y: 0,
            transition: {
              type: "tween",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default Contact;
