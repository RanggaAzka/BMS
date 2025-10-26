"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "#layanan", label: "Layanan" },
    { href: "#proyek", label: "Proyek" },
    { href: "/portofolio", label: "Portofolio" },
    { href: "#proses", label: "Proses" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#kontak", label: "Kontak" },
    { href: "/perawatan", label: "Perawatan" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          <span className="text-pretty">BAROKAH MAJU SEGARA</span>
          <span className="sr-only">Kembali ke beranda</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#kontak">
            <Button size="sm">Konsultasi Gratis</Button>
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#kontak"
              className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Button size="sm" className="w-full">
                Konsultasi Gratis
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}