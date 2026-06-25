"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-background rounded-2xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-dark mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1.5">
            YOUR NAME *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1.5">
            YOUR NUMBER *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Your phone number"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-1.5">
            MESSAGE
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
            placeholder="Your message"
          />
        </div>

        {status === "success" && (
          <p className="text-green-600 text-sm font-medium">Message sent successfully! We&rsquo;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-accent text-sm font-medium">Failed to send. Please try again or call us directly.</p>
        )}

        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-accent text-white py-3.5 rounded-full text-lg font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          whileHover={status === "loading" ? {} : { scale: 1.02, boxShadow: "0 12px 24px -8px rgba(226, 2, 16, 0.3)" }}
          whileTap={status === "loading" ? {} : { scale: 0.97 }}
        >
          {status === "loading" ? "Sending..." : "BOOK AN APPOINTMENT"}
        </motion.button>
      </form>
    </div>
  );
}
