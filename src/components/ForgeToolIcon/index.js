import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Decorative: the adjacent heading supplies the accessible tool name.
export default function ForgeToolIcon({name}) {
  return <img src={useBaseUrl(`/img/docs/forge/tools/${name}.png`)} alt="" width="32" height="32" loading="lazy" style={{float: 'left', marginRight: '0.65rem', marginBottom: '0.25rem'}} />;
}
