import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function DocScreenshot({src, alt, markers = []}) {
  const url = useBaseUrl(src);
  return <figure className={styles.figure}>
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${alt} Open full-size screenshot.`} className={styles.link}>
      <img src={url} alt={alt} loading="lazy" />
      {markers.map(({x, y, label}) => <span key={label} aria-hidden="true" className={styles.marker} style={{left: `${x}%`, top: `${y}%`}}>{label}</span>)}
    </a>
  </figure>;
}
