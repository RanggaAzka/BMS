import { getPortfolioItems } from "@/lib/kv"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const dynamic = "force-dynamic"

export default async function PortfolioPage() {
  const items = await getPortfolioItems()

  return (
    <main className="container mx-auto px-4 py-10">
      <section className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-pretty">Portofolio Pemasangan</h1>
        <p className="text-muted-foreground mt-2">
          Dokumentasi proyek pemasangan karpet lapangan yang telah kami kerjakan.
        </p>
      </section>

       <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            ← Kembali ke Beranda
          </Button>
        </Link>

      {items.length === 0 ? (
        <div className="rounded-lg border p-8 text-center">
          <p className="text-muted-foreground">Belum ada portofolio. Silakan tambahkan dari halaman admin.</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card key={it.id} className="overflow-hidden">
              <div className="relative w-full h-48">
                <Image
                  src={
                    it.imageUrl && it.imageUrl.trim()
                      ? it.imageUrl
                      : "lapangan-futsal-indoor-karpet.jpg"
                  }
                  alt={`Portofolio ${it.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-balance">{it.title}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2">
                  {it.fieldType ? <Badge variant="secondary">{it.fieldType}</Badge> : null}
                  {it.size ? <Badge variant="outline">{it.size}</Badge> : null}
                  {it.date ? <span className="text-xs text-muted-foreground">{it.date}</span> : null}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {(it.client || it.location) && (
                  <p className="text-sm text-muted-foreground">
                    {it.client ? `Klien: ${it.client}` : ""} {it.client && it.location ? " • " : ""}
                    {it.location ? `Lokasi: ${it.location}` : ""}
                  </p>
                )}
                {it.description && <p className="text-sm">{it.description}</p>}
                {it.highlights && it.highlights.length > 0 && (
                  <ul className="list-disc pl-5 text-sm">
                    {it.highlights.slice(0, 4).map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </main>
  )
}
