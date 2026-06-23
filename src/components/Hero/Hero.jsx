import { useState, useEffect } from 'react'
import './Hero.css'

import hero1 from '../../assets/hero1.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
import hero4 from '../../assets/hero4.jpg'
import hero5 from '../../assets/hero5.jpg'
import hero6 from '../../assets/hero6.jpg'
const slides = [
  {
    id: 1,
    src: hero1,
    alt: 'Srimathi Photography Hero Image 1',
  },
  {
    id: 2,
    src: hero2,
    alt: 'Srimathi Photography Hero Image 2',
  },
  {
    id: 3,
    src: hero3,
    alt: 'Srimathi Photography Hero Image 3',
  },
  {
    id: 4,
    src: hero4,
    alt: 'Srimathi Photography Hero Image 4',
  },
  {
    id: 5,
    src: hero5,
    alt: 'Srimathi Photography Hero Image 5',
  },
  {
    id: 6,
    src: hero6,
    alt: 'Srimathi Photography Hero Image 6',
  },
]

const INTERVAL = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, INTERVAL)

    return () => clearInterval(id)
  }, [paused])

  const goTo = (i) => {
    setCurrent(i)
    setPaused(true)
    setTimeout(() => setPaused(false), INTERVAL * 2)
  }

  return (
    <section className="hero" aria-label="Hero slideshow">
      {/* Slides */}
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide${
              i === current ? ' hero__slide--active' : ''
            }`}
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero__slide-img"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">
          Wedding • Engagement • Couple Sessions
        </p>

        <h1 className="hero__heading">
          Turning Moments
          <br />
          Into Forever
        </h1>

        <p className="hero__description">
          Every smile, every glance, and every emotion deserves to be
          remembered. We capture your love story through timeless,
          cinematic photography that you’ll cherish for generations.
        </p>

      <a
  href="https://wa.me/919543061112?text=Hello%20Devz%20Studio,%20I%20would%20like%20to%20book%20a%20session."
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-light hero__cta"
>
  Book Your Session
</a>
      </div>

      {/* Dots */}
      <div
        className="hero__dots"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`hero__dot${
              i === current ? ' hero__dot--active' : ''
            }`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}