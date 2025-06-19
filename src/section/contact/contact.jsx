import React, { useState } from "react";
import SectionHead from "../section";
import { Contact2 } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    const templateParams = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

 try {
  const result = await emailjs.send(
    "service_euinzjg",
    "template_xdb6xji",
    templateParams,
    "-hYthxIVvuo4DQOBp"
  );

  setShowSuccess(true);
  setTimeout(() => setShowSuccess(false), 2000); // Hide after 2 sec
} catch (error) {
  console.error("Email sending error:", error);
  alert("Failed to send message. Please try again.");
}
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50"
        >
          📧 Message sent successfully!
        </motion.div>
      )}

      <SectionHead title={"contact"} icon={<Contact2 />} />

      <motion.h1
        className="text-3xl md:text-6xl font-light italic leading-tight text-[var(--text-color)] text-center md:text-left mt-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Let's work{" "}
        <span className="text-[var(--text-color2)] italic font-semibold">
          Together
        </span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-3xl font-light italic text-[var(--text-color)] text-center md:text-left mt-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        exanjoel07@gmail.com
      </motion.p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-6 py-10 mx-auto"
      >
        {/* First & Last Name */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FloatingInput
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName}
            validation={{ required: "First name is required" }}
          />
          <FloatingInput
            label="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName}
            validation={{ required: "Last name is required" }}
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <FloatingInput
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email address",
              },
            }}
          />
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <FloatingInput
            label="Phone"
            name="phone"
            type="tel"
            register={register}
            error={errors.phone}
            validation={{ required: "Phone number is required" }}
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <FloatingTextarea
            label="Message"
            name="message"
            register={register}
            error={errors.message}
            validation={{ required: "Message is required" }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="mt-6 w-fit px-6 py-3 bg-[var(--text-color2)] text-[var(--bg-color)] font-semibold flex items-center justify-center gap-2 rounded-full hover:bg-transparent hover:text-[var(--text-color2)] transition duration-300 border-2 border-[var(--text-color2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <FaPaperPlane /> Send Message
        </motion.button>
      </form>
    </div>
  );
};

// Floating Input Field
const FloatingInput = ({
  label,
  name,
  type = "text",
  register,
  error,
  validation,
}) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      placeholder=" "
      {...register(name, validation)}
      className="peer w-full border-b border-gray-400 bg-transparent text-[var(--text-color)] font-light focus:border-[var(--text-color2)] focus:outline-none transition-all py-2 placeholder-transparent"
    />
    <label
      htmlFor={name}
      className="absolute left-0 text-sm font-semibold text-gray-500 uppercase tracking-wide transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-6 transition-all"
    >
      {label} <span className="text-red-500">*</span>
    </label>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

// Floating Textarea
const FloatingTextarea = ({ label, name, register, error, validation }) => (
  <div className="relative w-full">
    <textarea
      id={name}
      rows="5"
      placeholder=" "
      {...register(name, validation)}
      className="peer w-full border-b border-gray-400 bg-transparent text-[var(--text-color)] font-light focus:border-[var(--text-color2)] focus:outline-none transition-all py-2 placeholder-transparent resize-none"
    ></textarea>
    <label
      htmlFor={name}
      className="absolute left-0 text-sm font-semibold text-gray-500 uppercase tracking-wide transform -translate-y-6 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-6 transition-all"
    >
      {label} <span className="text-red-500">*</span>
    </label>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default Contact;
