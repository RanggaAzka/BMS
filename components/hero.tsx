import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-card" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <h1 id="hero-title" className="animate-fade-in text-balance text-3xl font-bold leading-tight md:text-5xl">
            Pemasangan Karpet Lapangan Profesional & Tahan Lama
          </h1>
          <p className="animate-slide-up mt-4 text-muted-foreground md:text-lg">
            Dari futsal, badminton, hingga multi-purpose hall. Tim bersertifikat, material berkualitas, hasil rapi, dan
            bergaransi.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
            <li className="animate-slide-up animate-delay-100 rounded-md border bg-background px-3 py-2 transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground">
              • Pekerja Berpengalaman 
            </li>
            <li className="animate-slide-up animate-delay-300 rounded-md border bg-background px-3 py-2 transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground">
              • Gratis Survey*
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#kontak">
              <Button size="lg" className="transition-all duration-300 ease-out hover:shadow-lg hover:scale-105">
                Minta Penawaran
              </Button>
            </a>
            <a href="#proyek">
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 bg-transparent"
              >
                Lihat Proyek
              </Button>
            </a>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">*Area tertentu</p>
        </div>

        <div className="relative">
          <img
            alt="Karpet lapangan futsal terpasang rapi"
            className="animate-scale-in h-auto w-full rounded-lg border transition-all duration-300 ease-out hover:shadow-xl"
            src="/karpet-lapangan-futsal-indoor.jpg"
          />
        </div>
      </div>
    </section>
  )
}
