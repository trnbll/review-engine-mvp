// Extract business data from Yelp search results page via CDP
// This extracts from the current page's DOM

const extractJS = `
(function() {
  const results = [];
  // Each organic result is in a list item with an h3 containing a numbered heading
  const headings = document.querySelectorAll('h3');
  headings.forEach(h => {
    const text = h.textContent;
    // Match pattern like "1. Business Name"
    const match = text.match(/^\\d+\\.\\s+(.+)/);
    if (!match) return;
    const name = match[1].trim();
    const link = h.querySelector('a');
    const url = link ? link.href : '';
    
    // Find the parent listitem
    const li = h.closest('li') || h.parentElement;
    const liText = li ? li.textContent : '';
    
    // Extract rating - look for pattern like "4.8"
    const ratingMatch = liText.match(/(\\d\\.\\d)\\s/);
    const rating = ratingMatch ? ratingMatch[1] : '';
    
    // Extract review count
    const reviewMatch = liText.match(/\\((\\d+)\\s+reviews?\\)/);
    const reviewCount = reviewMatch ? reviewMatch[1] : '';
    
    results.push({ name, rating, reviewCount, url });
  });
  return JSON.stringify(results);
})()
`;

console.log(extractJS);
