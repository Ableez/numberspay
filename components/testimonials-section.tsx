import { ShineBorder } from "@/components/ui/shine-border"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "Numbers Pay has transformed how I send money to my suppliers. No more waiting days for international transfers or paying ridiculous fees.",
      rating: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Michael Okonkwo",
      role: "Freelance Developer",
      content:
        "As someone working with international clients, receiving payments used to be a nightmare. With Numbers Pay, I just share my phone number and get paid instantly.",
      rating: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Priya Sharma",
      role: "Student",
      content:
        "I regularly send money to my family back home. Numbers Pay has made it so simple and affordable that I no longer worry about transfer fees eating into my support.",
      rating: 5,
      image: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have simplified their payment experience with Numbers Pay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <ShineBorder key={testimonial.name} borderClassName="border border-white/10 rounded-xl overflow-hidden">
              <div className="p-6 bg-black">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </section>
  )
}

