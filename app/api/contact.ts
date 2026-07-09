// app/api/contact.ts is manually editable but won't be functional here.
// The working API endpoint lives in the Vercel CI/CD repo.
// This file serves as reference in case you need to restore a local version.

// app/api/contact.ts is manually editable but won't be functional here.
// The working API endpoint lives in the Vercel CI/CD repo.
// This file serves as reference in case you need to restore a local version.

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

type ContactBody = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request): Promise<Response> {
  // Add proper CORS headers for local development
  const supabaseUrl = process.env.VITE_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY

  if (!supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  // Safely parse JSON body
  let body: ContactBody
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const { name, email, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    const { error } = await supabase.from('contacts').insert({
      name: name.trim(),
      email: email.trim(),n      message: message.trim(),
    })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      })
    }

    // Optional Resend email notification if API key is present
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
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

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    })
  } catch (error) {
    console.error('Unexpected error in contact API:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }
}

export async function OPTIONS(request: Request): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
