import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CTASection, PricingCards } from "@/components/sections";

const pricingPlans = [
  {
    name: "Starter",
    price: "PKR 500",
    period: "/ month",
    description: "Essential tools to begin your training with structure.",
    features: [
      "Basic workout plans",
      "Calorie tracking",
      "Progress logging",
      "Community access",
    ],
    cta: "Start free trial",
    highlighted: false,
    bestFor: "Beginners starting their fitness journey",
  },
  {
    name: "Pro",
    price: "PKR 1,000",
    period: "/ month",
    description: "Full AI coaching, advanced analytics, and competitive features.",
    features: [
      "AI-powered coaching",
      "Advanced analytics dashboard",
      "Leaderboard and challenges",
      "Recovery and sleep tracking",
      "Nutrition macro planning",
      "Priority support",
    ],
    cta: "Get started",
    highlighted: true,
    bestFor: "Serious athletes seeking performance optimization",
  },
  {
    name: "Elite",
    price: "PKR 2,500",
    period: "/ month",
    description: "Coach-led programming with direct access and custom periodization.",
    features: [
      "1-on-1 coach sessions",
      "Custom periodization",
      "Bi-weekly form reviews",
      "Advanced nutrition plans",
      "Exclusive content library",
      "All Pro features",
    ],
    cta: "Contact sales",
    highlighted: false,
    bestFor: "Competitive athletes and fitness professionals",
  },
];

const faqs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! All new users get a 14-day free trial with full access to Pro features. No credit card required.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, JazzCash, Easypaisa, and bank transfers for annual subscriptions.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Absolutely. You can cancel anytime from your account settings. You'll retain access until the end of your billing period.",
  },
  {
    question: "Do you offer team or gym discounts?",
    answer: "Yes, we offer bulk pricing for gyms, teams, and corporate wellness programs. Contact our sales team for custom quotes.",
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen animate-fade-in bg-[var(--background)] text-[var(--foreground)]">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] pt-24">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--foreground)]/[0.4]">
              Pricing
            </div>
            <h1 className="mt-4 animate-fade-up text-4xl font-bold leading-none tracking-tighter stagger-1 sm:text-5xl lg:text-6xl">
              Select your plan.
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-[var(--foreground)]/[0.5] stagger-2">
              Transparent pricing. No hidden fees. Cancel anytime. Start with a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingCards plans={pricingPlans} />

      {/* Comparison Table */}
      <section className="border-t border-[var(--border)] bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-4xl animate-fade-up">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter">
              Compare plans in detail
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--background)]">
              <table className="w-full text-base">
                <thead className="border-b border-[var(--border)] bg-[var(--muted)]">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-[var(--foreground)]">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-[var(--foreground)]">Starter</th>
                    <th className="px-6 py-4 text-center font-semibold text-[var(--foreground)]">Pro</th>
                    <th className="px-6 py-4 text-center font-semibold text-[var(--foreground)]">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {[
                    { feature: "Workout Plans", starter: "Basic", pro: "AI-Powered", elite: "Custom" },
                    { feature: "Calorie Tracking", starter: "✓", pro: "✓", elite: "✓" },
                    { feature: "Progress Analytics", starter: "Basic", pro: "Advanced", elite: "Advanced" },
                    { feature: "AI Coaching", starter: "—", pro: "✓", elite: "✓" },
                    { feature: "Leaderboard Access", starter: "—", pro: "✓", elite: "✓" },
                    { feature: "Recovery Tracking", starter: "—", pro: "✓", elite: "✓" },
                    { feature: "Nutrition Planning", starter: "—", pro: "Macro", elite: "Custom" },
                    { feature: "1-on-1 Coaching", starter: "—", pro: "—", elite: "✓" },
                    { feature: "Form Reviews", starter: "—", pro: "—", elite: "Bi-weekly" },
                    { feature: "Support", starter: "Community", pro: "Priority", elite: "Dedicated" },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-[var(--muted)]">
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]/[0.7]">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)]/[0.6]">{row.starter}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)]/[0.6]">{row.pro}</td>
                      <td className="px-6 py-4 text-center text-[var(--foreground)]/[0.6]">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              {faqs.map(({ question, answer }, index) => (
                <div
                  key={question}
                  className="animate-fade-up rounded-lg border border-[var(--border)] bg-white p-8"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <h3 className="mb-3 text-lg font-semibold text-[var(--foreground)]">{question}</h3>
                  <p className="text-base leading-7 text-[var(--foreground)]/[0.6]">{answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Still have questions?"
        subtitle="Our team is here to help you choose the perfect plan for your fitness goals."
        buttons={[
          { label: "Start free trial", href: "/signup" },
        ]}
      />

      <Footer />
    </main>
  );
}
