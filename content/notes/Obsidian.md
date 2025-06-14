---
title: "Obsidian Tips & Tricks"
description: "Snippets that improve the experience of Obsidian without adding any plugins."
tags: 
- productivity
---

I tend to avoid as much as possible the use of libraries and plugins in my life that I am also applying it to my journey in Obsidian where possible.

In this node, I will be adding **scripts** & **CSS** snippets that improve my notes in [Obsidian](https://obsidian.md/).

## Adaptive Images

This is a [snippet I found on Obsidian's forums](https://forum.obsidian.md/t/auto-adaptive-images-for-dark-light-theme/13494), it uses CSS to invert the colors of images based on what theme you're previewing a document. I have modified it a bit to support images added using: `![alt text](./src/img.jpg)` markdown synthax.

```css
.theme-dark img {
    display: block;
    max-width: 80%;
    padding: 0 auto 0 auto;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    mix-blend-mode: screen;
    filter: opacity(1);
}

.theme-light img {
    display: block;
    max-width: 80%;
    padding: 0 auto 0 auto;
    outline: none;
    margin-left: auto;
    margin-right: auto;
    mix-blend-mode: multiply;
    filter: opacity(0.95);
}

/*Emblemed images blending tweaks */

.theme-dark .popover.hover-popover .markdown-preview-view img {
    mix-blend-mode: screen;
    filter: opacity(1);
}

.theme-light .popover.hover-popover .markdown-preview-view img {
    mix-blend-mode: multiply;
    filter: opacity(0.95);
}

/* Image dynamic colors inversion */

.theme-dark .image-embed[src$="#invert_B"] img {
  filter: invert(1) hue-rotate(180deg);
}

.theme-dark .image-embed[src$="#invert_W"] img {
  filter: invert(1) hue-rotate(180deg);
}

.theme-dark .image-embed[src$="invert_B_C"] img {
  filter: invert(1) hue-rotate(180deg) contrast(1.5);
}

.theme-dark .image-embed[src$="#invert_W_C"] img {
  filter: invert(1) hue-rotate(180deg) contrast(1.45);
}
```