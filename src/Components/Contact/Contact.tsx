import ContactUsForm from "./ContactUsForm";

export default function Contact() {
  return (
    <section className="min-h-screen bg-transparent p-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold ">
            CONTACT US
          </h1>
          <h1 className="absolute inset-0 text-4xl md:text-6xl z-40 text-center  lg:text-7xl font-light text-white [text-shadow:3px_3px_0_#7000ff,-1px_-1px_0_#cc00ff,1px_-1px_0_#cc00ff,-1px_1px_0_#cc00ff,1px_1px_0_#cc00ff]">
            CONTACT US
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-[#dddd] mb-14">
          <div>
            <p className="mb-6">
              Duis suscipit egestas ullamcorper. Cras porta nulla et tristique
              pellentesque. Praesent finibus mauris eu sollicitudin interdum.
              Morbi et blandit quam. Donec vitae massa purus. Curabitur nunc
              mauris, iaculis a nibh at, ultricies sodales dolor.
            </p>
            <p>
              Curabitur pharetra velit eget dignissim varius. In vulputate elit
              at tortor pellentesque, non pulvinar neque consequat.
            </p>
          </div>
          <div>
            <div className="mb-4">
              <h2 className="font-semibold mb-1">PHONE</h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                +77 022 177 05 05
              </p>
            </div>
            <div className="mb-4">
              <h2 className=" mb-1">EMAIL</h2>
              <p className="text-xl md:text-2xl  font-semibold">
                sup.srbthemes@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h2 className=" font-semibold mb-1">OFFICE</h2>
            <p className="text-xl md:text-2xl  font-semibold">
              124 S Main St, Scottville, MI 49454, United States
            </p>
          </div>
        </div>

        <ContactUsForm />
      </div>
    </section>
  );
}
