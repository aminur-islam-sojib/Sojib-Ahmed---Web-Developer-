import type React from 'react';
import SentButton from './SentButton';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <section>
        <h1 className=" text-2xl font-medium">Contact Form</h1>
      </section>
      <section className=" mt-5">
        <form
          onSubmit={handleSubmit}
          className=" w-full flex flex-col gap-3 md:gap-5"
        >
          <div className=" flex flex-col md:flex-row gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 pl-4 bg-transparent border border-[#383838]  w-full rounded-[8px] focus:outline-none focus:ring-[1px] focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 pl-4 bg-transparent border border-[#383838] w-full rounded-[8px] focus:outline-none focus:ring-[1px] focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            />
          </div>
          <textarea
            name=""
            id=""
            rows={5}
            className="p-3 pl-4 bg-transparent border border-[#383838] rounded-xl focus:outline-none focus:ring-[1px] focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            placeholder="Your Message"
          ></textarea>
          <SentButton />
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
