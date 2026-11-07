import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { instagramPosts, site } from '../data';
import { InstagramPhoneSlider, RiseIn, SectionHeading } from '../components';

export function InstagramGallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <SectionHeading
        eyebrow="INSTA GALLERY"
        title="Latest from Instagram"
        subtitle={`Posts from ${site.instagramHandle}. Use the arrows for the next set — tap Open on Instagram if a reel does not play.`}
      />

      <RiseIn>
        <InstagramPhoneSlider posts={instagramPosts} />
      </RiseIn>

      <div className="ig-actions">
        <Link className="btn btn-gold" to="/gallery">
          Click for more gallery
        </Link>
        <a
          className="btn btn-outline"
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram /> Follow {site.instagramHandle}
        </a>
      </div>
    </section>
  );
}
