# Slide Layout Schemas

This document defines the data structure for the different slide layouts supported by the Interactive Panel.

## Global Configuration

The `initialConfig` object in `initialConfig.js` supports these global properties:

| Property | Type | Description |
| :--- | :--- | :--- |
| `initialSlideId` | String | (Optional) The ID of the slide to display on load. |
| `hotspotPalettes`| Object | (Optional) Define custom color themes for hotspots. |
| `slides` | Array | A list of slide objects configuring each slide's content and layouts. |

### Hotspot Palettes
Each palette entry should have a `primary` (border/dot) and `secondary` (fill) color.

---

## Common Slide Properties

All slide objects share these basic properties:

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Unique identifier for the slide. |
| `layout` | String | The layout type: `"two-column"`, `"title"`, or `"quarter"`. |
| `return_id_link`| String | (Optional) The ID of the slide to navigate back to. |
| `hotspots` | Array | (Optional) List of hotspot objects. |

### Hotspot Object Schema
| Property | Type | Description |
| :--- | :--- | :--- |
| `x` | Number | X position in percentage (0-100). |
| `y` | Number | Y position in percentage (0-100). |
| `label` | String | Hover text for the hotspot. |
| `target_id` | String | Slide ID to jump to when clicked. |
| `label_x` | Number | (Optional) Horizontal pixel offset for the label. |
| `label_y` | Number | (Optional) Vertical pixel offset for the label. |
| `palette` | String | (Optional) The key of the palette defined in `hotspotPalettes`. |

---

## 1. Two-Column Layout (`layout: "two-column"`)
The default layout with an image on the left and text content on the right.

| Property | Description |
| :--- | :--- |
| `img_url` | Image displayed in the left column. |
| `alt_text` | Alt text for the image. |
| `header` | Title text in the right column. |
| `text` | Description text in the right column. |
| `background_color`| Background color of the right column. |

---

## 2. Title Slide Layout (`layout: "title"`)
A full-screen background image with a centered text overlay.

| Property | Description |
| :--- | :--- |
| `img_url` | Full-screen background image. |
| `alt_text` | Alt text for the image. |
| `header` | Large title text in the overlay panel. |
| `text` | Subtitle text in the overlay panel. |
| `background_color`| Background color of the translucent overlay panel. |

---

## 3. Quarter Layout (`layout: "quarter"`)
A text box occupying 1/4 of the screen, with the remaining 3/4 showing an image.

| Property | Description |
| :--- | :--- |
| `display` | Position of the text box: `"left"`, `"right"`, `"top"`, or `"bottom"`. |
| `img_url` | Image displayed in the 3/4 area. |
| `text` | Text content inside the box. |
| `header` | (Optional) Title text inside the box. |
| `background_color`| (Optional) Background color of the box. |
| `return_id_link` | If set, a back arrow appears in the bottom-right of the box. |
