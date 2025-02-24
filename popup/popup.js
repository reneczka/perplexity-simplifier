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

// Add this at the beginning of the file
function updateDefaultElementsList() {
  const defaultList = document.getElementById('defaultElementsList');
  defaultList.innerHTML = '';

  chrome.storage.local.get('defaultElementsState', function(data) {
    // Initialize state from the defaultHiddenElements enabled property
    const defaultElementsState = data.defaultElementsState || 
      defaultHiddenElements.map(element => element.enabled);
    
    defaultHiddenElements.forEach((element, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'default-element-item';
      
      const label = document.createElement('span');
      label.className = 'default-element-label';
      label.textContent = element.label;
      
      const button = document.createElement('button');
      button.className = `toggle-btn ${defaultElementsState[index] ? 'active' : ''}`;
      button.title = defaultElementsState[index] ? 'Element is visible' : 'Element is hidden';
      button.addEventListener('click', () => toggleDefaultElement(index));
      
      itemDiv.appendChild(label);
      itemDiv.appendChild(button);
      defaultList.appendChild(itemDiv);
    });
  });
}

function toggleDefaultElement(index) {
  chrome.storage.local.get('defaultElementsState', function(data) {
    const defaultElementsState = data.defaultElementsState || 
      defaultHiddenElements.map(element => element.enabled);
    defaultElementsState[index] = !defaultElementsState[index];
    
    chrome.storage.local.set({defaultElementsState}, () => {
      updateDefaultElementsList();
      // Refresh the active tab to apply changes
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          chrome.tabs.reload(tabs[0].id);
        }
      });
    });
  });
}

// Initialize popup
document.addEventListener('DOMContentLoaded', function() {
  updateDefaultElementsList();
}); 