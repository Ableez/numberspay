import { GradientCard } from "@/components/ui/gradient-card"
import { Globe, Clock, DollarSign, Shield, Smartphone, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Global Payments",
      description: "Send money worldwide using just a phone number, no complicated addresses needed.",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Near-Instant Transfers",
      description: "Transactions settle in seconds, not days, powered by Stellar blockchain.",
      icon: <Clock className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Minimal Fees",
      description:
        "Stellar's minimal transaction fees significantly reduce costs, especially for international transfers.",
      icon: <DollarSign className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Multi-Layer Security",
      description: "Advanced authentication with biometric passkeys, OTP, and encrypted transaction PINs.",
      icon: <Shield className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Intuitive Experience",
      description: "No complicated crypto jargon—just familiar, user-friendly phone numbers.",
      icon: <Smartphone className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Stellar Integration",
      description: "Exceptional speed, cost-efficiency, scalability, and compliance-friendly infrastructure.",
      icon: <Zap className="w-10 h-10 text-blue-400" />,
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Why Choose Numbers Pay
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform combines the power of blockchain technology with the simplicity of phone numbers to create a
            seamless payment experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <GradientCard key={feature.title}>
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}

