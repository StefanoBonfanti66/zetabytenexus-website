import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing fields' })
    return
  }

  // TODO: qui puoi integrare il tuo sistema di invio (SMTP, webhook, log, ecc.)
  // Per ora rispondiamo OK di test
  res.status(200).json({ ok: true })
}
