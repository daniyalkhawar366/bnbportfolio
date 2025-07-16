"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import Link from "next/link";

interface StatusType {
  status: boolean;
  message: string;
}

export default function ContactPage() {
  const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const NameRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!NameRef.current || !EmailRef.current || !MessageRef.current) return;
    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const message = MessageRef.current.value;
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("🙄 Invalid Email ID!");
      }
      setIsLoading(true);
      const mailRes = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      if (mailRes.status !== 200) {
        throw new Error("😵 Message not Sent");
      }
      setMailStatus({ status: true, message: "👍 Message Sent!" });
      setIsLoading(false);
      NameRef.current.value = "";
      EmailRef.current.value = "";
      MessageRef.current.value = "";
    } catch (error: any) {
      setMailStatus({ status: false, message: error.message });
      setIsLoading(false);
    } finally {
      setTimeout(() => {
        setMailStatus({ status: false, message: "" });
      }, 3000);
    }
  };

  return (
    <main className="relative min-h-screen py-10 px-4 overflow-x-hidden">
      <Bounded as="section" className="max-w-2xl mx-auto">
        <Heading size="xl" className="mb-8 text-center" as="h1">
          Contact Me
        </Heading>
        <form onSubmit={handleFormSubmit} className="rounded-md w-full px-4 py-6 bg-slate-800/60 outline outline-1 outline-white/20 flex flex-col gap-4">
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="text-white">Name</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              className="w-full p-2 rounded-md border-none outline-none bg-slate-900 text-slate-100"
              autoComplete="name"
              required
              ref={NameRef}
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-white">Email</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full p-2 rounded-md border-none outline-none bg-slate-900 text-slate-100"
              autoComplete="email"
              required
              ref={EmailRef}
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-1">
            <span className="text-white">Message</span>
            <textarea
              rows={5}
              id="message"
              name="message"
              placeholder="Enter your Message"
              className="w-full p-2 rounded-md border-none outline-none bg-slate-900 text-slate-100 resize-none"
              ref={MessageRef}
            />
          </label>
          <div className="flex items-center gap-4 mt-2">
            <button
              className="flex items-center gap-2 border-none bg-yellow-300 text-slate-900 font-bold outline outline-1 outline-white/20 py-2 px-8 rounded-md transition-transform hover:scale-105"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span>Sending</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                </>
              ) : (
                <>
                  <span>Submit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                </>
              )}
            </button>
            <span className={mailStatus.status ? "text-green-400" : "text-red-400"}>{mailStatus.message}</span>
          </div>
        </form>
        <div className="mt-8 flex justify-center">
          <Button linkField={{ url: "https://calendly.com/daniyalkhawar3/free-strategy-call", link_type: "Web", target: "_blank" }} label="Book a Free Strategy Call" />
        </div>
      </Bounded>
    </main>
  );
} 