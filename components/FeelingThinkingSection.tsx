import AnimateOnScroll from "./AnimateOnScroll";

interface FeelingThinkingSectionProps {
  title: string;
  subtitle: string;
  feelings: string[];
  thoughts: string[];
}

export default function FeelingThinkingSection({
  title,
  subtitle,
  feelings,
  thoughts,
}: FeelingThinkingSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-warm text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <div className="bg-primary-light/50 rounded-2xl p-8 border border-primary/10 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <span className="text-primary">🔍</span> You may be feeling&hellip;
              </h3>
              <ul className="space-y-3 animate-stagger">
                {feelings.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-warm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-accent-light/50 rounded-2xl p-8 border border-accent/10 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <span className="text-accent">💭</span> You may be thinking&hellip;
              </h3>
              <ul className="space-y-3 animate-stagger">
                {thoughts.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-warm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-accent mt-1.5 flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
