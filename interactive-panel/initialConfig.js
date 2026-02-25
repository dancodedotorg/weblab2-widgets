let initialConfig = {
    hotspotPalettes: {
        blue: { primary: "#217dbb", secondary: "#D6EAF8" },
        red: { primary: "#c0392b", secondary: "#FADBD8" },
        green: { primary: "#1e8449", secondary: "#D5F5E3" },
        orange: { primary: "#a04000", secondary: "#FDEBD0" },
        purple: { primary: "#76448a", secondary: "#EBDEF0" },
        yellow: { primary: "#9a7d0a", secondary: "#FCF3CF" },
        teal: { primary: "#117864", secondary: "#D1F2EB" },
        pink: { primary: "#880e4f", secondary: "#F8BBD0" },
        indigo: { primary: "#1a237e", secondary: "#C5CAE9" },
        brown: { primary: "#4e342e", secondary: "#D7CCC8" },
        grey: { primary: "#515a5a", secondary: "#E5E8E8" },
        black: { primary: "#17202a", secondary: "#D1D5D8" },
        white: { primary: "#7f8c8d", secondary: "#FDFEFE" },
        cyan: { primary: "#00838f", secondary: "#B2EBF2" },
        lime: { primary: "#558b2f", secondary: "#DCEDC8" },
        amber: { primary: "#ff8f00", secondary: "#FFECB3" }
    },
    "initialSlideId": "",
    "slides": [
        {
            "id": "title-slide",
            "layout": "quarter",
            "display": "top",
            "img_url": "https://images.code.org/76177ba9427c32cb0d2e01a0fae28332-title-1.jpg",
            "alt_text": "Decorative title image of a digital landscape",
            "header": "",
            "text": "## AI can create amazing art, but it learned from humans artists.\n\n**So what's fair, creative, and ethical in this new world?**\n\nClick the dots to explore more. Click arrows to go back",
            "background_color": "#c9dfed",
            hotspots: [
                {
                    "x": 19.07,
                    "y": 55.57,
                    "label": "AI and Fairness",
                    "target_id": "artist-main",
                    "label_x": -29,
                    "label_y": -30,
                    "palette": "blue"
                },
                {
                    "x": 49.79,
                    "y": 54.32,
                    "label": "AI and Creativity",
                    "target_id": "patterns-main",
                    "label_x": -40,
                    "label_y": -28,
                    "palette": "blue"
                },
                {
                    "x": 81.04,
                    "y": 53.06,
                    "label": "AI and Ethics",
                    "target_id": "steal-main",
                    "label_x": 20,
                    "label_y": -10,
                    "palette": "blue"
                }
            ]
        },
        {
            "id": "artist-main",
            "layout": "two-column",
            "img_url": "https://images.code.org/234f1614f8c038d8e61a9fc04c163fe4-artist-main.png",
            "header": "Is AI fair or is it copying artists?",
            "text": "AI studies billions of images to find patterns. \nSimilar to how students read many books to learn writing styles.",
            "return_id_link": "title-slide",
            "alt_text": "Artist alt text",
            "background_color": "#4da2c6"
        },
        {
            "id": "artist-1",
            "layout": "two-column",
            "img_url": "https://images.code.org/22b375c96fd62d84a444e611d686d9e6-artist-1.jpg",
            "header": "",
            "text": "The AI scans huge collections of images to notice repeated shapes, colors, textures, and layouts.\n",
            "return_id_link": "artist-main",
            "alt_text": "Artist 1",
            "background_color": "#4da2c6"
        }
    ]
}

console.log(initialConfig)
