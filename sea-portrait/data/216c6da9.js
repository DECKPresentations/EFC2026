// Synthesis images per focus area (keyed by area number). Empty array = chip hidden.
window.SEA_SYNTHESIS = {
  1: [{ src: 'uploads/images-1790009419332-6iki.jpeg', key: 'synth1' }],
  2: { flip: true, images: [] },
  3: [{ src: 'uploads/images-1790009419294-fr6a.jpeg', key: 'synth3' }],
  4: [],
  5: [],
  6: []
};
window.synthesisFor = function (num) {
  const m = window.SEA_SYNTHESIS || {};
  const v = m[num] || m[String(num)] || [];
  if (Array.isArray(v)) return v.length ? { images: v } : null;
  return v;
};
