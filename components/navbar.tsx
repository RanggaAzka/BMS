"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="font-semibold">
          <span className="text-pretty">BAROKAH MAJU SEGARA </span>
          <span className="sr-only">Kembali ke beranda</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#layanan" className="hover:underline">
            Layanan
          </a>
          <a href="#proyek" className="hover:underline">
            Proyek
          </a>
          <Link href="/portofolio" className="hover:underline">
            Portofolio
          </Link>
          <a href="#proses" className="hover:underline">
            Proses
          </a>
          <a href="#testimoni" className="hover:underline">
            Testimoni
          </a>
          <a href="#kontak" className="hover:underline">
            Kontak
          </a>
          <Link href="/perawatan" className="hover:underline">
            Perawatan
          </Link>
        </nav>
        <div className="hidden md:block">
          <a href="#kontak">
            <Button size="sm">Konsultasi Gratis</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
