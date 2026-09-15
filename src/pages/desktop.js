import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './index.module.css';

const downloads = 'https://raw.githubusercontent.com/markusmoenig/DenrimForge-Releases/main/';
const checkout = 'https://buy.polar.sh/polar_cl_QrGz36bGvv8ifkf4jbN3mmBdibK6NBND7e3B324xMsL';

export default function Desktop() {
  return (
    <Layout title="3D Modeling for Windows & Linux — Free Demo" description="Download Denrim: Forge, a 3D modeling and editing app for Windows and Linux. Try the free demo; unlock saving and exporting on both for $14.99. Unlimited installs." noFooter>
      <main className={styles.home}>
        <section className={`${styles.section} ${styles.desktopHero}`}>
          <img src="/img/forge-icon.png" width="88" height="88" alt="" />
          <p className={styles.eyebrow}><Translate id="forge.desktop.eyebrow">Your desktop. Your next creation.</Translate></p>
          <h1><Translate id="forge.desktop.title">Forge for Windows & Linux</Translate></h1>
          <p className={styles.lead}><Translate id="forge.desktop.lead">Download the free demo and explore Forge’s modeling tools. When you’re ready, one purchase unlocks both platforms.</Translate></p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#downloads"><Translate id="forge.desktop.demo">Download the demo</Translate> ↓</a>
            <a className={styles.secondary} href={checkout}><Translate id="forge.desktop.buy">Unlock both for $14.99</Translate> ↗</a>
          </div>
        </section>

        <section className={`${styles.section} ${styles.desktopDownloads}`} id="downloads">
          <div className={styles.sectionHeading}><div>
            <p className={styles.eyebrow}><Translate id="forge.desktop.try">Try Forge for free</Translate></p>
            <h2><Translate id="forge.desktop.choose">Choose your download.</Translate></h2>
          </div></div>
          <p><Translate id="forge.desktop.limits">The demo has saving, exporting, and public uploads disabled. All downloads below are for x86-64 (64-bit Intel or AMD) computers.</Translate></p>
          <div className={styles.desktopCards}>
            <article>
              <h3>Windows</h3>
              <p><Translate id="forge.desktop.windowsInfo">Download the ZIP, extract it, and launch Forge.</Translate></p>
              <a className={styles.primary} href={`${downloads}denrim-forge-x86_64-pc-windows-msvc.zip`}><Translate id="forge.desktop.windowsDownload">Download Windows demo</Translate> ↓</a>
              <small>ZIP · x86-64</small>
            </article>
            <article>
              <h3>Linux</h3>
              <p><Translate id="forge.desktop.linuxInfo">Choose the Debian/Ubuntu package or the portable archive.</Translate></p>
              <a className={styles.primary} href={`${downloads}denrim-forge_amd64.deb`}><Translate id="forge.desktop.debDownload">Download Linux .deb</Translate> ↓</a>
              <a className={styles.secondary} href={`${downloads}denrim-forge-x86_64-unknown-linux-gnu.tar.gz`}><Translate id="forge.desktop.archiveDownload">Download Linux .tar.gz</Translate> ↓</a>
              <small>x86-64</small>
            </article>
          </div>
          <p className={styles.galleryNote}><a href="https://github.com/markusmoenig/DenrimForge-Releases"><Translate id="forge.desktop.repository">View all downloads and SHA-256 checksums on GitHub</Translate> ↗</a></p>
        </section>

        <section className={`${styles.section} ${styles.desktopPurchase}`}>
          <div>
            <p className={styles.eyebrow}><Translate id="forge.desktop.full">Make it yours</Translate></p>
            <h2><Translate id="forge.desktop.oneLicense">One license. Both platforms.</Translate></h2>
            <p><Translate id="forge.desktop.purchaseBody">Unlock saving, exporting, and public uploads in the demo you already installed. Your desktop license covers Windows and Linux with unlimited installs.</Translate></p>
            <p><Translate id="forge.desktop.activation">After purchasing through Polar, open “Demo — Unlock” in Forge, enter your license key, and choose “Activate License”.</Translate></p>
            <p className={styles.galleryNote}><Translate id="forge.desktop.appleSeparate">Mac and iPad versions are sold separately on the App Store. Android is coming soon.</Translate></p>
          </div>
          <div className={styles.desktopPrice}>
            <strong>$14.99 <small>USD</small></strong>
            <p><Translate id="forge.desktop.once">One-time purchase · Unlimited installs</Translate></p>
            <a className={styles.primary} href={checkout}><Translate id="forge.desktop.checkout">Unlock Forge Desktop</Translate> ↗</a>
            <a href="https://polar.sh/denrim-forge/portal"><Translate id="forge.desktop.license">Already purchased? Find your license</Translate></a>
          </div>
        </section>
        <footer className={styles.footer}>
          <Link className={styles.footerBrand} to="/">Denrim: Forge</Link>
          <nav aria-label="Footer">
            <Link to="/docs/denrim_forge/getting-started"><Translate id="forge.desktop.manual">Manual</Translate></Link>
            <a href="https://community.denrim.com"><Translate id="forge.desktop.forum">Forum</Translate></a>
            <Link to="/support"><Translate id="forge.desktop.support">Support</Translate></Link>
            <Link to="/privacy"><Translate id="forge.desktop.privacy">Privacy</Translate></Link>
          </nav>
        </footer>
      </main>
    </Layout>
  );
}
