import styles from './styles.module.css';

export default function AppStoreBadge({href, productName}) {
  const alt = `Download ${productName} on the App Store`;

  return (
    <a href={href} className={styles.storeBadge}>
      <img src="/img/appstore-black.svg" alt={alt} className={styles.lightOnly} />
      <img src="/img/appstore-white.svg" alt={alt} className={styles.darkOnly} />
    </a>
  );
}
