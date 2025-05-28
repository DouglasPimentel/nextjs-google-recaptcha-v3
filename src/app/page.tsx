import React from "react";

import { Container } from "#/components/ui/container";
import WrapperContactForm from "#/components/wrapper-contact-form";

export default function Home(): React.JSX.Element {
  return (
    <main className="py-5">
      <Container>
        <section className="w-full mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Example of Google reCAPTCHA v3 Integration with Next.js
          </h1>
          <WrapperContactForm />
        </section>
      </Container>
    </main>
  );
}
