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
            "header": "",
            "text": "## AI can create amazing art, but it learned from humans artists.\n**So what's fair, creative, and ethical in this new world?**\nClick the dots to explore more. Click arrows to go back",
            "background_color": "#c9dfed",
            hotspots: [
                {
                    "x": 26.06,
                    "y": 52.81,
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
                    "label_y": -37,
                    "palette": "blue"
                },
                {
                    "x": 73.62,
                    "y": 52.81,
                    "label": "AI and Ethics",
                    "target_id": "steal-main",
                    "label_x": -29,
                    "label_y": -33,
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
            "background_color": "#4da2c6",
            "hotspots": [
                {
                    "x": 78.34,
                    "y": 27.08,
                    "label": "Images into Math",
                    "target_id": "artist-1",
                    "label_x": -68,
                    "label_y": -30,
                    "palette": "amber"
                },
                {
                    "x": 70.05,
                    "y": 50.21,
                    "label": "New Images from Patterns",
                    "target_id": "artist-2",
                    "label_x": -85,
                    "label_y": 36,
                    "palette": "amber"
                },
                {
                    "x": 80.07,
                    "y": 77.45,
                    "label": "Trained on Patterns",
                    "target_id": "artist-3",
                    "label_x": -61,
                    "label_y": 39,
                    "palette": "amber"
                }
            ]
        },
        {
            "id": "artist-1",
            "layout": "two-column",
            "img_url": "https://images.code.org/22b375c96fd62d84a444e611d686d9e6-artist-1.jpg",
            "header": "",
            "text": "The AI scans huge collections of images to notice repeated shapes, colors, textures, and layouts.",
            "return_id_link": "artist-main",
            "alt_text": "Artist 1",
            "background_color": "#4da2c6"
        },
        {
            "id": "artist-2",
            "layout": "two-column",
            "img_url": "https://images.code.org/139dd1d7e45b246bf684d9741a5f1cf0-artist-2.jpg",
            "header": "",
            "text": "Instead of saving pictures, it adjusts mathematical settings based on patterns it sees again and again.",
            "return_id_link": "artist-main",
            "alt_text": "Artist 2",
            "background_color": "#4da2c6"
        },
        {
            "id": "artist-3",
            "layout": "two-column",
            "img_url": "https://images.code.org/457750c6b087bb0de4974fcda374e5db-artist-3.jpg",
            "header": "",
            "text": "After training, it combines learned patterns to create something new, not a direct copy.",
            "return_id_link": "artist-main",
            "alt_text": "Artist 3",
            "background_color": "#4da2c6"
        },
        {
            "id": "patterns-main",
            "layout": "two-column",
            "img_url": "https://images.code.org/bedeea36ae8ce713dcd2eecacde5923e-patterns-main.jpg",
            "header": "Is AI creative?",
            "text": "When you look at a painting, you see a story.\nWhen an AI looks at that same painting, it sees **data patterns.**\nIt doesn't \"copy\" the person in the picture; it deconstructs the artist's unique \"recipe\" into digital ingredients",
            "return_id_link": "title-slide",
            "alt_text": "patterns alt text",
            "background_color": "#78909c",
            "hotspots": [
                {
                    "x": 86.05,
                    "y": 26.9,
                    "label": "Brushstroke Math",
                    "target_id": "patterns-1",
                    "label_x": -72,
                    "label_y": -31,
                    "palette": "purple"
                },
                {
                    "x": 18.2,
                    "y": 45.58,
                    "label": "Color Frequency",
                    "target_id": "patterns-2",
                    "label_x": -43,
                    "label_y": -35,
                    "palette": "purple"
                },
                {
                    "x": 81.03,
                    "y": 68.71,
                    "label": "Light & Contrast",
                    "target_id": "patterns-3",
                    "label_x": -75,
                    "label_y": -27,
                    "palette": "purple"
                }
            ]
        },
        {
            "id": "patterns-1",
            "layout": "two-column",
            "img_url": "https://images.code.org/65cba1ac9bb353b7fe8211855418e3c8-patterns-1.png",
            "header": "AI sees patterns in brushstroke size",
            "text": "The AI analyzes if strokes are long and smooth or short and 'dabbed' on.",
            "return_id_link": "patterns-main",
            "alt_text": "patterns 1",
            "background_color": "#78909c"
        },
        {
            "id": "patterns-2",
            "layout": "two-column",
            "img_url": "https://images.code.org/e63dca9e8cbf95ba6e90d2f6f51376dd-patterns-2.png",
            "header": "AI sees patterns in color frequency",
            "text": "AI tracks which colors appear most often and how they sit next to each other",
            "return_id_link": "patterns-main",
            "alt_text": "patterns 2",
            "background_color": "#78909c"
        },
        {
            "id": "patterns-3",
            "layout": "two-column",
            "img_url": "https://images.code.org/143d3c45c8700f599eed7dbb2dc1764c-patterns-3.png",
            "header": "AI sees patterns in light & dark areas",
            "text": "AI learns the specific way an artist uses shadows to create depth",
            "return_id_link": "patterns-main",
            "alt_text": "patterns 3",
            "background_color": "#78909c"
        },
        {
            "id": "steal-main",
            "layout": "two-column",
            "img_url": "https://images.code.org/59b9a4600edab90ab18c8b67ba97332a-steal-main.jpg",
            "header": "",
            "text": "Is AI ethical or is it stealing from artists?",
            "return_id_link": "title-slide",
            "alt_text": "steal alt text",
            "background_color": "#a64d79",
            "hotspots": [
                {
                    "x": 90.48,
                    "y": 33.07,
                    "label": "How to be more fair",
                    "target_id": "steal-1",
                    "label_x": -85,
                    "label_y": -30,
                    "palette": "red"
                },
                {
                    "x": 21.86,
                    "y": 71.96,
                    "label": "Artists inspired by other artists",
                    "target_id": "steal-2",
                    "label_x": -48,
                    "label_y": 44,
                    "palette": "red"
                },
                {
                    "x": 69.66,
                    "y": 76.25,
                    "label": "Art used without credit",
                    "target_id": "steal-3",
                    "label_x": 4,
                    "label_y": 37,
                    "palette": "red"
                }
            ]
        },
        {
            "id": "steal-1",
            "layout": "two-column",
            "img_url": "https://images.code.org/4541bc068adc37064dd52495e19b6204-steal-1.jpg",
            "header": "",
            "text": "Some artists worry their work was used for training without permission or credit.",
            "return_id_link": "steal-main",
            "alt_text": "steal 1",
            "background_color": "#a64d79"
        },
        {
            "id": "steal-2",
            "layout": "two-column",
            "img_url": "https://images.code.org/a3946126046b4dc174bc7d6bbdb33161-steal-2.jpg",
            "header": "",
            "text": "Others argue AI art is inspired by patterns, similar to how human artists learn from each other.",
            "return_id_link": "steal-main",
            "alt_text": "steal 2",
            "background_color": "#a64d79"
        },
        {
            "id": "steal-3",
            "layout": "two-column",
            "img_url": "https://images.code.org/ce5eb635fdc58ae4150610c743fcf097-steal-3.jpg",
            "header": "",
            "text": "New ideas include giving credit, paying artists, or allowing creators to choose whether their work trains AI systems.",
            "return_id_link": "steal-main",
            "alt_text": "steal 3",
            "background_color": "#a64d79"
        }
    ]
}

console.log(initialConfig)
