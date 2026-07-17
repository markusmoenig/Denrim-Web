import {useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function ScreenshotGallery({images, label}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const renderMedia = (image, isViewer = false) => {
    if (image.type === 'video') {
      return (
        <video
          aria-label={image.alt}
          autoPlay
          controls={isViewer}
          loop
          muted
          playsInline
          preload="metadata">
          <source src={image.src} type={image.mimeType || 'video/mp4'} />
        </video>
      );
    }

    return <img src={image.src} alt={image.alt} />;
  };

  useEffect(() => {
    if (!activeImage) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index + images.length - 1) % images.length);
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % images.length);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage, images.length]);

  return (
    <>
      <div className={styles.grid} aria-label={label}>
        {images.map((image, index) => (
          <button
            className={styles.thumbnail}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            type="button"
            aria-label={`View ${image.alt} full size`}>
            {renderMedia(image)}
          </button>
        ))}
      </div>

      {activeImage && (
        <div className={styles.backdrop} role="presentation" onMouseDown={() => setActiveIndex(null)}>
          <div
            aria-label={`${activeImage.alt} full-size viewer`}
            aria-modal="true"
            className={styles.viewer}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog">
            <button className={styles.close} onClick={() => setActiveIndex(null)} type="button" aria-label="Close screenshot viewer">
              Close
            </button>
            {renderMedia(activeImage, true)}
            <div className={styles.viewerFooter}>
              <span>{activeImage.alt}</span>
              <a href={activeImage.src} target="_blank" rel="noreferrer">
                {activeImage.type === 'video' ? 'Open video' : 'Open full size'}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
