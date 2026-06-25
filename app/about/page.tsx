"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CtaSection from "@/components/CtaSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const stats = [
  {
    value: "92%",
    label: "Happiness Rate",
    description:
      "My clients often report feeling more balanced, resilient, and positive after working with me.",
  },
  {
    value: "88%",
    label: "Success in Building Healthy Mental and Emotional Habits",
    description:
      "Clients are able to develop and maintain healthy mental and emotional habits over the long term.",
  },
  {
    value: "82%",
    label: "Improved Understanding of Thoughts and Emotions",
    description:
      "Clients leave with a deeper understanding of themselves and practical strategies to navigate life's challenges.",
  },
];

export default function AboutPage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
                About
              </h1>
              <p className="text-xl text-gray-warm max-w-3xl mx-auto">
                Taking an individualized, root-cause approach to mental and
                emotional well-being.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimateOnScroll>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                Meet Your Therapist
              </p>
              <p className="text-lg text-gray-warm leading-relaxed mb-6">
                I help my clients develop healthy coping skills, improve
                emotional well-being, and discover strategies that work best for
                them.
              </p>
              <p className="text-lg text-gray-warm leading-relaxed">
                I&rsquo;m Poonam Gupta, a dedicated Psychologist and Counselor
                with over 5 years of experience helping individuals improve
                their mental and emotional well-being. I support clients in
                navigating challenges such as stress, anxiety, emotional
                difficulties, and life transitions through professional
                counseling. My journey into psychology began with a deep
                interest in understanding the human mind and supporting personal
                growth. This passion drives me to help others find clarity,
                balance, and a healthier path in life.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="scaleIn">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/poonam-gupta.jpg"
                  alt="Poonam Gupta - Psychologist and Counselor"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                Supporting you in achieving and maintaining a healthy, balanced
                mental and emotional life.
              </h2>
              <p className="text-lg text-gray-warm max-w-3xl mx-auto">
                Supporting you in achieving and maintaining a healthy, balanced
                mental and emotional life is at the heart of my work. With over 5
                years of experience as a psychologist and counselor, I provide
                compassionate, evidence-based support tailored to each
                individual&rsquo;s needs. My goal is to help you build resilience,
                clarity, and emotional well-being for lasting personal growth.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, i) => (
              <AnimateOnScroll key={stat.label} delay={i * 0.1}>
                <motion.div
                  className="bg-background rounded-2xl p-8 text-center border border-gray-100"
                  whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`text-4xl sm:text-5xl font-bold mb-3 ${i === 0 ? "text-accent" : "text-primary"}`}>
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-warm leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <motion.div
              className="grid lg:grid-cols-2 gap-10 items-center bg-primary-light/50 rounded-3xl p-8 sm:p-12"
              whileHover={{ boxShadow: "0 12px 24px -8px rgba(2, 158, 227, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                  Why work with me for your mental and emotional well-being
                </h2>
                <p className="text-lg text-gray-warm mb-8 leading-relaxed">
                  Choosing me as your psychologist means choosing a partner
                  dedicated to your mental and emotional well-being. With over 5
                  years of experience, I provide evidence-based, compassionate, and
                  personalized support. My approach is non-judgmental and focused on
                  helping you develop coping strategies and solutions that work best
                  for your unique needs.
                </p>
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=917888000986&text=Hii&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
                  whileHover={{ scale: 1.04, boxShadow: "0 20px 25px -5px rgba(226, 2, 16, 0.3)" }}
                  whileTap={{ scale: 0.96 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book an Appointment
                </motion.a>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/therapy-session.jpg"
                  alt="Therapy session"
                  width={384}
                  height={512}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </section>

      <CtaSection />
    </motion.div>
  );
}
