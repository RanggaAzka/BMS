"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export default function AdminPortfolioPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const [adminToken, setAdminToken] = useState("")
  const [title, setTitle] = useState("")
  const [client, setClient] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [fieldType, setFieldType] = useState("")
  const [size, setSize] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")
  const [highlights, setHighlights] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!adminToken) {
      toast({ title: "Butuh Admin Token", description: "Masukkan ADMIN_TOKEN untuk menambah portofolio." })
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/portofolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken,
        },
        body: JSON.stringify({
          title,
          client,
          location,
          date,
          fieldType,
          size,
          imageUrl,
          description,
          highlights,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Gagal menambah portofolio")
      }
      // reset
      setTitle("")
      setClient("")
      setLocation("")
      setDate("")
      setFieldType("")
      setSize("")
      setImageUrl("")
      setDescription("")
      setHighlights("")
      toast({
        title: "Berhasil",
        description: "Item portofolio telah ditambahkan. Cek halaman /portofolio.",
      })
    } catch (err: any) {
      toast({ title: "Gagal", description: err.message || "Terjadi kesalahan." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold">Admin Portofolio</h1>
      <p className="text-muted-foreground mt-1">
        Tambahkan proyek baru setelah pengerjaan selesai. Halaman ini dilindungi token sederhana.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="adminToken">Admin Token</Label>
            <Input
              id="adminToken"
              type="password"
              placeholder="Masukkan ADMIN_TOKEN"
              value={adminToken}
              onChange={(e) => setAdminToken(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="title">Judul Proyek</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Lapangan Futsal ABC"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="client">Klien</Label>
              <Input id="client" value={client} onChange={(e) => setClient(e.target.value)} placeholder="PT Contoh" />
            </div>
            <div>
              <Label htmlFor="location">Lokasi</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Jakarta"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Tanggal</Label>
              <Input id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="2025-10-12" />
            </div>
            <div>
              <Label htmlFor="fieldType">Tipe Lapangan</Label>
              <Input
                id="fieldType"
                value={fieldType}
                onChange={(e) => setFieldType(e.target.value)}
                placeholder="Futsal / Mini Soccer / Badminton"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="size">Ukuran</Label>
              <Input id="size" value={size} onChange={(e) => setSize(e.target.value)} placeholder="25m x 15m" />
            </div>
            <div>
              <Label htmlFor="imageUrl">URL Gambar</Label>
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Deskripsi singkat pengerjaan, material, waktu pengerjaan, dsb."
            />
          </div>
          <div>
            <Label htmlFor="highlights">Highlight (satu per baris)</Label>
            <Textarea
              id="highlights"
              rows={6}
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
              placeholder={"Permukaan rata dan rapi\nDrainase optimal\nMaterial standar internasional"}
            />
          </div>
          <div className="pt-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Menyimpan..." : "Tambahkan Portofolio"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Tips: Set ADMIN_TOKEN di Vars agar aman. Anda juga bisa menambah upload gambar via Vercel Blob bila
            dibutuhkan.
          </p>
        </div>
      </form>
    </main>
  )
}
