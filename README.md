**Note:** This README was generated based on the Loom video: [https://www.loom.com/share/c0dd48f07e3c4174ad595d858ae0e7c0?sid=ae54f746-a5fa-4eb9-acf8-163eb8a2d7d5](https://www.loom.com/share/c0dd48f07e3c4174ad595d858ae0e7c0?sid=ae54f746-a5fa-4eb9-acf8-163eb8a2d7d5)

# Shopify Section Preset Converter

## Overview

This repository provides a utility to convert Shopify section template JSON (object-of-objects format) into the preset format (array-of-objects format) required for Shopify section presets. This is especially useful for developers and designers who want the preset to look exactly like the designed section in Figma or the original template.

## Problem Statement

> All right, so this is a quick introduction to this repository.
>
> The problem is when we create a new section, we need the preset for this section that will look exactly the same as the actual section designers designed. So when we open this section here in preview and we want it to look exactly as it will look like on the page when we edit. And we want it to look like it was on the original Figma, like here on this page. That's how we want it to look like. To create a preset, it's not easy because we have the template for the page that actually has all the settings already, but the settings format is different from the one that we are using in the presets. In the presets we are using the array of blocks, while in the template we are using the object. Let's say the map of blocks. So what we want to do is we want to convert the template preset, I mean the template JSON file, into the preset.

## How It Works

1. **Copy the blocks object** from your template JSON (without the `block_order`, just the `blocks` object).
2. **Paste it into `blocks.json`** in this repository.
3. **Run the script:**
   ```sh
   npm start
   # or
   node index.js
   ```
4. The script will generate `output.json` with the correct preset format (array of blocks, no `block_order`).
5. **Copy the output** from `output.json` and paste it into your Shopify section preset.

> What we have to do is we have to copy, of course, the settings and the name of the presets, but the blocks, we just paste the whole output in here. And also we have the static blocks in this specific section. What it means is that somewhere in here, as we can see, we have the table header that is statically rendered here in the section, and it has the ID. So we have to paste this ID in here to fix the errors, but we'll not have all the sections with stuff like this. All right, we save it. Now we can reload the preview theme. And let's try to add the new section. And now we see that we have exactly the same section as we had in the original page.

## Script Details

- **index.js**: Reads `blocks.json`, transforms the structure (removes all `block_order` fields, converts all `blocks` fields to arrays of values), and writes the result to `output.json`.
- **blocks.json**: Input file. Paste your template's blocks object here.
- **output.json**: Output file. Copy the result for your Shopify preset.

## Example

See the Loom transcript in `Wuffes · Customize Development (830d08-Mac) · Shopify Plus - 2 June 2025.srt` for a step-by-step spoken walkthrough of the process.

---

Feel free to open issues or PRs for improvements!
