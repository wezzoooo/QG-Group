import React from 'react';

export default function ImageReveal({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} />;
}
