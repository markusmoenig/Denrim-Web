import React, { useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
const store = 'https://apps.apple.com/app/denrim-forge/id6767993560';
const forum = 'https://community.denrim.com';
const media = '/img/screenshots/forge/';
export default function Home() {
  const brokenLinks = useBrokenLinks();
  ['get-forge', 'gallery', 'features'].forEach(id => brokenLinks.collectAnchor(id));
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const gallery = [{
    file: 'forge_mac_robocat.png',
    name: translate({
      id: 'forge.home.robocat',
      message: 'RoboCat'
    }),
    category: 'models',
    detail: translate({
      id: 'forge.home.robocatDetail',
      message: 'A character with a little more character.'
    })
  }, {
    file: 'forge_mac_ogre.png',
    name: translate({
      id: 'forge.home.ogre',
      message: 'The friendly ogre'
    }),
    category: 'models',
    detail: translate({
      id: 'forge.home.ogreDetail',
      message: 'Simple shapes. A big personality.'
    })
  }, {
    file: 'forge_mac_chest.png',
    name: translate({
      id: 'forge.home.chest',
      message: 'Treasure chest'
    }),
    category: 'models',
    detail: translate({
      id: 'forge.home.chestDetail',
      message: 'A small prop, ready for a bigger adventure.'
    })
  }, {
    file: 'forge_mac_castle.png',
    name: translate({
      id: 'forge.home.castle',
      message: 'A pocket-sized kingdom'
    }),
    category: 'models',
    detail: translate({
      id: 'forge.home.castleDetail',
      message: 'From a handful of shapes to a miniature castle.'
    })
  }, {
    file: 'forge_mac_smartuv.png',
    name: translate({
      id: 'forge.home.uv',
      message: 'Every face in its place'
    }),
    category: 'workflow',
    detail: translate({
      id: 'forge.home.uvDetail',
      message: 'Unwrap, arrange, and paint your UVs.'
    })
  }, {
    file: 'forge_castle_printed.jpg',
    name: translate({
      id: 'forge.home.print',
      message: 'From screen to shelf'
    }),
    category: 'prints',
    detail: translate({
      id: 'forge.home.printDetail',
      message: 'The Forge castle, brought to life as a 3D print.'
    })
  }];
  const filters = [['all', translate({
    id: 'forge.home.all',
    message: 'All work'
  })], ['models', translate({
    id: 'forge.home.models',
    message: 'Models'
  })], ['workflow', translate({
    id: 'forge.home.workflow',
    message: 'In the editor'
  })], ['prints', translate({
    id: 'forge.home.prints',
    message: '3D prints'
  })]];
  const features = [['01', translate({
    id: 'forge.home.model',
    message: 'Shape your idea'
  }), translate({
    id: 'forge.home.modelBody',
    message: 'Start with primitives or SVG artwork. Extrude, inset, bevel, and refine directly in the viewport, with snapping and numeric controls when precision matters.'
  })], ['02', translate({
    id: 'forge.home.paint',
    message: 'Make it your own'
  }), translate({
    id: 'forge.home.paintBody',
    message: 'Unwrap UVs, arrange islands, add PBR materials, and paint textures. Bring color and detail to your model in the same workspace.'
  })], ['03', translate({
    id: 'forge.home.animate',
    message: 'Set it in motion'
  }), translate({
    id: 'forge.home.animateBody',
    message: 'Build object hierarchies and animate position, rotation, and scale. Create clips, edit keyframes, and give your creations a life of their own.'
  })], ['04', translate({
    id: 'forge.home.export',
    message: 'Take it further'
  }), translate({
    id: 'forge.home.exportBody',
    message: 'Export to game engines, renderers, or your 3D-printing workflow. Work with GLB, OBJ, USDZ, STL, and PNG, including animated GLB exports.'
  })]];
  const faq = [[translate({
    id: 'forge.home.platformQ',
    message: 'Where can I get Forge?'
  }), translate({
    id: 'forge.home.platformA',
    message: 'Forge is available now on the App Store for macOS and iPadOS. Windows, Linux, and Android versions are in development. Their download links will appear here when they are ready.'
  })], [translate({
    id: 'forge.home.demoQ',
    message: 'Is there a desktop demo?'
  }), translate({
    id: 'forge.home.demoA',
    message: 'A downloadable demo is planned for Windows and Linux. It is not available yet. Follow the News page or the Forum for release announcements.'
  })], [translate({
    id: 'forge.home.beginnerQ',
    message: 'Is Forge a good place to start with 3D?'
  }), translate({
    id: 'forge.home.beginnerA',
    message: 'Forge brings the essential modeling steps into a focused workspace. Start with simple shapes and use the contextual help built into the tools, alongside the manual and community tutorials.'
  })], [translate({
    id: 'forge.home.shareQ',
    message: 'Where can I share what I make?'
  }), translate({
    id: 'forge.home.shareA',
    message: 'Visit the Forum to post your models in Showcase, ask questions, share tutorials, and discuss ideas with other Forge artists.'
  })]];
  function openImage(item) {
    setSelected(item);
    dialog.current.showModal();
  }
  return <Layout title={translate({
    id: 'forge.home.title',
    message: 'Low-poly modeling, from idea to motion'
  })} description={translate({
    id: 'forge.home.description',
    message: 'Meet Denrim: Forge. Model, UV, paint, and animate in one focused 3D workspace. Available for Mac and iPad. Windows, Linux, and Android coming soon.'
  })} noFooter>
    <main className={styles.home}>
      <section className={styles.hero} aria-labelledby="forge-title">
        <img className={styles.banner} src="/img/forge-banner.png" width="2172" height="724" alt={translate({
          id: 'forge.home.bannerAlt',
          message: 'Denrim: Forge — Low Poly Modeling Tool'
        })} fetchPriority="high" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{translate({
              id: 'forge.home.eyebrow',
              message: 'A little imagination. A world of possibilities.'
            })}</p>
          <h1 id="forge-title">{translate({
              id: 'forge.home.headline',
              message: 'Make something'
            })}{' '}<em>{translate({
                id: 'forge.home.headlineAccent',
                message: 'uniquely yours.'
              })}</em></h1>
          <p className={styles.lead}>{translate({
              id: 'forge.home.lead',
              message: 'Model, UV, paint, and animate. One focused 3D workspace for game props, playful characters, and things you can hold in your hands.'
            })}</p>
          <div className={styles.actions}><a className={styles.primary} href="#get-forge">{translate({
                id: 'forge.home.get',
                message: 'Get Forge'
              })} <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="#gallery">{translate({
                id: 'forge.home.explore',
                message: 'Explore the gallery'
              })} <span aria-hidden="true">↓</span></a></div>
          <p className={styles.availability}><span aria-hidden="true" />{translate({
              id: 'forge.home.available',
              message: 'Available now for Mac and iPad'
            })}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.downloadSection}`} id="get-forge" aria-labelledby="download-title">
        <div className={styles.motion}>
          <div className={styles.sectionLabel}><span className={styles.eyebrow}>{translate({
                id: 'forge.home.motionLabel',
                message: 'Made in Forge'
              })}</span><span>{translate({
                id: 'forge.home.motionTag',
                message: 'Model → paint → animate'
              })}</span></div>
          <video controls playsInline preload="none" poster={`${media}forge_mac_robocat.png`} aria-label={translate({
            id: 'forge.home.videoLabel',
            message: 'Watch RoboCat walking, animated in Denrim: Forge'
          })}><source src={`${media}forge_cat_walk_h264_v2.mp4`} type="video/mp4" /></video>
          <div className={styles.caption}><strong>{translate({
                id: 'forge.home.motionTitle',
                message: 'Big ideas start with simple shapes.'
              })}</strong><a href="https://www.youtube.com/@DenrimApps">{translate({
                id: 'forge.home.watch',
                message: 'More videos'
              })} ↗</a></div>
        </div>
        <div className={styles.downloads}>
          <p className={styles.eyebrow}>{translate({
              id: 'forge.home.downloadLabel',
              message: 'Your next creation starts here'
            })}</p>
          <h2 id="download-title">{translate({
              id: 'forge.home.downloadTitle',
              message: 'Get Denrim: Forge'
            })}</h2>
          <div className={styles.apple}><div><h3>{translate({
                  id: 'forge.home.apple',
                  message: 'Mac & iPad'
                })}</h3><p>{translate({
                  id: 'forge.home.appleBody',
                  message: 'Native apps. Your projects, connected with iCloud.'
                })}</p></div><a href={store}><img src="/img/appstore-white.svg" width="150" height="50" alt={translate({
                id: 'forge.home.appstore',
                message: 'Download Denrim: Forge on the App Store'
              })} /></a></div>
          <div className={styles.future}><div><h3>{translate({
                  id: 'forge.home.desktop',
                  message: 'Windows & Linux'
                })}</h3><p>{translate({
                  id: 'forge.home.desktopBody',
                  message: 'Desktop apps + downloadable demo'
                })}</p></div><span>{translate({
                id: 'forge.home.soon',
                message: 'Coming soon'
              })}</span></div>
          <div className={styles.future}><div><h3>{translate({
                  id: 'forge.home.android',
                  message: 'Android'
                })}</h3><p>{translate({
                  id: 'forge.home.androidBody',
                  message: 'Coming to Google Play'
                })}</p></div><span>{translate({
                id: 'forge.home.soon',
                message: 'Coming soon'
              })}</span></div>
          <Link className={styles.newsLink} to="/blog">{translate({
              id: 'forge.home.releaseNews',
              message: 'Follow development & release news'
            })} ↗</Link>
        </div>
      </section>

      <section className={styles.section} id="gallery" aria-labelledby="gallery-title">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{translate({
                id: 'forge.home.galleryEyebrow',
                message: 'Made with Denrim: Forge'
              })}</p><h2 id="gallery-title">{translate({
                id: 'forge.home.galleryTitle',
                message: 'Small polygons. Big possibilities.'
              })}</h2></div><a href={`${forum}/c/showcase/5`}>{translate({
              id: 'forge.home.showcase',
              message: 'Visit the Showcase'
            })} ↗</a></div>
        <div className={styles.filters} role="group" aria-label={translate({
          id: 'forge.home.filterLabel',
          message: 'Filter gallery'
        })}>{filters.map(([id, label]) => <button type="button" key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}</div>
        <div className={styles.gallery}>{gallery.filter(item => filter === 'all' || item.category === filter).map(item => <button className={styles.galleryItem} key={item.file} onClick={() => openImage(item)} aria-label={`${translate({
            id: 'forge.home.view',
            message: 'View'
          })} ${item.name}`}><div className={styles.imageWrap}><img src={`${media}${item.file}`} alt={item.name} loading="lazy" width="960" height="600" /><span aria-hidden="true">↗</span></div><div className={styles.galleryCaption}><h3>{item.name}</h3><p>{item.detail}</p></div></button>)}</div>
        <p className={styles.galleryNote}>{translate({
            id: 'forge.home.galleryNote',
            message: 'Your next project belongs here. Share what you make on the Forum.'
          })} <a href={forum}>{translate({
              id: 'forge.home.join',
              message: 'Join the community'
            })} ↗</a></p>
      </section>

      <section className={`${styles.section} ${styles.features}`} id="features" aria-labelledby="features-title"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>{translate({
                id: 'forge.home.featureEyebrow',
                message: 'One app. From first shape to final asset.'
              })}</p><h2 id="features-title">{translate({
                id: 'forge.home.featureTitle',
                message: 'Stay in the creative flow.'
              })}</h2></div><Link to="/docs/denrim_forge/getting-started">{translate({
              id: 'forge.home.manual',
              message: 'Explore the manual'
            })} ↗</Link></div><div className={styles.featureGrid}>{features.map(([number, title, body]) => <article key={number}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section className={`${styles.section} ${styles.community}`} aria-labelledby="community-title"><img src="/img/forge-icon.png" width="100" height="100" alt="" loading="lazy" /><div><p className={styles.eyebrow}>{translate({
              id: 'forge.home.communityEyebrow',
              message: 'Better when we create together'
            })}</p><h2 id="community-title">{translate({
              id: 'forge.home.communityTitle',
              message: 'Meet your fellow makers.'
            })}</h2><p>{translate({
              id: 'forge.home.communityBody',
              message: 'Show your work. Ask a question. Share a technique. The Forge Forum is a home for your creations and conversations worth coming back to.'
            })}</p></div><a className={styles.primary} href={forum}>{translate({
            id: 'forge.home.forum',
            message: 'Visit the Forum'
          })} ↗</a></section>

      <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title"><div><p className={styles.eyebrow}>{translate({
              id: 'forge.home.faqEyebrow',
              message: 'A few things to know'
            })}</p><h2 id="faq-title">{translate({
              id: 'forge.home.faq',
              message: 'Questions?'
            })}</h2><Link to="/support">{translate({
              id: 'forge.home.support',
              message: 'Get in touch'
            })} ↗</Link></div><div>{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
      <footer className={styles.footer}><a className={styles.footerBrand} href="#"><img src="/img/forge-icon.png" alt="" width="32" height="32" />Denrim: Forge</a><nav aria-label={translate({
          id: 'forge.home.footerNav',
          message: 'Footer'
        })}><Link to="/docs/denrim_forge/getting-started">{translate({
              id: 'forge.home.manualShort',
              message: 'Manual'
            })}</Link><a href={forum}>{translate({
              id: 'forge.home.forumShort',
              message: 'Forum'
            })}</a><a href="https://discord.gg/PYknqQ2RBD">Discord</a><a href="https://www.youtube.com/@DenrimApps">YouTube</a><Link to="/noise">Denrim: Noise</Link><Link to="/privacy">{translate({
              id: 'forge.home.privacy',
              message: 'Privacy'
            })}</Link><Link to="/support">{translate({
              id: 'forge.home.supportShort',
              message: 'Support'
            })}</Link></nav><small>© {new Date().getFullYear()} Markus Moenig</small></footer>
      <dialog className={styles.lightbox} ref={dialog} aria-labelledby="image-title" onClick={event => {
        if (event.target === event.currentTarget) dialog.current.close();
      }}><button autoFocus className={styles.close} onClick={() => dialog.current.close()} aria-label={translate({
          id: 'forge.home.close',
          message: 'Close image'
        })}>×</button>{selected && <figure><img src={`${media}${selected.file}`} alt={selected.name} /><figcaption id="image-title">{selected.name} <span>{selected.detail}</span></figcaption></figure>}</dialog>
    </main>
  </Layout>;
}
