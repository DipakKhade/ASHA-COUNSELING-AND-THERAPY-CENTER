import CtaSection from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Asha Counseling And Therapy Center",
  description:
    "Contact Asha Counseling And Therapy Center for professional mental health support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-warm max-w-3xl mx-auto">
              Strengthening mental and emotional health through professional
              counseling. Have questions or need more information? Contact me to
              begin your journey toward a healthy, balanced mental and emotional
              life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:917888000986"
                    className="text-gray-warm hover:text-primary transition-colors"
                  >
                    91-7888000986
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:ashacounsellingandtherapycenter@gmail.com"
                    className="text-gray-warm hover:text-primary transition-colors break-all"
                  >
                    ashacounsellingandtherapycenter@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">
                    Address
                  </h3>
                  <p className="text-gray-warm leading-relaxed">
                    Office No.2, 1st Floor, Shalimar Corner, Above Hotel Leelas,
                    Near Court, Baramati, Pune. 413102
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://forms.gle/Xb9czAvvSkdRkN8V7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all shadow-lg"
                >
                  Start Your Healing Journey
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-dark mb-6">
                Send a Message
              </h2>
              <form
                action="https://forms.gle/Xb9czAvvSkdRkN8V7"
                method="GET"
                target="_blank"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    YOUR NUMBER *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark mb-1.5"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3.5 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all"
                >
                  BOOK AN APPOINTMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
