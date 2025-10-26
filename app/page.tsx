import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { ProcessSection } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
