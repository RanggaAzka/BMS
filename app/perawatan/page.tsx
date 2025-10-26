import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export const metadata = {
  title: "Cara Merawat Rumput/Karpet Lapangan | KarpetLapanganPro",
  description:
    "Panduan lengkap perawatan karpet/rubber/vinyl/PU untuk lapangan agar awet, aman, dan tampil profesional.",
}

export default function MaintenancePage() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section className="border-b bg-background" aria-labelledby="perawatan-hero-title">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 id="perawatan-hero-title" className="text-balance text-3xl font-semibold md:text-4xl">
              Cara Merawat Rumput/Karpet Lapangan
            </h1>
            <p className="mt-3 text-muted-foreground">
              Ikuti panduan praktis ini untuk menjaga kenyamanan bermain, keamanan pijakan, dan umur pakai karpet
              lapangan Anda—baik untuk futsal, badminton, basket indoor, maupun area serbaguna.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/#kontak"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:opacity-90"
              >
                Konsultasi Gratis
              </Link>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 transition-colors hover:bg-accent"
              >
                Lihat FAQ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rutinitas */}
      <section className="border-b" aria-labelledby="rutinitas-title">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 id="rutinitas-title" className="text-2xl font-semibold md:text-3xl">
            Rutinitas Perawatan
          </h2>
          <p className="mt-2 max-w-prose text-muted-foreground">
            Terapkan rutinitas sederhana ini untuk menjaga performa dan tampilan permukaan.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Harian</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Sapu lembut atau vacuum permukaan dari debu dan pasir.</li>
                  <li>Lap area yang basah atau tumpah secepatnya.</li>
                  <li>Periksa sambungan/garis marking untuk mencegah kelonggaran.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mingguan</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Pembersihan menyeluruh dengan alat vakum/penyapu khusus karpet.</li>
                  <li>Cek titik aus di area intensitas tinggi (dekat gawang/garis servis).</li>
                  <li>Pastikan drainase (untuk outdoor) tidak tersumbat.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bulanan</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Deep cleaning dengan cairan pembersih netral pH (uji coba di spot kecil).</li>
                  <li>Evaluasi ulang ketegangan/flatness permukaan dan sambungan.</li>
                  <li>Catat temuan untuk tindak lanjut perbaikan jika diperlukan.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pembersihan noda */}
      <section className="border-b" aria-labelledby="noda-title">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 id="noda-title" className="text-2xl font-semibold md:text-3xl">
            Panduan Pembersihan Noda
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Noda Cair (minuman, keringat)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Serap cairan dengan kain microfiber (jangan digosok keras).</li>
                  <li>Gunakan larutan sabun lembut pH netral, lap secara perlahan.</li>
                  <li>Keringkan dengan kain kering, pastikan tidak licin.</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Noda Minyak/Grease</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Taburkan sedikit baking soda, diamkan 10–15 menit.</li>
                  <li>Vacuum perlahan; ulangi jika perlu.</li>
                  <li>Gunakan pembersih netral khusus karpet jika masih tersisa.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Do & Don't */}
      <section className="border-b" aria-labelledby="larangan-title">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 id="larangan-title" className="text-2xl font-semibold md:text-3xl">
            Do & Don’t
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium">Do (Direkomendasikan)</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>Gunakan alas kaki non-marking.</li>
                <li>Sediakan karpet keset di pintu masuk.</li>
                <li>Simpan catatan perawatan dan jadwal rutin.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Don’t (Dihindari)</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>Jangan gunakan bahan kimia keras (pemutih/pelarut kuat).</li>
                <li>Hindari menyeret peralatan berat tanpa pelindung.</li>
                <li>Jangan menunda pembersihan tumpahan cairan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jadwal per material */}
      <section className="border-b" aria-labelledby="material-title">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 id="material-title" className="text-2xl font-semibold md:text-3xl">
            Jadwal Perawatan per Material
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Karpet PP / Needle Punch</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Sapuan harian, vacuum mingguan.</li>
                  <li>Deep clean 1x/bulan; cek sambungan rutin.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vinyl Sports</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Pel lembab pH netral 2–3x/minggu.</li>
                  <li>Hindari genangan; cek seam & marking bulanan.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>PU / Rubber</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Sapuan harian, pel lembut mingguan.</li>
                  <li>Deep clean 1x/bulan; evaluasi grip & keausan.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b" aria-labelledby="faq-title">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h2 id="faq-title" className="text-2xl font-semibold md:text-3xl">
            FAQ Perawatan
          </h2>
          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="item-1">
              <AccordionTrigger>Seberapa sering deep cleaning diperlukan?</AccordionTrigger>
              <AccordionContent>
                Untuk fasilitas dengan trafik tinggi, rekomendasi 1x per bulan. Untuk trafik sedang, 6–8 minggu sekali.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Apakah aman menggunakan disinfektan?</AccordionTrigger>
              <AccordionContent>
                Gunakan disinfektan pH netral yang kompatibel dengan material permukaan. Lakukan uji coba di area kecil.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Bagaimana jika sambungan mulai terangkat?</AccordionTrigger>
              <AccordionContent>
                Batasi penggunaan area tersebut dan hubungi tim kami untuk perbaikan agar integritas permukaan tetap
                aman.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-8">
            <Link
              href="/#kontak"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:opacity-90"
            >
              Butuh jadwal perawatan profesional? Hubungi kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
