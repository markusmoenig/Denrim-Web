import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title={`Instruments for Visual Creation`}
      description="Denrim is a growing range of high-quality creative applications for visual artists. Each Denrim app is designed as a focused instrument for visual creation, combining powerful systems with clear, intuitive workflows."
    >
      <main>
        <section className={styles.intro}>
          <img
            src={useBaseUrl("/img/social-card.png")}
            alt="Denrim"
            className={styles.brandImage}
          />
          <h1 className={styles.tagline}>
            Instruments for Visual Creation
          </h1>
          <p className={styles.introCopy}>
            Denrim is a growing range of high-quality creative applications for
            visual artists. Each Denrim app is designed as a focused instrument
            for visual creation, combining powerful systems with
            clear, intuitive workflows.
          </p>
        </section>

        <section className={styles.latest} aria-labelledby="latest-heading">
          <div className={styles.latestHeader}>
            <p className={styles.eyebrow}>Latest</p>
            <Link to="/blog">All news →</Link>
          </div>
          <article className={styles.releaseCard}>
            <div className={styles.releaseMeta}>
              <span>Denrim: Forge</span>
              <time dateTime="2026-07-20">July 20, 2026</time>
            </div>
            <h2 id="latest-heading">
              <Link to="/blog/denrim-forge-v1-0-6">
                Denrim: Forge v1.0.6 — Initial Release
              </Link>
            </h2>
            <p>
              The first public release brings a focused low-poly modeling
              workflow for game props, figurines, and printable assets to macOS
              and iPadOS.
            </p>
            <Link className={styles.readMore} to="/blog/denrim-forge-v1-0-6">
              Read the release notes →
            </Link>
          </article>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
