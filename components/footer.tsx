export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="text-sm">
          <strong>BAROKAH MAJU SEGARA</strong> · Pemasangan karpet lapangan profesional
          <div className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <div className="text-sm text-muted-foreground">
          <a className="underline" href="#kontak">
            Hubungi Kami
          </a>
        </div>
      </div>
    </footer>
  )
}
