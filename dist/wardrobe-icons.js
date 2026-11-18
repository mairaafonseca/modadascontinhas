const wardrobeIconDrawings = {
  all: `<path fill="none" d="M20 10c0-4 6-4 6 0 0 3-4 3-4 5v2"/>
        <path fill="#edbb92" d="M20 17c1-.8 3-.8 4 0l17 12c2 1.5 1 4-1 4H4c-2 0-3-2.5-1-4Z"/>
        <path fill="#fff8ed" d="m22 21 13 9H9z"/>`,
  dress: `<path fill="#e69bae" d="m14 6 4-1c0 7 8 7 8 0l4 1-1 8-3 4c2 5 6 11 9 17-9 4-17 4-26 0 3-6 7-12 9-17l-3-4z"/>
          <path fill="#f8c8cd" d="M18 17c3 1 5 1 8 0l1 4H17z"/>
          <path fill="none" stroke="#b97285" d="m19 24-3 11m9-11 3 11"/>`,
  top: `<path fill="#9bbfdc" d="m16 7-7 3-6 9 6 4 5-6-1 17c6 2 12 2 18 0l-1-17 5 6 6-4-6-9-7-3c-3 3-9 3-12 0Z"/>
        <path fill="#dbeaf4" d="M16 7c3 3 9 3 12 0-1 8-11 8-12 0Z"/>
        <path stroke="#688bab" fill="none" d="M16 31q6 2 12 0"/>`,
  pants: `<path fill="#b8a4cf" d="M12 6h20c2 8 3 18 3 31h-8l-5-19-5 19H9c0-13 1-23 3-31Z"/>
          <path fill="#ddd0e9" d="M12 6h20l1 5H11z"/>
          <path fill="none" stroke="#8c709f" d="M22 11v7m-9 0 3-4m15 4-3-4"/>`,
  shorts: `<path fill="#efad8e" d="M11 10h22l4 22q-7 3-13 1l-2-8-2 8q-6 2-13-1Z"/>
           <path fill="#f9cfb5" d="M11 10h22l1 5H10z"/>
           <path fill="none" stroke="#bd765d" d="M22 15v7m-10 3 4-5m16 5-4-5"/>`,
  skirt: `<path fill="#aacaa3" d="M15 10h14l10 23q-17 7-34 0Z"/>
          <path fill="#d5e8c4" d="M15 9h14v5H15z"/>
          <path fill="none" stroke="#709369" d="m18 19-4 15m8-15v17m4-17 4 15"/>`,
  hair: `<path fill="#da9f61" d="M10 17C9 8 16 5 23 6c1-3 7-4 11 0 4 3 4 8 3 13-1 7 0 11 3 13-1 5-7 6-11 1-3-4-3-7-3-11-4 3-10 3-15 1Z"/>
         <path fill="none" stroke="#ffddb0" d="M13 16q3-7 12-7m5-1q7 2 4 13-2 8 2 11"/>`,
  head: `<path fill="#cea1da" d="M20 18c-7-8-14-9-15-3-1 4-2 13 2 14 5 1 9-2 13-6m4-5c7-8 14-9 15-3 1 4 2 13-2 14-5 1-9-2-13-6"/>
         <path fill="none" stroke="#9b6ba7" d="m11 18 8 3m14-3-8 3"/>
         <rect x="18" y="16" width="8" height="9" rx="3" fill="#e8bbec"/>`,
  shoes: `<path fill="#e69bae" d="M8 10c4-1 7 1 8 5l2 10c2 5 1 9-4 10-6 1-10-2-9-8l1-12c0-3 1-4 2-5Zm19 1c4-2 7-1 9 2l3 11c2 7-1 10-7 11-5 0-7-3-7-8l1-12Z"/>
          <path fill="#fae8d8" d="M9 14q5-2 5 8H8zm20 0q5-3 7 7l-7 1z"/>`,
};
function wardrobeIcon(category, action) {
  const exported = {
    all: 'figma-closet.png',
    new: 'figma-icons/special-pieces.png',
    dress: 'figma-category-dress.png',
    top: 'figma-category-top.png',
    pants: 'figma-category-pants.png',
    shorts: 'figma-category-shorts.png',
    skirt: 'figma-category-skirt.png',
    hair: 'figma-category-hair.png',
    head: 'figma-category-head.png',
    shoes: 'figma-category-shoes.png'
  };
  if (action === 'back') return '<img class="wardrobe-icon" src="assets/figma-undo.png" alt="">';
  if (action === 'remove') return `<img class="wardrobe-icon" src="assets/figma-icons/btn_${category === 'shorts' ? 'shorts' : 'shirt'}_x.png" alt="">`;
  return `<img class="wardrobe-icon" src="assets/${exported[category] || exported.all}" alt="">`;
  /* Legacy vector shapes remain below as a safe fallback for older saved pages. */
  const badge = {
    remove: '<circle cx="35" cy="34" r="8" fill="#fff8ed"/><path fill="none" d="m32 31 6 6m0-6-6 6"/>',
    back: '<circle cx="33" cy="30" r="10" fill="#fff8ed"/><path fill="none" d="m31 26-4 4 4 4m-4-4h8q3 0 3 4"/>'
  };
  return `<svg class="wardrobe-icon" viewBox="0 0 44 44" width="38" height="38" aria-hidden="true" stroke="#725049" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${wardrobeIconDrawings[category]}${badge[action] ?? ''}</svg>`;
}
