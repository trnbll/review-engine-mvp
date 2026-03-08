// Broader extraction that handles both numbered and unnumbered results
const fn = `(function() {
  const results = [];
  const seen = new Set();
  // Get all h3 elements in the main content
  const headings = document.querySelectorAll('main h3');
  headings.forEach(h => {
    const link = h.querySelector('a');
    if (!link) return;
    const href = link.href;
    // Only include yelp.com/biz/ links (actual business pages)
    if (!href.includes('/biz/')) return;
    // Skip sponsored/ad redirects
    if (href.includes('/adredir')) return;
    
    const name = link.textContent.trim();
    if (seen.has(name)) return;
    seen.add(name);
    
    const li = h.closest('li') || h.parentElement;
    const liText = li ? li.textContent : '';
    
    const ratingMatch = liText.match(/(\\d\\.\\d)\\s/);
    const rating = ratingMatch ? ratingMatch[1] : '';
    
    // Handle both "X reviews" and "X.Xk reviews"
    const reviewMatch = liText.match(/\\((\\d[\\d,.]*k?)\\s+reviews?\\)/);
    const reviewCount = reviewMatch ? reviewMatch[1] : '';
    
    // Clean URL
    const cleanUrl = href.split('?')[0];
    
    results.push({ name, rating, reviewCount, url: cleanUrl });
  });
  return JSON.stringify(results);
})()`;
console.log(fn);
