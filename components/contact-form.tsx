"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285891513844").replace(/[^0-9]/g, "")

export function ContactSection() {
  return (
    <section id="kontak" className="border-t bg-primary text-primary-foreground" aria-labelledby="kontak-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="kontak-title" className="text-balance text-2xl font-semibold md:text-3xl">
              Konsultasi & Penawaran
            </h2>
            <p className="mt-2 max-w-prose opacity-90">
              Ceritakan kebutuhan lapangan Anda. Tim kami akan menghubungi Anda untuk survey dan estimasi biaya.
            </p>
            <ul className="mt-6 space-y-2 text-sm opacity-90">
              <li>
                • Tel:{" "}
                <a className="underline" href="tel:+6285891513844">
                  +62 858-9151-3844
                </a>
              </li>
              <li>
                • WhatsApp:{" "}
                <a
                  className="underline"
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat sekarang
                </a>
              </li>
              <li>
                • Email:{" "}
                <a className="underline" href="mailto:hello@karpetlapangan.pro">
                  hello@karpetlapangan.pro
                </a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    lokasi: "",
    jenis: "",
    pesan: "",
  })

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const message = [
        `Halo, saya ${form.nama}`,
        `Email: ${form.email}`,
        `Telepon/WA: ${form.telepon}`,
        form.lokasi ? `Lokasi: ${form.lokasi}` : null,
        form.jenis ? `Jenis Lapangan: ${form.jenis}` : null,
        form.pesan ? `Pesan: ${form.pesan}` : null,
      ]
        .filter(Boolean)
        .join("\n")

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
      window.open(waUrl, "_blank", "noopener,noreferrer")
      toast({ title: "Membuka WhatsApp…", description: "Silakan lanjutkan chat Anda di WhatsApp." })
      setForm({ nama: "", email: "", telepon: "", lokasi: "", jenis: "", pesan: "" })
    } catch (_err) {
      toast({ title: "Gagal membuka WhatsApp", description: "Silakan coba lagi.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg bg-background p-4 text-foreground shadow-sm md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="nama">Nama</Label>
          <Input id="nama" name="nama" required value={form.nama} onChange={onChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" required value={form.email} onChange={onChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="telepon">Telepon/WA</Label>
          <Input id="telepon" name="telepon" required value={form.telepon} onChange={onChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lokasi">Lokasi</Label>
          <Input id="lokasi" name="lokasi" placeholder="Kota/Alamat" value={form.lokasi} onChange={onChange} />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <Label htmlFor="jenis">Jenis Lapangan</Label>
          <Input
            id="jenis"
            name="jenis"
            placeholder="Futsal/Badminton/Serbaguna, dll."
            value={form.jenis}
            onChange={onChange}
          />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <Label htmlFor="pesan">Pesan</Label>
          <Textarea
            id="pesan"
            name="pesan"
            rows={4}
            placeholder="Luas area, kondisi permukaan, target waktu, dll."
            value={form.pesan}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" disabled={loading}>
          {loading ? "Menyiapkan..." : "Kirim via WhatsApp"}
        </Button>
      </div>
    </form>
  )
}
