'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)

  const validateForm = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise((res) => setTimeout(res, 1500))
    setIsSubmitting(false)
    setSubmitted(true)

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  return (
    <section className="px-4 sm:px-6 py-24 sm:py-32 max-w-2xl mx-auto min-h-screen text-foreground">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
          I'd love to hear from you! Fill the form and I'll get back as soon as I can.
        </p>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mt-6 mx-auto rounded-full" />
      </motion.header>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="status"
            aria-live="polite"
            className="text-center"
          >
            <div className="text-3xl font-semibold text-green-600 mb-2">✅ Message Sent!</div>
            <p className="text-muted-foreground text-lg">
              Thank you for reaching out — I’ll respond shortly.
            </p>
            <motion.button
              onClick={() => {
                setSubmitted(false)
                setForm({ name: '', email: '', message: '' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full bg-primary text-background font-medium shadow hover:shadow-md transition"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-muted/10 p-8 rounded-xl shadow-lg"
            noValidate
          >
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium mb-1 capitalize">
                  {field}
                </label>
                <motion.input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  id={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={field === 'email' ? 'you@example.com' : 'Your full name'}
                  className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${
                    errors[field] ? 'border-red-500' : 'border-border'
                  }`}
                  required
                  whileFocus={{ scale: 1.01 }}
                  aria-invalid={errors[field] ? 'true' : 'false'}
                  aria-describedby={errors[field] ? `${field}-error` : undefined}
                />
                {errors[field] && (
                  <p id={`${field}-error`} className="mt-1 text-sm text-red-500">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <motion.textarea
                name="message"
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition ${
                  errors.message ? 'border-red-500' : 'border-border'
                }`}
                required
                whileFocus={{ scale: 1.01 }}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`w-full px-6 py-3 rounded-full bg-primary text-background font-medium flex justify-center items-center gap-2 transition ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              aria-label="Send message"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-background" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  )
}
