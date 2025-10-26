// Catatan: Integrasi "Upstash for Redis" menambahkan KV_REST_API_URL & KV_REST_API_TOKEN

const KV_URL = process.env.KV_REST_API_URL
const KV_TOKEN = process.env.KV_REST_API_TOKEN
const KEY = "portfolio:items"

if (!KV_URL || !KV_TOKEN) {
  // Aman dipakai di server saja; halaman publik akan tetap render kosong bila belum di-setup
  // Hindari throw di import time agar app tetap jalan tanpa integrasi.
}

async function kvGetRaw(key: string): Promise<string | null> {
  if (!KV_URL || !KV_TOKEN) return null
  const res = await fetch(`${KV_URL}/get/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
    cache: "no-store",
  })
  if (!res.ok) return null
  const text = await res.text()
  return text || null
}

async function kvSetRaw(key: string, value: string): Promise<boolean> {
  if (!KV_URL || !KV_TOKEN) return false
  const res = await fetch(`${KV_URL}/set/${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${KV_TOKEN}` },
    body: value,
  })
  return res.ok
}

export type PortfolioItem = {
  id: string
  title: string
  client?: string
  location?: string
  date?: string
  fieldType?: string
  size?: string
  imageUrl?: string
  description?: string
  highlights?: string[]
  createdAt: string
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const raw = await kvGetRaw(KEY)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed as PortfolioItem[]
    return []
  } catch {
    return []
  }
}

export async function addPortfolioItem(item: Omit<PortfolioItem, "id" | "createdAt">) {
  const items = await getPortfolioItems()
  const newItem: PortfolioItem = {
    id: (globalThis.crypto?.randomUUID && crypto.randomUUID()) || `${Date.now()}-${Math.random()}`,
    createdAt: new Date().toISOString(),
    ...item,
  }
  const next = [newItem, ...items]
  await kvSetRaw(KEY, JSON.stringify(next))
  return newItem
}
