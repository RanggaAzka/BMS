import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { n: "01", title: "Konsultasi & Survey", desc: "Pahami kebutuhan Anda, ukur area, dan analisis permukaan." },
  { n: "02", title: "Penawaran Transparan", desc: "Rincian material, biaya pemasangan, dan timeline jelas." },
  { n: "03", title: "Persiapan & Leveling", desc: "Perataan dasar, perbaikan retak, dan persiapan drainase." },
  { n: "04", title: "Pemasangan Karpet", desc: "Pemasangan presisi, sambungan rapat, marking sesuai regulasi." },
  { n: "05", title: "QC & Serah Terima", desc: "Pemeriksaan menyeluruh, panduan perawatan." },
]

export function ProcessSection() {
  return (
    <section id="proses" className="border-t bg-background" aria-labelledby="proses-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="proses-title" className="text-balance text-2xl font-semibold md:text-3xl">
          Proses Pengerjaan
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Alur kerja yang rapi dan aman memastikan hasil akhir optimal.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-base">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-medium">
                    {s.n}
                  </span>
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
