import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";

export default function ContactUsForm() {
  const [state, handleSubmit] = useForm("mjkvvonz");
  const [ShowForm, setShowForm] = useState<boolean>(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowForm(true);
      const timer = setTimeout(() => {
        setShowForm(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="mt-12 grid gap-6 z-40">
      {ShowForm && (
        <div className="text-center">
          <h3 className="text-2xl text-white font-bold">Thank you!</h3>
          <p className="text-white">Your message has been sent.</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 z-30 gap-6">
        <div>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            className="w-full text-white p-4 bg-transparent border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email *"
            required
            className="w-full text-white  p-4 bg-transparent border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 z-30">
        <div>
          <label htmlFor="phone" className="sr-only">
            Your Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your Phone *"
            required
            className="w-full text-white  p-4 bg-transparent border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        <div>
          <label htmlFor="topic" className="sr-only">
            Topic
          </label>
          <input
            id="topic"
            type="text"
            name="topic"
            placeholder="Topic (optional)"
            className="w-full text-white  p-4 bg-transparent border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
      <div className="z-30">
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your Message *"
          required
          className="w-full p-4 z-50 bg-transparent border text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 min-h-[150px]"
        />
      </div>
      <div className="flex items-center z-30 space-x-2">
        <input
          type="checkbox"
          name="terms"
          value="terms"
          required
          id="terms"
          className="appearance-none h-5 w-5 border border-gray-300 rounded-sm checked:bg-purple-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer relative"
        />
        <label htmlFor="terms" className="text-sm text-gray-600">
          I agree to receive emails and allow tracking to improve my experience.
        </label>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className=" CTSButton little z-50 text-white cursor-pointer py-3 px-6 rounded-lg w-56 mx-auto shadow-lg transition-all duration-300"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
