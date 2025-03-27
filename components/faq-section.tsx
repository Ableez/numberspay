import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How does Numbers Pay work?",
      answer:
        "Numbers Pay maps your phone number to a Stellar blockchain wallet using federated addresses. This allows you to send and receive payments using just a phone number, without needing to know complicated blockchain addresses.",
    },
    {
      question: "Is Numbers Pay secure?",
      answer:
        "Yes, Numbers Pay employs multi-layer security including biometric passkeys (FIDO2/WebAuthn), one-time passwords, and encrypted transaction PINs. All transactions are securely authorized before submission to the Stellar blockchain.",
    },
    {
      question: "What are the fees for using Numbers Pay?",
      answer:
        "Numbers Pay leverages the Stellar blockchain, which has minimal transaction fees (typically less than $0.001 per transaction), making it significantly more affordable than traditional banking or other payment services, especially for international transfers.",
    },
    {
      question: "How fast are transactions processed?",
      answer:
        "Transactions on Numbers Pay are near-instant, typically settling within 3-5 seconds, regardless of whether they're domestic or international transfers.",
    },
    {
      question: "Which countries does Numbers Pay support?",
      answer:
        "We're initially focusing on Nigeria, leveraging the regulated Naira stablecoin (cNGN), but we're rapidly expanding to other countries. Our platform is designed to work globally.",
    },
    {
      question: "Do I need to understand cryptocurrency to use Numbers Pay?",
      answer:
        "Not at all! Numbers Pay is designed to hide all the complexity of blockchain technology. You simply use your phone number to send and receive money, just like you would with a traditional payment app.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">Everything you need to know about Numbers Pay and how it works.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger className="text-left text-white hover:text-blue-400">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

