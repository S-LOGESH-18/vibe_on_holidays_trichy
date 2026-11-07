import { useEffect, useState } from 'react';
import { galleryImages } from '../data';
import { SectionHeading } from '../components';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % galleryImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  function selectImage(index) {
    setActiveIndex(index);
    document.getElementById('gallery-feature')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  return (
    <main className="gallery-page">
      <section className="inner-hero gallery-page-hero">
        <span className="eyebrow">VIBE ON HOLIDAYS · TRICHY</span>
        <h1>
          Photo <em>gallery</em>
        </h1>
        <p>Photos and memories from our journeys.</p>
      </section>

      <section className="section gallery-full">
        <SectionHeading
          eyebrow="PHOTO HIGHLIGHT"
          title="Explore the photos"
          subtitle="Enjoy the rotating highlights, or choose any photo from the collection below."
        />

        <div className="gallery-feature" id="gallery-feature">
          <div className="gallery-feature-image-wrap" aria-live="polite">
            <img
              key={activeImage.id}
              className="gallery-feature-image"
              src={activeImage.src}
              alt={`Vibe on Holidays gallery photo ${activeIndex + 1}`}
            />
          </div>
          <div className="gallery-feature-caption" aria-live="polite">
            <p>{activeImage.caption}</p>
            <span>
              {activeIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>

        <div className="gallery-collection-heading">
          <SectionHeading
            eyebrow="PHOTO COLLECTION"
            title="All photos"
            subtitle={`Browse ${galleryImages.length} photos. Select a photo to view it above.`}
          />
        </div>

        <div className="gallery-image-grid">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              className={`gallery-image-tile ${index === activeIndex ? 'active' : ''}`}
              type="button"
              aria-label={`Feature ${image.label}`}
              aria-pressed={index === activeIndex}
              onClick={() => selectImage(index)}
            >
              <img
                src={image.src}
                alt={`Vibe on Holidays gallery photo ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
