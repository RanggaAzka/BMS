import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  const data = [
    {
      name: "Andi – Pengelola GOR",
      quote: "Tim sangat profesional. Pemasangan cepat, hasil rapi, dan lapangan jadi lebih nyaman digunakan.",
    },
    {
      name: "SMA Nusantara",
      quote: "Prosesnya jelas dari awal. Garis lapangan akurat dan permukaan tidak licin. Sangat direkomendasikan!",
    },
    {
      name: "Klub Futsal Kota",
      quote:
        "Kualitas material bagus, after-sales responsif. Kami puas dengan performa karpet saat latihan & pertandingan.",
    },
  ]

  return (
    <section id="testimoni" className="border-t bg-card" aria-labelledby="testimoni-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="testimoni-title" className="animate-fade-in text-balance text-2xl font-semibold md:text-3xl">
          Apa Kata Klien Kami
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((t, idx) => (
            <Card
              key={t.name}
              className={`animate-slide-up h-full transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 ${
                idx === 0 ? "animate-delay-100" : idx === 1 ? "animate-delay-200" : "animate-delay-300"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-base">{t.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">"{t.quote}"</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
