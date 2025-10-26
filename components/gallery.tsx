import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Gallery() {
  const projects = [
    { title: "Futsal Indoor", img: "/lapangan-futsal-indoor-karpet.jpg" },
    { title: "Lapangan Serbaguna", img: "/multi-purpose-hall-floor.jpg" },
    { title: "Badminton Court", img: "/badminton-court-carpet.jpg" },
    { title: "Outdoor Track", img: "/outdoor-sports-track.jpg" },
    { title: "Bola Basket Indoor", img: "/indoor-basketball-court.jpg" },
    { title: "Area Sekolah", img: "/school-sports-floor.jpg" },
  ]

  return (
    <section id="proyek" className="border-t bg-card" aria-labelledby="galeri-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="galeri-title" className="animate-fade-in text-balance text-2xl font-semibold md:text-3xl">
              Proyek Terbaru
            </h2>
            <p className="animate-slide-up mt-2 max-w-2xl text-muted-foreground">
              Cuplikan hasil pekerjaan kami di berbagai lokasi dan kebutuhan.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Card
              key={p.title}
              className={`animate-scale-in overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 ${
                idx === 0
                  ? "animate-delay-100"
                  : idx === 1
                    ? "animate-delay-200"
                    : idx === 2
                      ? "animate-delay-300"
                      : idx === 3
                        ? "animate-delay-400"
                        : ""
              }`}
            >
              <img
                src={p.img || "/placeholder.svg"}
                alt={p.title}
                className="h-48 w-full object-cover transition-all duration-300 ease-out hover:scale-110"
              />
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Pemasangan rapi, cepat, dan memenuhi standar keselamatan.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
