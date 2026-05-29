const CAT_H = 56
const CAT_W = 63 // 315×280 aspect ratio

export function PixelCat() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/pixel-cat.gif"
      alt="pixel cat"
      width={CAT_W}
      height={CAT_H}
      style={{ imageRendering: 'pixelated' }}
    />
  )
}
