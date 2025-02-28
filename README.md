# Perplexity UI Customizer

A Chrome extension that allows users to customize their Perplexity AI interface by selectively hiding UI elements. Users can toggle various interface components to create a cleaner, more focused experience while using Perplexity AI.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)

## About the Project

The Perplexity UI Customizer is designed to enhance the user experience on Perplexity AI by providing granular control over the visibility of interface elements. Users can hide or show various components based on their preferences, creating a more personalized and distraction-free environment.

## Features

- **Toggle Controls**: Easy-to-use toggle buttons for each UI element
- **Persistent Settings**: User preferences are saved and maintained between sessions
- **Responsive Design**: Works seamlessly across different screen sizes
- **Real-time Updates**: Interface changes are applied immediately

## Technologies Used

- **JavaScript**: Core extension functionality and DOM manipulation
- **Chrome Extension APIs**: 
  - Storage API for saving user preferences
  - Content Scripts for page modifications
- **CSS**: Custom styling for the popup interface
- **HTML**: Popup interface structure

## Project Structure

```
perplexity-customizer/
├── manifest.json # Extension configuration and permissions
├── shared.js # Shared constants and element selectors
├── content.js # Content script for DOM manipulation
├── popup/
│ ├── popup.html # Extension popup interface
│ ├── popup.css # Popup styling
│ └── popup.js # Popup functionality and event handlers
└── icons/ # Extension icons in different sizes
├── favicon-16x16.png
├── favicon-32x32.png
└── apple-touch-icon.png
```

## Setup and Installation

To run this extension locally:

1. **Clone the repository**
   ```
   git clone https://github.com/reneczka/perplexity-simplifier.git
   cd perplexity-customizer
   ```

2. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" button
   - Select the project directory

3. **Visit Perplexity AI**
   - Go to [perplexity.ai](https://www.perplexity.ai)
   - Click the extension icon in your Chrome toolbar
   - Use the toggle switches to customize the interface

The extension will now be running locally and you can make changes to the code. After making changes, remember to:
1. Click the refresh icon on the extension card in `chrome://extensions/`
2. Refresh any open Perplexity AI tabs