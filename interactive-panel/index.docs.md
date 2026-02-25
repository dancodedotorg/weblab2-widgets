# Interactive Panel Documentation

This tool is a responsive, single-page interactive slide presentation that maintains a 16:9 aspect ratio. It is designed to fit on Chromebook screens and remains functional down to 700x420 px.

## Features
- **Responsive 16:9 Layout**: Uses CSS `aspect-ratio` to maintain proper proportions.
- **Dynamic Content**: Loads slide data from `initialConfig.js`.
- **Hash-based Navigation**: Slide state is tracked in the URL hash for bookmarking.
- **Return Navigation**: Each slide features a return arrow linked to a configurable "home" or "previous" slide.

## Data Model Scaling Suggestions

As you add more features, consider these improvements to `initialConfig.js`:

### 1. Interactive Hotspots
To add overlay links to images, add a `hotspots` array to each slide object:
```javascript
{
    id: "main-slide",
    img_url: "...",
    hotspots: [
        { x: 10, y: 20, width: 5, height: 5, link_id: "detail-slide-1" },
        { x: 50, y: 50, width: 10, height: 10, link_id: "detail-slide-2" }
    ]
}
```

### 2. Layout Types
Introduce a `layout` property to support different visual arrangements:
- `split-left-image` (Current)
- `split-right-image`
- `full-image-overlay`
- `centered-content`

### 3. Transitions
Add a `transition` property to handle entry/exit animations per slide:
```javascript
{
    id: "test-1",
    transition: "fade" // or "slide-in", "zoom"
}
```

### 4. Global Settings
Add a `settings` object to `initialConfig` for global themes, default return links, or autoplay features.
