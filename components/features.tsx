import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  const fitur = [
    {
      title: "Material Berkualitas",
      desc: "Pilihan karpet standar internasional, anti slip, aman untuk atlet & pengguna.",
    },
    {
      title: "Presisi & Rapi",
      desc: "Pengukuran teliti, sambungan halus, garis lapangan akurat sesuai regulasi.",
    },
    {
      title: "Tahan Lama & Mudah Perawatan",
      desc: "Ketahanan terhadap abrasi & cuaca, panduan perawatan agar awet.",
    },
  ]

  return (
    <section id="layanan" className="border-t bg-background" aria-labelledby="fitur-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="fitur-title" className="animate-fade-in text-balance text-2xl font-semibold md:text-3xl">
          Keunggulan Layanan Kami
        </h2>
        <p className="animate-slide-up mt-2 max-w-2xl text-muted-foreground">
          Fokus pada kualitas, keselamatan, dan ketepatan waktu untuk hasil yang dapat diandalkan.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fitur.map((f, idx) => (
            <Card
              key={f.title}
              className={`animate-slide-up h-full transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 ${
                idx === 0
                  ? "animate-delay-100"
                  : idx === 1
                    ? "animate-delay-200"
                    : idx === 2
                      ? "animate-delay-300"
                      : "animate-delay-400"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
