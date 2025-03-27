import { ShineBorder } from "@/components/ui/shine-border"
import { Fingerprint, Key, Lock, ShieldCheck } from "lucide-react"

export function SecuritySection() {
  const securityFeatures = [
    {
      title: "Biometric Passkeys",
      description: "FIDO2/WebAuthn for secure, frictionless authentication",
      icon: <Fingerprint className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "One-Time Passwords",
      description: "Instant OTP via SMS or TOTP authentication apps",
      icon: <Key className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Encrypted Transaction PIN",
      description: "Robustly encrypted PIN for additional user safety",
      icon: <Lock className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Secure Authorization",
      description: "All transactions verified before Stellar blockchain submission",
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
    },
  ]

  return (
    <section id="security" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            Bank-Grade Security
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Numbers Pay employs multi-layer authentication and blockchain technology to ensure your transactions are
            always secure.
          </p>
        </div>

        <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-blue-900/10 to-green-900/10">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Multi-factor Authentication</h3>
              <div className="space-y-6">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-black/50 border border-white/10">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20 blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-4 border-white/10 flex items-center justify-center">
                    <div className="w-2/3 h-2/3 rounded-full border-4 border-white/20 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full border-4 border-white/30 flex items-center justify-center">
                        <ShieldCheck className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  )
}

