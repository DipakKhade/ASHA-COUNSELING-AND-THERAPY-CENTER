import Image from "next/image";
import FeelingThinkingSection from "@/components/FeelingThinkingSection";
import CtaSection from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Asha Counseling And Therapy Center",
  description:
    "Professional counseling services including hypnotherapy, mental health counseling, and marriage counselling.",
};

const services = [
  {
    id: "trust-issues",
    title: "TRUST ISSUES",
    subtitle:
      "Do you feel like you want to trust someone\u2026 but just can't? There's a constant fear inside that you might get hurt again.",
    description:
      "Overthinking small things, feeling doubtful, or becoming emotionally distant\u2014these can be signs of trust issues. You are not alone. With the right support, you can learn to trust again and feel emotionally safe.",
    feelings: [
      "Everything seems fine, yet something feels wrong",
      "You keep doubting without a strong reason",
      "You feel scared to open up emotionally",
      "Small things keep repeating in your mind",
      "You want to trust\u2026 but can't control your thoughts",
      "You feel insecure without any clear reason",
    ],
    thoughts: [
      '"I don\u2019t know if they are telling me the truth\u2026"',
      '"If I trust too much, I will get hurt"',
      '"Maybe I\u2019m not enough"',
      '"If I get attached, I\u2019ll feel pain"',
      '"I have to stay strong\u2026 I shouldn\u2019t depend on anyone"',
      '"Why can\u2019t I just relax?"',
    ],
  },
  {
    id: "fear-of-losing",
    title: "FEAR OF LOSING",
    subtitle:
      "Do you ever feel so afraid of losing someone you love that it makes you anxious? Even when things are going fine, there's still a fear inside.",
    description:
      "This fear can lead to overthinking, emotional dependency, and feeling unstable at times. You are not alone. With the right guidance, you can feel secure and build healthy emotional connections.",
    feelings: [
      "You need constant reassurance",
      "Even small issues make you feel the relationship might end",
      "You feel overly attached or dependent",
      "You're afraid of being alone",
      "Your mood depends on the other person's behavior",
      "You struggle to control overthinking",
    ],
    thoughts: [
      '"What if they leave me\u2026"',
      '"What will I do without them?"',
      '"Maybe they will choose someone else\u2026"',
      '"I can\u2019t afford to lose them at any cost"',
      '"I\u2019m not enough, that\u2019s why they might leave"',
      '"I have to hold on to them somehow"',
    ],
  },
  {
    id: "insomnia",
    title: "INSOMNIA",
    subtitle:
      "Do you feel tired at night, yet unable to fall asleep? Or you fall asleep, but keep waking up again and again?",
    description:
      "When your mind doesn't slow down and thoughts keep running, your body may feel exhausted, but your mind struggles to rest. You are not alone. With the right support, you can experience peaceful and restful sleep again.",
    feelings: [
      "You can't fall asleep even after going to bed",
      "You wake up multiple times during the night",
      "You don't feel fresh even after waking up",
      "Your mind feels overactive",
      "Your body is tired, but your mind is not calm",
      "You feel frustration or anxiety about sleep",
    ],
    thoughts: [
      '"Why am I not able to sleep?"',
      '"How will I manage the whole day tomorrow?"',
      '"What if I don\u2019t get enough sleep?"',
      '"Everyone else is sleeping\u2026 why can\u2019t I?"',
      '"Why won\u2019t my mind just switch off?"',
      '"When will my sleep become normal again?"',
    ],
  },
  {
    id: "work-life-balance",
    title: "WORK LIFE BALANCE",
    subtitle:
      "Do you feel like balancing work and personal life has become difficult? Even after a long day of work, your mind doesn't relax.",
    description:
      "When life becomes limited to responsibilities, feeling stressed, irritated, and emotionally exhausted is natural. You are not alone. With the right guidance, you can restore balance, clarity, and inner peace.",
    feelings: [
      "Your mind doesn't switch off even after work",
      "It feels difficult to take out time for yourself",
      "You feel constant stress or pressure",
      "You're unable to give enough time to family or relationships",
      "You feel easily tired or burned out",
      'You feel guilty\u2014"I\u2019m not enough in any area of life"',
    ],
    thoughts: [
      '"There\u2019s so much work, I don\u2019t even have time to take a break\u2026"',
      '"If I slow down, I\u2019ll fall behind"',
      '"Why can\u2019t I manage both work and life properly?"',
      '"I feel guilty when I take time for myself"',
      '"When will life feel a little easier?"',
      '"Why do I feel tired all the time?"',
    ],
  },
];

const serviceImages: Record<string, string> = {
  "trust-issues": "/trust-issues.png",
  "fear-of-losing":
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  insomnia:
    "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80",
  "work-life-balance":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Services
            </h1>
            <p className="text-xl text-gray-warm max-w-3xl mx-auto">
              Professional counseling services tailored to your unique needs.
            </p>
          </div>

          {services.map((service, index) => (
            <div key={service.id} id={service.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-warm leading-relaxed mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-lg text-gray-warm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    href="https://api.whatsapp.com/send/?phone=917888000986&text=Hii&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all"
                  >
                    Book An Appointment
                  </a>
                </div>
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={serviceImages[service.id]}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <FeelingThinkingSection
                title={service.title}
                subtitle={service.description}
                feelings={service.feelings}
                thoughts={service.thoughts}
              />

              {index < services.length - 1 && (
                <div className="border-t border-gray-100 my-8" />
              )}
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
