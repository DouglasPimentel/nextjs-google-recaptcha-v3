import React from "react";

import ContactForm from "#/components/contact-form";

export default function WrapperContactForm(): React.JSX.Element {
  return (
    <section className="w-full md:max-w-xl mt-8 md:mt-12 md:mx-auto space-y-8">
      <div className="w-full">
        <h2 className="text-xl font-bold">Contact Us</h2>
      </div>
      <ContactForm />
    </section>
  );
}
