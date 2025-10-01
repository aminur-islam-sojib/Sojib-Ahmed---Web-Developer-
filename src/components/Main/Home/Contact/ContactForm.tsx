const ContactForm = () => {
  return (
    <div>
      <section>
        <h1 className=" text-2xl font-medium">Contact Form</h1>
      </section>
      <section className=" mt-5">
        <form className=" w-full flex flex-col gap-3 md:gap-5">
          <div className=" flex flex-col md:flex-row gap-3 md:gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 pl-4 border-1 border-[#383838] w-full rounded-[8px] focus:outline-none focus:ring-[1px] focus:ring-amber-500 focus:border-amber-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 pl-4 border-1 border-[#383838] w-full rounded-[8px] focus:outline-none focus:ring-[1px] focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
          <textarea
            name=""
            id=""
            rows={5}
            className="p-3 pl-4 border-1 border-[#383838] rounded-xl focus:outline-none focus:ring-[1px] focus:ring-amber-500 focus:border-amber-500"
            placeholder="Your Message"
          ></textarea>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;
