import { useMemo, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { galleryCategories, instagramPosts, site } from '../data';
import { InstagramPhoneSlider, SectionHeading } from '../components';

export function Gallery() {
  const [category, setCategory] = useState('all');

  const posts = useMemo(() => {
    if (category === 'all') return instagramPosts;
    return instagramPosts.filter((post) => post.category === category);
  }, [category]);

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
          Posts, reels and ads pulled from{' '}
          <a href={site.instagram} target="_blank" rel="noreferrer">
            {site.instagram}
          </a>
          . Phone tiles stay readable on mobile — tap through for the next
          set, or open a post on Instagram.
        </p>
      </section>

      <section className="section gallery-full">
        <SectionHeading
          eyebrow="LIVE FROM THE FEED"
          title="Browse the feed"
          subtitle="These are Instagram posts from Vibe on Holidays Trichy — tap a reel to play it."
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
