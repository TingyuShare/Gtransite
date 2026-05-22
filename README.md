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

### Icons

Store accepts SVG icons directly. Current icon: `images/icon.svg`

If you want custom PNG icons instead, generate:

| Icon | Size |
|------|------|
| `icon16.png` | 16x16px |
| `icon32.png` | 32x32px |
| `icon48.png` | 48x48px |
| `icon128.png` | 128x128px |

Use [SVG to PNG converter](https://redketchup.io/vector-to-png) to generate PNGs from SVG.

### Screenshots (Recommended)

Create 1-5 screenshots at 1280x800px or 640x400px:

- Show language selection popup
- Show translated page result

### Upload

1. Go to [Chrome Developer Dashboard](https://developer.chrome.com/docs/webstore/)
2. Click "Add new item"
3. Upload a ZIP file containing all extension files
4. Fill in store listing details

### Store Listing

**Title**: Translate Site

**Short description** (max 132 chars):
> Instantly translate any website using Google Translate with one click or right-click.

**Detailed description**:
> Translate Site is a simple Chrome extension that brings Google Translate to your browser. Easily translate entire websites with a single click or right-click menu.

### Privacy Practice

This extension only redirects URLs to Google Translate service. It does not read page content or collect any data.

## License

MIT