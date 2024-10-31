import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";

export default function CommentSection() {
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
    <section className="mt-12 bg-transparent p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-serif font-bold mb-6 text-gray-50">
        Leave a Comment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 z-50">
        {ShowForm && (
          <div className="text-center">
            <h3 className="text-2xl text-white font-bold">Thank you!</h3>
            <p className="text-white">Your message has been sent.</p>
          </div>
        )}

        <div className="grid grid-cols-1 z-50 sm:grid-cols-2 gap-4">
          <input
            placeholder="Name"
            type="text"
            name="Name"
            className="w-full p-3 border z-50 border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-gray-500"
          />
          <ValidationError prefix="Name" field="Name" errors={state.errors} />
          <input
            placeholder="Email"
            type="email"
            name="Email"
            className="w-full p-3 border z-50 border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-gray-500"
          />
          <ValidationError prefix="Email" field="Email" errors={state.errors} />
        </div>
        <textarea
          placeholder="Your comment"
          rows={4}
          name="Comment"
          className="w-full p-3 border z-50 border-gray-300 bg-transparent rounded-lg focus:outline-none focus:border-gray-500"
        />

        <ValidationError
          prefix="Comment"
          field="comment"
          errors={state.errors}
        />
        <div className="z-50 max-md:flex max-md:justify-center max-md:items-center max-md:w-full">
          <button
            type="submit"
            disabled={state.submitting}
            className="px-6 py-2 little CTSButton font-semibold z-50 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            {state.submitting ? "Submitting..." : "  Submit Comment"}
          </button>
        </div>
      </form>
    </section>
  );
}
