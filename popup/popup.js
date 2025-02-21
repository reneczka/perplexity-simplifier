// Function to update the list of hidden elements in the popup
function updateHiddenElementsList() {
  const list = document.getElementById('hiddenElementsList');
  list.innerHTML = '';

  chrome.storage.local.get('hiddenElements', function(data) {
    const hiddenElements = data.hiddenElements || [];
    
    hiddenElements.forEach((selector, index) => {
      const li = document.createElement('li');
      li.className = 'hidden-element';
      
      const selectorText = document.createElement('span');
      selectorText.textContent = selector;
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.onclick = () => removeSelector(index);
      
      li.appendChild(selectorText);
      li.appendChild(removeButton);
      list.appendChild(li);
    });
  });
}

// Function to remove a selector
function removeSelector(index) {
  chrome.storage.local.get('hiddenElements', function(data) {
    const hiddenElements = data.hiddenElements || [];
    hiddenElements.splice(index, 1);
    chrome.storage.local.set({hiddenElements}, () => {
      updateHiddenElementsList();
      // Refresh the active tab to remove the hiding
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    });
  });
}

// Add new selector
document.addEventListener('DOMContentLoaded', function() {
  // Update the list when popup opens
  updateHiddenElementsList();

  // Handle adding new selectors
  document.getElementById('addSelector').addEventListener('click', function() {
    const selectorInput = document.getElementById('selector');
    const selector = selectorInput.value.trim();
    
    if (selector) {
      chrome.storage.local.get('hiddenElements', function(data) {
        const hiddenElements = data.hiddenElements || [];
        hiddenElements.push(selector);
        chrome.storage.local.set({hiddenElements}, () => {
          selectorInput.value = '';
          updateHiddenElementsList();
          // Refresh the active tab to apply the hiding
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (tabs[0]) {
              chrome.tabs.reload(tabs[0].id);
            }
          });
        });
      });
    }
  });
}); 