import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Send Money Using Just
            <br />
            Phone Numbers
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Instantly send and receive payments worldwide using just phone numbers—no banks, no lengthy addresses,
            powered securely and affordably by the Stellar blockchain.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10">
              <Play className="w-4 h-4" />
              How It Works
            </Button>
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Get Started
            </Button>
          </div>
        </div>

        <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl w-[90%] h-[70%] flex">
                <div className="flex-1 pr-2">
                  <div className="w-full h-full bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="w-[280px] h-[560px] bg-black rounded-3xl border-4 border-gray-800 overflow-hidden">
                      <div className="h-12 bg-gray-900 flex items-center justify-center">
                        <div className="w-32 h-6 rounded-full bg-gray-800"></div>
                      </div>
                      <div className="p-4 bg-gradient-to-b from-blue-900/30 to-green-900/30 h-full">
                        <div className="mb-6">
                          <div className="text-xl font-bold text-white mb-1">Send Money</div>
                          <div className="text-sm text-gray-400">Enter phone number to send money</div>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 mb-4">
                          <div className="text-sm text-gray-400 mb-2">Recipient</div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                            <div>
                              <div className="text-white">+234 801 234 5678</div>
                              <div className="text-xs text-gray-400">John Doe</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-400 mb-2">Amount</div>
                          <div className="text-2xl font-bold text-white">$100.00</div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600">
                          Send Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 pl-2">
                  <div className="w-full h-full bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="w-[280px] h-[560px] bg-black rounded-3xl border-4 border-gray-800 overflow-hidden">
                      <div className="h-12 bg-gray-900 flex items-center justify-center">
                        <div className="w-32 h-6 rounded-full bg-gray-800"></div>
                      </div>
                      <div className="p-4 bg-gradient-to-b from-blue-900/30 to-green-900/30 h-full">
                        <div className="mb-6">
                          <div className="text-xl font-bold text-white mb-1">Transaction Complete</div>
                          <div className="text-sm text-gray-400">Money sent successfully</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">$100.00</div>
                          <div className="text-sm text-gray-400">Sent to John Doe</div>
                        </div>
                        <div className="bg-black/40 rounded-lg p-4 mb-4">
                          <div className="flex justify-between mb-2">
                            <div className="text-sm text-gray-400">Transaction ID</div>
                            <div className="text-sm text-gray-300">NP78901234</div>
                          </div>
                          <div className="flex justify-between mb-2">
                            <div className="text-sm text-gray-400">Date & Time</div>
                            <div className="text-sm text-gray-300">Mar 23, 2025 13:45</div>
                          </div>
                          <div className="flex justify-between">
                            <div className="text-sm text-gray-400">Fee</div>
                            <div className="text-sm text-gray-300">$0.001</div>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full border-white/10">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ShineBorder>
      </ShineBorder>
    </section>
  )
}

