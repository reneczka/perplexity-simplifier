// Default elements to hide with labels
const defaultHiddenElements = [
  { selector: 'a[aria-label="Home"]', label: 'Home Section', enabled: true },
  { selector: 'a[aria-label="Discover"]', label: 'Discover Section', enabled: true },
  { selector: 'a[aria-label="Spaces"]', label: 'Spaces Section', enabled: true },
  {
    selector: 'a[aria-label="Library"], div.mb-md.mt-xs.space-y-xs.border-borderMain\\/50',
    label: 'Library History',
    enabled: true
  },
  { selector: 'div.h-14.items-stretch', label: 'Download Bar', enabled: true },
  { selector: 'div.pb-md.hidden.md\\:block', label: 'Footer Links', enabled: true },
  { selector: 'div.absolute.w-full', label: 'News Section', enabled: true },
  { selector: 'div[data-test-id]', label: 'Pro Search Bar', enabled: true },
  {
    selector: 'div.flex.border-borderMain\\/50.bg-transparent:has(.dark\\:border-borderMainDark\\/50)',
    label: 'Sources Section',
    enabled: true
  },
  {
    selector: 'div:has(> div.divide-y.border-t.border-borderMain\\/50.ring-borderMain\\/50.divide-borderMain\\/50.dark\\:divide-borderMainDark\\/50.dark\\:ring-borderMainDark\\/50.dark\\:border-borderMainDark\\/50.bg-transparent)',
    label: 'Related Section',
    enabled: true
  },
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