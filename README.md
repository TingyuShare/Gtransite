# Translate Site

A Chrome extension to quickly translate the current website using Google Translate.

## Features

- One-click translation via toolbar icon
- Right-click context menu support
- 12+ language targets
- Remembers your language preference
- Clean, modern UI

## Installation (Development)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked"
4. Select the `translate-site` folder

## Usage

- **Toolbar**: Click the extension icon, select language, click "Translate"
- **Right-click**: Right-click anywhere on a page → "Translate this page"

## Chrome Web Store Submission Guide

### Step 1: Prepare Assets

Before submitting, you need to create icon files in `images/` folder:

| Icon | Required Size | Where Displayed |
|------|--------------|-----------------|
| `icon16.png` | 16x16px (PNG) | Toolbar |
| `icon32.png` | 32x32px (PNG) | Toolbar @2x |
| `icon48.png` | 48x48px (PNG) | Extension manager |
| `icon128.png` | 128x128px (PNG) | Store listing, installer |

**Note**: Also prepare `promo-icon.png` (128x128px) - used for promotional images.

### Step 2: Create Screenshots (Recommended)

- 1-5 screenshots at 1280x800px or 640x400px
- Show the extension in action
- Name: `screenshot1.png`, `screenshot2.png`, etc.

### Step 3: Upload

1. Go to [Chrome Developer Dashboard](https://developer.chrome.com/docs/webstore/)
2. Click "Add new item"
3. Upload a ZIP file containing:
   - manifest.json
   - background.js
   - popup.html
   - popup.js
   - _locales/en/messages.json
   - images/* (all icons)
4. Fill in store listing details

### Store Listing Tips

**Title**: Translate Site (max 45 chars)

**Short description** (max 132 chars):
> Instantly translate any website using Google Translate with one click or right-click.

**Detailed description**:
> Translate Site is a simpleChrome extension that brings Google Translate to your browser. Easily translate entire websites with a single click or right-click menu.

**Key features**:
- One-click translation via toolbar
- Right-click context menu
- 12+ language options
- Remembers your preferred language

**Category**: Productivity

### Privacy Practice

Since this extension:
- Only translates the URL you explicitly request
- Does not read page content
- Does not collect any data

You can select "Yes, the extension uses least sensitive permissions available" in the privacy practice questionnaire.

## License

MIT