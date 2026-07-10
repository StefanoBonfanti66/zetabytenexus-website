import type { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: 'Server misconfiguration' })
  }

  let body: { name: string; email: string; message: string }
  try {
    body = req.body
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  const { name, email, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { error } = await supabase.from('contacts').insert({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  })

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(resendApiKey)
      await resend.emails.send({
        from: 'info@zetabytenexus.it',
        to: 'info.zetabytenexus@gmail.com',
        subject: `Nuovo contatto dal sito — ${name.trim()}`,
        html: `<h2>Nuovo messaggio dal sito zetabytenexus.it</h2>
<hr>
<p><strong>Nome:</strong> ${name.trim()}</p>
<p><strong>Email:</strong> ${email.trim()}</p>
<p><strong>Messaggio:</strong></p>
<blockquote style="white-space:pre-wrap">${message.trim()}</blockquote>`,
      })
    } catch {
      /* notification email is optional */
    }
  }

  res.setHeader('Access-Control-Allow-Origin', '*')
  return res.status(200).json({ ok: true })
}
