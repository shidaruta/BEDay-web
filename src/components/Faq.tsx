import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { IconChevronDown } from "@/components/Icons";

export const faqs = [
  {
    question: "When can we download BetterEveryday?",
    answer:
      "BetterEveryday is coming soon to iOS and Android. Follow us on Facebook, TikTok, Instagram, or YouTube to hear the moment it launches.",
  },
  {
    question: "Who is BetterEveryday for?",
    answer:
      "Families with children who want to build healthy routines together, and health-conscious adults who want to track their own reading, fitness, and diet.",
  },
  {
    question: "What does the AI Coach do?",
    answer:
      "It scores your day based on what you actually logged across Fitness, Diet, and Learning, then gives you personalized encouragement and suggestions.",
  },
  {
    question: "Do we have to compete with other people?",
    answer:
      "No. Family and friend leaderboards are kept separate, and competing with friends is opt-in — never on by default.",
  },
  {
    question: "Is it safe for kids?",
    answer:
      "Kids' accounts come with parental controls, and we never sell your family's data. Our full Privacy Policy and Data & AI Principles will be published before launch.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 pt-4">
      <SectionHeading eyebrow="Everything you need to know" title="Frequently asked questions" />

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 60}>
            <details className="group rounded-2xl bg-surface p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <IconChevronDown className="h-5 w-5 shrink-0 text-outline transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-muted">{faq.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
