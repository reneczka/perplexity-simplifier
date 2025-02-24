// Function to hide elements based on selector
function hideElements(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

// Function to show elements based on selector
function showElements(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.style.display = ''; // Reset to default display value
  });
}

// Function to apply all hidden element rules
function applyHiddenElements() {
  chrome.storage.local.get(['hiddenElements', 'defaultElementsState'], function(data) {
    const customHiddenElements = data.hiddenElements || [];
    // Initialize state from the defaultHiddenElements enabled property
    const defaultElementsState = data.defaultElementsState || 
      defaultHiddenElements.map(element => element.enabled);
    
    // Hide elements that are toggled off (inactive/gray state)
    defaultHiddenElements.forEach((element, index) => {
      if (!defaultElementsState[index]) {
        hideElements(element.selector);
      }
    });
    
    // Apply custom hidden elements
    customHiddenElements.forEach(selector => {
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