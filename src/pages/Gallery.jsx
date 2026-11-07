import { useMemo, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { galleryCategories, instagramPosts, site } from '../data';
import { InstagramPhoneSlider, SectionHeading } from '../components';

const imagePosts = instagramPosts.filter((post) => post.type === 'image');

export function Gallery() {
  const [category, setCategory] = useState('all');

  const posts = useMemo(() => {
    if (category === 'all') return imagePosts;
    return imagePosts.filter((post) => post.category === category);
  }, [category, imagePosts]);

  return (
    <main className="gallery-page">
      <section className="inner-hero gallery-page-hero">
        <span className="eyebrow">
          <FaInstagram /> {site.instagramHandle}
        </span>
        <h1>
          Instagram
          <br />
          <em>gallery</em>
        </h1>
        <p>
          Photos from{' '}
          <a href={site.instagram} target="_blank" rel="noreferrer">
            {site.instagram}
          </a>
          . Browse the image gallery or open a photo on Instagram.
        </p>
      </section>

      <section className="section gallery-full">
        <SectionHeading
          eyebrow="LIVE FROM THE FEED"
          title="Browse the gallery"
          subtitle="Photos from Vibe on Holidays Trichy."
        />

        <div className="gallery-filters">
          {galleryCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              className={category === item.id ? 'active' : ''}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <InstagramPhoneSlider posts={posts} />

        <div className="ig-actions">
          <a
            className="btn btn-gold"
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Open Instagram for more
          </a>
        </div>
      </section>
    </main>
  );
}
