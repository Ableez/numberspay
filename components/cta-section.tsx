import { Button } from "@/components/ui/button"
import { ShineBorder } from "@/components/ui/shine-border"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <ShineBorder borderClassName="border border-white/10 rounded-xl overflow-hidden">
          <div className="p-8 md:p-12 bg-gradient-to-br from-blue-900/20 to-green-900/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Payments?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already enjoying near-instant, low-cost payments using just phone numbers.
              No complicated wallet addresses, no high fees, no delays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
              >
                Download App
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  )
}

