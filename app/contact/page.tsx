'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <div className="container-default py-16 sm:py-24">
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-light">
          Get in Touch
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Let&apos;s build something great.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
          Whether you want to audit a performance issue, kick off a new Next.js project, or discuss frontend architecture, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Form Column */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-3xl border border-accent/30 bg-accent/5 p-8 sm:p-12 text-center">
              <div className="inline-flex rounded-full bg-accent/10 p-4 text-accent-light mb-4">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Message Sent Successfully
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                Thank you for reaching out, {formData.name}. I will review your message and reply shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-3xl border border-border-subtle/80 bg-surface/40 p-8 sm:p-10 shadow-elevated">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@example.com"
                  className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full justify-center mt-2">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border-subtle/80 bg-surface/30 p-8 sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">Direct Contact</h2>
            <p className="text-sm leading-relaxed text-foreground-muted mb-8">
              Prefer direct email? Send a message directly to my primary inbox or connect on social platforms.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:rahul@rahuul.dev"
                className="flex items-center gap-3 text-sm font-semibold text-foreground hover:text-accent-light transition-colors"
              >
                <div className="rounded-lg bg-surface p-2.5 border border-border-subtle">
                  <Mail className="h-4 w-4 text-accent-light" />
                </div>
                rahul@rahuul.dev
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border-subtle/50 text-xs text-foreground-dim">
            Response time: Usually within 24 hours.
          </div>
        </div>
      </div>
    </div>
  )
}
