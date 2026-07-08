import { type FormEvent, useState } from 'react'
import { supabase } from '../supabaseClient'

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const { error } = await supabase.from('contacts').insert({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    })

    if (error) {
      setStatus('error')
      return
    }

    setStatus('sent')
    setName('')
    setEmail('')
    setMessage('')
  }

  const inputClasses =
    'w-full border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-muted outline-none transition-colors duration-200 focus:border-accent'

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-text mb-3">
            Contatto
          </h2>
          <p className="text-base md:text-lg text-muted mb-10">
            Raccontaci cosa hai in mente. Ti rispondiamo per capire insieme se possiamo esserti utili.
          </p>

          {status === 'sent' ? (
            <div className="border border-border bg-surface p-8 md:p-10 text-center w-full max-w-md mx-auto">
              <p className="text-text font-semibold mb-2">Grazie per averci scritto!</p>
              <p className="text-sm text-muted">Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 text-left">
              <div>
                <label htmlFor="contact-name" className="sr-only">Nome</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Messaggio</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Il tuo messaggio"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-accent text-white px-6 py-3 text-sm font-medium transition-colors duration-200 hover:bg-accent-hover disabled:opacity-50"
              >
                {status === 'sending' ? 'Invio in corso…' : 'Invia messaggio'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-500 text-center">
                  Errore nell'invio. Riprova più tardi.
                </p>
              )}
            </form>
          )}

          <p className="text-sm text-muted mt-10 max-w-md mx-auto leading-relaxed">
            Dopo averti ascoltato, prepariamo un preventivo chiaro con tempi e costi. Senza impegno.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
