# Interactive Panel

The Interactive Panel is a lightweight, responsive HTML slide viewer designed for creating interactive, presentation-like web experiences. It supports different layouts, markdown text rendering, and interactive hotspots that allow users to navigate between slides.

## Features
- **No Build Step Required**: Runs entirely in the browser using plain HTML, CSS, and vanilla JavaScript.
- **Multiple Layouts**: Supports `two-column`, `title`, and `quarter` layouts.
- **Markdown Support**: Uses [marked.js](https://marked.js.org/) to render markdown formatting in slide headers and text.
- **Interactive Hotspots**: Add clickable points to images that link to other slides. Includes customizable color palettes.
- **Responsive Design**: Scales seamlessly to fit different screen sizes while maintaining the aspect ratio.

## How to Use
1. **View the Presentation**: Open `index.html` in any modern web browser to view the interactive panel.
2. **Edit the Content**: All slide content, including images, text, layouts, and hotspots, is configured in the `initialConfig.js` file.
3. **Generate Hotspots**: Use the included `hotspot-tool.html` to visually place hotspots on your images and generate the corresponding JSON configuration.

## Files and Tools
- `index.html`: The main viewer application. Open this file to view the slides.
- `initialConfig.js`: The central configuration file where all presentation data is defined.
- `schema.md`: Documentation detailing the exact structure and schema of the `initialConfig` object.
- `hotspot-tool.html`: A visual editor to easily create and position hotspots.
- `marked-min.js`: A lightweight library to parse markdown into HTML.
- `slide_images/`: A directory for storing local image assets (if not using external URLs).

## Configuration Schema
For a complete guide on how to structure the `initialConfig.js` data, please refer to [schema.md](./schema.md).
