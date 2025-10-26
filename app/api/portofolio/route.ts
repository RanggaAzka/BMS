import { NextResponse } from "next/server"
import { addPortfolioItem, getPortfolioItems } from "@/lib/kv"

export async function GET() {
  const items = await getPortfolioItems()
  return NextResponse.json({ items })
}

export async function POST(req: Request) {
  const adminHeader = req.headers.get("x-admin-token") || ""
  if (!process.env.ADMIN_TOKEN || adminHeader !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const highlights: string[] =
      typeof body.highlights === "string"
        ? body.highlights
            .split(/\r?\n/)
            .map((s: string) => s.trim())
            .filter(Boolean)
        : Array.isArray(body.highlights)
          ? body.highlights
          : []

    const created = await addPortfolioItem({
      title: body.title || "Tanpa Judul",
      client: body.client || "",
      location: body.location || "",
      date: body.date || "",
      fieldType: body.fieldType || "",
      size: body.size || "",
      imageUrl: body.imageUrl || "",
      description: body.description || "",
      highlights,
    })

    return NextResponse.json({ item: created }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 })
  }
}
