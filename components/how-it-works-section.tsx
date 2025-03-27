import { GradientCard } from "@/components/ui/gradient-card"
import { Smartphone, Send, Bell, ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      title: "Sign Up Easily",
      description: "Register quickly using your phone number, bypassing traditional wallet complexities.",
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Send Effortlessly",
      description:
        "Select recipient via phone contacts, enter an amount, confirm using Passkey, OTP, or PIN—fast and intuitive.",
      icon: <Send className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Receive Instantly",
      description:
        "Get immediate notifications and easily hold, forward, or withdraw funds via trusted partner services.",
      icon: <Bell className="w-10 h-10 text-purple-500" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers Pay simplifies payments by eliminating complicated wallet addresses and making transactions as easy
            as sending a text message.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <GradientCard key={step.title} className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
              )}
            </GradientCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Powered by Stellar blockchain technology for secure, near-instant transactions at negligible cost.
          </p>
          <div className="inline-block p-4 rounded-xl bg-white/5 border border-white/10">
            <img src="/placeholder.svg?height=40&width=120" alt="Stellar Blockchain" className="h-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

