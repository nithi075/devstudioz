/* =============================================
   Portfolio — Category filter tabs + photo grid
   8 categories: Portraits, Pre Weddings,
   Tamil/Telugu/Brahmin/Christian/Muslim Weddings,
   Engagement
   ============================================= */
import { useState } from 'react'
import './Portfolio.css'
import wed1 from '../../assets/wed1.jpg' 

import wed2 from '../../assets/wed2.jpg'

import wed3 from '../../assets/wed3.jpg'

import wed4 from '../../assets/wed4.jpg'

import wed5 from '../../assets/wed5.jpg'

import wed6 from '../../assets/wed6.jpg'

import wed7 from '../../assets/wed7.jpg'

import wed8 from '../../assets/wed8.jpg'

import rec9 from '../../assets/rec1.jpg'

import rec10 from '../../assets/rec2.jpg'

import rec11 from '../../assets/rec3.jpg'

import rec12 from '../../assets/rec4.jpg'

import rec13 from '../../assets/rec5.jpg'

import rec14 from '../../assets/rec6.jpg'

import rec15 from '../../assets/rec7.jpg'

import rec16 from '../../assets/rec8.jpg'

import rec17 from '../../assets/rec9.jpg'

import rec18 from '../../assets/rec10.jpg'

import rec19 from '../../assets/rec11.jpg'

import rec20 from '../../assets/rec12.jpg'

import rec21 from '../../assets/rec13.jpg'

import rec22 from '../../assets/rec14.jpg'

import pre1 from  '../../assets/pre1.jpg'

import pre2 from  '../../assets/pre2.jpg'

import pre3 from  '../../assets/pre3.jpg'

import pre4 from  '../../assets/pre4.jpg'

import pre5 from  '../../assets/pre5.jpg'

import pre6 from  '../../assets/pre6.jpg'

import pre7 from  '../../assets/pre7.jpg'

import pre8 from  '../../assets/pre8.jpg'

import pre9 from  '../../assets/pre9.jpg'

import pre10 from  '../../assets/pre10.jpg'

import pre11 from  '../../assets/pre11.jpg'

import pre12 from  '../../assets/pre12.jpg'

import pre13 from  '../../assets/pre13.jpg'

import pre14 from  '../../assets/pre14.jpg'

import pre15 from  '../../assets/pre15.jpg'

import mat1 from '../../assets/mat1.jpg'

import mat2 from '../../assets/mat2.jpg'

import mat3 from '../../assets/mat3.jpg'

import mat4 from '../../assets/mat4.jpg'

import mat5 from '../../assets/mat5.jpg'

import mat6 from '../../assets/mat6.jpg'

import mat7 from '../../assets/mat7.jpg'

import mat8 from '../../assets/mat8.jpg'

import mat9 from '../../assets/mat9.jpg'

import mat10 from '../../assets/mat10.jpg'

import mat11 from '../../assets/mat11.jpg'

import mat12 from '../../assets/mat12.jpg'

import mat13 from '../../assets/mat13.jpg'

import mat14 from '../../assets/mat14.jpg'

import bri1 from '../../assets/bri1.jpg'

import bri2 from '../../assets/bri2.jpg'

import bri3 from '../../assets/bri3.jpg'

import bri4 from '../../assets/bri4.jpg'

import bri5 from '../../assets/bri5.jpg'

import bri6 from '../../assets/bri6.jpg'

import bri7 from '../../assets/bri7.jpg'

import baby1 from '../../assets/baby1.jpg'

import baby2 from '../../assets/baby2.jpg'

import baby3 from '../../assets/baby3.jpg'

import baby4 from '../../assets/baby4.jpg'

import baby5 from '../../assets/baby5.jpg'

import baby6 from '../../assets/baby6.jpg'

import baby7 from '../../assets/baby7.jpg'



