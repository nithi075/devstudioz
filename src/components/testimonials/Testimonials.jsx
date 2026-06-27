/* =============================================
   Testimonials — fetched from API, latest 4
   ============================================= */
import { useState, useEffect } from 'react'
import './Testimonials.css'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [page, setPage]                 = useState(0)
  const [loading, setLoading]           = useState(true)
  const [error, setError]               = useState(null)

  useEffect(() => {
    fetch('https://devz-backend.onrender.com/api/testimonials')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data) => {
        // API already returns newest-first (_id: -1); take top 4
        setTestimonials(data.slice(0, 4))
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  /* Group into pages of 2 (4 total → 2 pages) */
  const pages = []
  for (let i = 0; i < testimonials.length; i += 2) {
    pages.push(testimonials.slice(i, i + 2))
  }

  /* Reset page if testimonials reload with fewer pages */
  const safePage = Math.min(page, Math.max(pages.length - 1, 0))

  /* ---- Loading ---- */
  if (loading) {
    return (
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="testimonials__container">
          <span className="section-label" id="testimonials-heading">Testimonials</span>
          <p className="testimonials__state">Loading…</p>
        </div>
      </section>
    )
  }

  /* ---- Error ---- */
  if (error) {
    return (
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="testimonials__container">
          <span className="section-label" id="testimonials-heading">Testimonials</span>
          <p className="testimonials__state testimonials__state--error">
            Could not load testimonials.
          </p>
        </div>
      </section>
    )
  }

  /* ---- Empty ---- */
  if (testimonials.length === 0) {
    return (
      <section className="testimonials" aria-labelledby="testimonials-heading">
        <div className="testimonials__container">
          <span className="section-label" id="testimonials-heading">Testimonials</span>
          <p className="testimonials__state">No reviews yet.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__container">
        <span className="section-label" id="testimonials-heading">Testimonials</span>

        <div className="testimonials__grid">
          {pages[safePage].map((t) => (
            <article key={t._id} className="testimonial-card">
              <span className="testimonial-card__quote" aria-hidden="true">"</span>
              <p className="testimonial-card__body">{t.review}</p>
              <footer className="testimonial-card__footer">
                {t.imageUrl && (
                  <img
                    src={t.imageUrl}
                    alt={t.clientName}
                    className="testimonial-card__avatar"
                  />
                )}
                <p className="testimonial-card__couple">{t.clientName}</p>
              </footer>
            </article>
          ))}
        </div>

        {/* Page dots — only if more than one page */}
        {pages.length > 1 && (
          <div className="testimonials__dots" role="tablist" aria-label="Testimonial page">
            {pages.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot${i === safePage ? ' testimonials__dot--active' : ''}`}
                onClick={() => setPage(i)}
                role="tab"
                aria-selected={i === safePage}
                aria-label={`Testimonials page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
