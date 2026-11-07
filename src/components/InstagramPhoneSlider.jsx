import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const IG_MIN_WIDTH = 326;
const IG_FRAME_HEIGHT = 580;

function pageSizeFromWidth(width) {
  if (width <= 760) return 1;
  if (width <= 1100) return 2;
  return 3;
}

function InstagramPhone({ post }) {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return undefined;

    function fit() {
      const width = node.clientWidth || IG_MIN_WIDTH;
      setScale(Math.min(1, width / IG_MIN_WIDTH));
    }

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="ig-phone lightning-tile">
      <div
        ref={frameRef}
        className="ig-phone-frame"
        style={{ height: Math.max(320, IG_FRAME_HEIGHT * scale) }}
      >
        {!imgFailed && post.image ? (
          <img
            className="ig-phone-poster"
            src={post.image}
            alt={post.title}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="ig-phone-fallback">
            <p>{post.title}</p>
          </div>
        )}
      </div>
      <a
        className="ig-phone-open"
        href={post.href}
        target="_blank"
        rel="noreferrer"
      >
        Open on Instagram <ExternalLink size={14} />
      </a>
    </article>
  );
}

export function InstagramPhoneSlider({ posts }) {
  const [pageSize, setPageSize] = useState(() =>
    typeof window === 'undefined' ? 3 : pageSizeFromWidth(window.innerWidth),
  );
  const pages = Math.max(1, Math.ceil((posts?.length || 0) / pageSize));
  const [page, setPage] = useState(0);

  useEffect(() => {
    function sync() {
      setPageSize(pageSizeFromWidth(window.innerWidth));
    }
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [posts, pageSize]);

  const visible = useMemo(() => {
    const start = page * pageSize;
    return (posts || []).slice(start, start + pageSize);
  }, [page, pageSize, posts]);

  function prev() {
    setPage((current) => (current === 0 ? pages - 1 : current - 1));
  }

  function next() {
    setPage((current) => (current + 1) % pages);
  }

  if (!posts?.length) {
    return <p className="demo-note">No images in this category yet.</p>;
  }

  const start = page * pageSize + 1;
  const end = Math.min((page + 1) * pageSize, posts.length);

  return (
    <div
      className="ig-phone-slider"
      style={{ '--ig-count': visible.length }}
    >
      <button
        type="button"
        className="carousel-btn"
        aria-label="Previous posts"
        onClick={prev}
      >
        <ChevronLeft />
      </button>

      <div className="ig-phone-row">
        {visible.map((post) => (
          <InstagramPhone key={`${page}-${post.id}`} post={post} />
        ))}
      </div>

      <button
        type="button"
        className="carousel-btn"
        aria-label="Next posts"
        onClick={next}
      >
        <ChevronRight />
      </button>

      <div className="ig-dots" role="tablist" aria-label="Gallery pages">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            className={i === page ? 'active' : ''}
            aria-label={`Show posts ${i * pageSize + 1} to ${Math.min((i + 1) * pageSize, posts.length)}`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
      <p className="ig-page-note">
        Showing {start}–{end} of {posts.length}
      </p>
    </div>
  );
}
