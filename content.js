// Function to hide elements based on selector
function hideElements(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

// Function to apply all hidden element rules
function applyHiddenElements() {
  // Default elements to hide
  const defaultHiddenElements = [
    // sidebar elements
    'a[aria-label="Home"]',
    'a[aria-label="Discover"]',
    'a[aria-label="Spaces"]',
    // download, x, discord sidebar
    'div.h-14.items-stretch',
    // footer links section
    'div.pb-md.hidden.md\\:block',
    // news section
    'div.absolute.w-full',
    // pro search reasoning bar
    'div:has(> div > div > div > div.px-sm.py-1\\.5)',
    
  ];
  
  chrome.storage.local.get('hiddenElements', function(data) {
    // Combine default elements with user-added elements
    const hiddenElements = [...defaultHiddenElements, ...(data.hiddenElements || [])];
    
    hiddenElements.forEach(selector => {
      hideElements(selector);
    });
  });
}

// Apply rules when DOM loads
document.addEventListener('DOMContentLoaded', applyHiddenElements);

// Also apply rules immediately in case DOM is already loaded
applyHiddenElements();

// Listen for changes in the DOM and reapply rules
const observer = new MutationObserver(applyHiddenElements);
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
}); 