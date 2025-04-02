import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  // FAQs reflecting the pre-launch concept phase
  const faqs = [
    {
      question: "What's the basic idea behind Numbers Pay?",
      answer: "We plan to link phone numbers to simple Stellar wallets, making payments as easy as sending a text.",
    },
    {
      question: "How are you approaching security?",
      answer: "Security is a top priority. We're designing the system with robust, multi-layered protection from the ground up.",
    },
    {
      question: "What will the fees be like?",
      answer: "We aim for extremely low transaction fees by leveraging the efficiency of the Stellar network.",
    },
    {
      question: "How fast do you expect transactions to be?",
      answer: "The goal is near-instant payments, settling in just a few seconds, powered by Stellar.",
    },
    {
      question: "Where do you plan to launch first?",
      answer: "We're initially focusing on key markets like Nigeria, with a vision for future global expansion.",
    },
    {
      question: "Will users need to understand blockchain?",
      answer: "No, the aim is to provide a simple, user-friendly experience that hides the underlying blockchain complexity.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">Answering your questions about the Numbers Pay concept.</p>
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
