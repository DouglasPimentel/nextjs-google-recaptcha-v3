import React from "react";
import Link from "next/link";

import { FormGroup } from "#/components/ui/form-group";
import { Label } from "#/components/ui/label";
import { Input } from "#/components/ui/input";
import { Textarea } from "#/components/ui/textarea";
import { Button } from "#/components/ui/button";

function FieldRequired(): React.JSX.Element {
  return <span className="text-red-600">*</span>;
}

export default function ContactForm(): React.JSX.Element {
  return (
    <form id="contact-form" className="space-y-5">
      <FormGroup>
        <Label htmlFor="name">
          Name
          <FieldRequired />
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">
          Email
          <FieldRequired />
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="subject">
          Subject
          <FieldRequired />
        </Label>
        <Input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="messsge" placeholder="Your message" />
      </FormGroup>
      <div className="w-full">
        <p className="text-sm">
          By submitting this form, you confirm that you agree to our{" "}
          <Link className="font-bold hover:underline" href="/" target="_blank">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link className="font-bold hover:underline" href="/" target="_blank">
            Privacy Policy
          </Link>
          , and authorize the processing of your data as described in these
          documents.
        </p>
      </div>
      <div>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
