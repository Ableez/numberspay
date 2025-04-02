import { ShineBorder } from "@/components/ui/shine-border"
import { Star } from "lucide-react" // Note: Ensure 'lucide-react' is installed and configured
import React from "react" // Import React for JSX types

// Define a type for testimonials for better type safety
interface Testimonial {
  name: string
  role: string
  content: string
  rating: number // Keep rating as aspirational/target
  image?: string // Optional image
}

export const TestimonialsSection: React.FC = () => {
  // Testimonials reflecting anticipated user value during the ideation phase
  const testimonials: Testimonial[] = [
    {
      name: "A Small Business Owner",
      role: "Future User",
      content:
        "Imagine sending supplier payments instantly, globally, without the high fees. That's the efficiency we're aiming for.",
      rating: 5, // Aspirational rating
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "A Freelancer",
      role: "Future User",
      content:
        "Getting paid by international clients could be as simple as sharing a phone number. We envision seamless, instant payments.",
      rating: 5, // Aspirational rating
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      name: "Someone Supporting Family",
      role: "Future User",
      content:
        "What if sending money home was effortless and affordable? We're building a future where distance doesn't mean high costs.",
      rating: 5, // Aspirational rating
      image: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            The Vision for Users
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's a glimpse into the simple, borderless payment experience we're building with Numbers Pay.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            // Key should be on the outermost element in the map function
            <ShineBorder key={testimonial.name} borderClassName="border border-white/10 rounded-xl overflow-hidden">
              <div className="p-6 bg-black h-full flex flex-col"> {/* Ensure consistent card height */}
                <div className="flex gap-1 mb-4">
                  {/* Render stars based on aspirational rating */}
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  {/* Optionally render empty stars if rating < 5 */}
                  {Array(5 - testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={`empty-${i}`} className="w-4 h-4 text-gray-600" /> // Example empty star
                    ))}
                </div>
                <p className="text-gray-300 mb-6 flex-grow">"{testimonial.content}"</p> {/* Allow text to grow */}
                <div className="flex items-center gap-4 mt-auto"> {/* Push profile to bottom */}
                  <img
                    src={testimonial.image || "/placeholder.svg"} // Use placeholder if no image
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover" // Added object-cover
                    width={48} // Explicit width
                    height={48} // Explicit height
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
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
