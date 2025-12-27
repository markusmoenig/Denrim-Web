import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Instruments for Visual Creation`}
      description="Denrim is a growing range of high-quality creative applications for visual artists. Each Denrim app is designed as a focused instrument for procedural visual creation, combining powerful systems with clear, intuitive workflows."
    >
      <main>
        {/* Carousel at the top */}
        <section
          style={{ padding: "2rem 1rem", maxWidth: "1000px", margin: "0 auto" }}
        >
          <img
            src={useBaseUrl("/img/social-card.png")}
            alt="Denrim"
            style={{
              width: "100%",
              borderRadius: "12px",
              // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "block",
            }}
          />
          <h1
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
              fontWeight: "700",
              color: "var(--ifm-color-primary)",
            }}
          >
            Instruments for Visual Creation
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginBottom: "2rem",
              color: "var(--ifm-font-color-secondary)",
            }}
          >
            Denrim is a growing range of high-quality creative applications for
            visual artists. Each Denrim app is designed as a focused instrument
            for procedural visual creation, combining powerful systems with
            clear, intuitive workflows.
          </p>
        </section>

        {/* Big screenshot section */}
        {/* <section
          style={{ padding: "2rem 1rem", maxWidth: "1000px", margin: "0 auto" }}
        >
          <img
            src={useBaseUrl("/img/screenshots/dungeon3d_iso.png")}
            alt="Dungeon3D Iso"
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              display: "block",
            }}
          />
        </section>*/}

        {/* Features in the middle */}
        <HomepageFeatures />

        {/* Banner at the bottom */}
        {/* <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
          <img
            src={bannerUrl}
            alt="Eldiron Banner"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "1000px",
              width: "100%",
              height: "auto",
            }}
          />
        </section>*/}
      </main>
    </Layout>
  );
}