const photos = [

  // Wedding

  { id: 1, src: wed1, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 2, src: wed2, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 3, src: wed3, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 4, src: wed4, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 5, src: wed5, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 6, src: wed6, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 7, src: wed7, alt: 'Wedding Photography', category: 'Wedding' },

  { id: 8, src: wed8, alt: 'Wedding Photography', category: 'Wedding' },



  // Reception

  { id: 9, src: rec9, alt: 'Reception Photography', category: 'Reception' },

  { id: 10, src: rec10, alt: 'Reception Photography', category: 'Reception' },

  { id: 11, src: rec11, alt: 'Reception Photography', category: 'Reception' },

  { id: 12, src: rec12, alt: 'Reception Photography', category: 'Reception' },

  { id: 13, src: rec13, alt: 'Reception Photography', category: 'Reception' },

  { id: 14, src: rec14, alt: 'Reception Photography', category: 'Reception' },

  { id: 15, src: rec15, alt: 'Reception Photography', category: 'Reception' },

  { id: 16, src: rec16, alt: 'Reception Photography', category: 'Reception' },

  { id: 17, src: rec17, alt: 'Reception Photography', category: 'Reception' },

  { id: 18, src: rec18, alt: 'Reception Photography', category: 'Reception' },

  { id: 19, src: rec19, alt: 'Reception Photography', category: 'Reception' },

  { id: 20, src: rec20, alt: 'Reception Photography', category: 'Reception' },

  { id: 21, src: rec21, alt: 'Reception Photography', category: 'Reception' },

  { id: 22, src: rec22, alt: 'Reception Photography', category: 'Reception' },



  // Pre Wedding

  { id: 23, src: pre1, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 24, src: pre2, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 25, src: pre3, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 26, src: pre4, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 27, src: pre5, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 28, src: pre6, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 29, src: pre7, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 30, src: pre8, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 31, src: pre9, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 32, src: pre10, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 33, src: pre11, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 34, src: pre12, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 35, src: pre13, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 36, src: pre14, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },

  { id: 37, src: pre15, alt: 'Pre Wedding Photography', category: 'Pre Wedding' },



  // Maternity

  { id: 38, src: mat1, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 39, src: mat2, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 40, src: mat3, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 41, src: mat4, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 42, src: mat5, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 43, src: mat6, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 44, src: mat7, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 45, src: mat8, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 46, src: mat9, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 47, src: mat10, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 48, src: mat11, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 49, src: mat12, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 50, src: mat13, alt: 'Maternity Photography', category: 'Maternity' },

  { id: 51, src: mat14, alt: 'Maternity Photography', category: 'Maternity' },



  // Bride

  { id: 52, src: bri1, alt: 'Bride Photography', category: 'Bride' },

  { id: 53, src: bri2, alt: 'Bride Photography', category: 'Bride' },

  { id: 54, src: bri3, alt: 'Bride Photography', category: 'Bride' },

  { id: 55, src: bri4, alt: 'Bride Photography', category: 'Bride' },

  { id: 56, src: bri5, alt: 'Bride Photography', category: 'Bride' },

  { id: 57, src: bri6, alt: 'Bride Photography', category: 'Bride' },

  { id: 58, src: bri7, alt: 'Bride Photography', category: 'Bride' },



  // Baby

  { id: 59, src: baby1, alt: 'Baby Photography', category: 'Baby' },

  { id: 60, src: baby2, alt: 'Baby Photography', category: 'Baby' },

  { id: 61, src: baby3, alt: 'Baby Photography', category: 'Baby' },

  { id: 62, src: baby4, alt: 'Baby Photography', category: 'Baby' },

  { id: 63, src: baby5, alt: 'Baby Photography', category: 'Baby' },

  { id: 64, src: baby6, alt: 'Baby Photography', category: 'Baby' },

  { id: 65, src: baby7, alt: 'Baby Photography', category: 'Baby' },

]
const categories = [
  { id: 'all', label: 'All' },
  { id: 'Wedding', label: 'Wedding' },
  { id: 'Reception', label: 'Reception' },
  { id: 'Pre Wedding', label: 'Pre Wedding' },
  { id: 'Maternity', label: 'Maternity' },
  { id: 'Bride', label: 'Bride' },
  { id: 'Baby', label: 'Baby' },
]
const categoryDescriptions = {
  all: 'Explore our complete collection of photography works.',

  wedding: 'Timeless wedding photography capturing beautiful moments.',
  reception: 'Reception photography filled with celebration and joy.',
  prewedding: 'Creative pre-wedding sessions for couples.',
  maternity: 'Beautiful maternity portraits celebrating motherhood.',
  bride: 'Elegant bridal portraits and wedding looks.',
  baby: 'Cute baby photography and memorable childhood moments.',
}

const portfolioItems = photos.map(photo => ({
  id: photo.id,
  cat: photo.category,
  src: photo.src,
  alt: photo.alt,
}))

export default function Portfolio() {
  const [active,   setActive]   = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
  active === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === active)
    
  const openLightbox  = (item) => setLightbox(item)
  const closeLightbox = ()     => setLightbox(null)

  const navigate = (dir) => {
    const list = active === 'all' ? portfolioItems : portfolioItems.filter(p => p.cat === active)
    const idx  = list.findIndex(p => p.id === lightbox.id)
    setLightbox(list[(idx + dir + list.length) % list.length])
  }

  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-heading">

      {/* ---- Header ---- */}
      <div className="portfolio__header">
        <span className="section-label">Our Work</span>
        <h2 className="portfolio__heading" id="portfolio-heading">Portfolio</h2>
        <p className="portfolio__sub">
          From intimate portraits to grand celebrations — every frame tells a story.
        </p>
      </div>

      {/* ---- Filter tabs ---- */}
      <div className="portfolio__filters" role="tablist" aria-label="Portfolio categories">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`portfolio__filter-btn${active === cat.id ? ' portfolio__filter-btn--active' : ''}`}
            onClick={() => setActive(cat.id)}
            role="tab"
            aria-selected={active === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="portfolio__category-info">

  <p>{categoryDescriptions[active]}</p>
</div>

      {/* ---- Photo grid ---- */}
      <div className="portfolio__grid" key={active}>
  {filtered.map((item, i) => (
    <button
      key={item.id}
      className="portfolio__item"
      style={{ animationDelay: `${i * 40}ms` }}
      onClick={() => openLightbox(item)}
      aria-label={item.alt}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="portfolio__img"
      />

      <div className="portfolio__overlay">
        <span className="portfolio__overlay-icon">+</span>
      </div>
    </button>
  ))}
</div>
      {/* ---- Lightbox ---- */}
      {lightbox && (
        <div
          className="portfolio__lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          onKeyDown={e => {
            if (e.key === 'Escape')     closeLightbox()
            if (e.key === 'ArrowRight') navigate(1)
            if (e.key === 'ArrowLeft')  navigate(-1)
          }}
          tabIndex={-1}
        >
          <button className="portfolio__lb-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="portfolio__lb-img"
            onClick={e => e.stopPropagation()}
          />
          <button className="portfolio__lb-nav portfolio__lb-nav--prev"
            onClick={e => { e.stopPropagation(); navigate(-1) }} aria-label="Previous">‹</button>
          <button className="portfolio__lb-nav portfolio__lb-nav--next"
            onClick={e => { e.stopPropagation(); navigate(1) }}  aria-label="Next">›</button>
        </div>
      )}
    </section>
  )
}
