// Default elements to hide with labels
const defaultHiddenElements = [
  { selector: 'a[aria-label="Home"]', label: 'Home Section', enabled: true },
  { selector: 'a[aria-label="Discover"]', label: 'Discover Section', enabled: true },
  { selector: 'a[aria-label="Spaces"]', label: 'Spaces Section', enabled: true },
  { selector: 'div.h-14.items-stretch', label: 'Download Bar', enabled: true },
  { selector: 'div.pb-md.hidden.md\\:block', label: 'Footer Links', enabled: true },
  { selector: 'div.absolute.w-full', label: 'News Section', enabled: true },
  { selector: 'div:has(> div > div > div > div.px-sm.py-1\\.5)', label: 'Pro Search Bar', enabled: true },
  { 
    selector: 'div:has(> div > div > svg.fa-images)', 
    label: 'Image Search Bar', 
    enabled: true 
  },
  { 
    selector: 'div:has(> div > div > svg.fa-film)', 
    label: 'Video Search Bar', 
    enabled: true 
  },
  { 
    selector: 'div:has(> div > div > svg.fa-message-image)', 
    label: 'Image Generation Bar', 
    enabled: true 
  },
]; 