let initialConfig = {
    slides: [
        {
            id: "title-slide",
            layout: "title",
            img_url: "https://images.code.org/1d353552973622ec7da5f2f055a2ac1b-test-img-1.png",
            alt_text: "Title background",
            header: "The Power of Generative AI",
            text: "Exploring how AI learns, creates, and impacts the world of art.",
            background_color: "rgba(77, 162, 198, 0.85)",
            return_id_link: "artist-home",
            hotspots: [
                {
                    "x": 50,
                    "y": 80,
                    "label": "Begin Exploration",
                    "target_id": "artist-home",
                    "label_x": -50,
                    "label_y": 20
                },
                {
                    "x": 20.55,
                    "y": 19.15,
                    "label": "New Hotspot",
                    "target_id": "",
                    "label_x": -30,
                    "label_y": -29
                },
                {
                    "x": 74.47,
                    "y": 15.76,
                    "label": "New Hotspot",
                    "target_id": "",
                    "label_x": -22,
                    "label_y": -33
                }
            ]
        },
        {
            id: "artist-home",
            layout: "two-column",
            img_url: "https://images.code.org/1d353552973622ec7da5f2f055a2ac1b-test-img-1.png",
            alt_text: "Alt text image 1",
            header: "Is AI fair or is it copying artists?",
            text: "AI studies billions of images to find patterns. Similar to how students read many books to learn writing styles.",
            background_color: "#4da2c6",
            return_id_link: "title-slide",
            hotspots: [
                {
                    "x": 69.01,
                    "y": 31.05,
                    "label": "Images Into Math",
                    "target_id": "artist-math",
                    "label_x": 30,
                    "label_y": -18
                },
                {
                    "x": 66.09,
                    "y": 50.03,
                    "label": "New images based on patterns",
                    "target_id": "artist-patterns",
                    "label_x": -100,
                    "label_y": -36
                },
                {
                    "x": 56.06,
                    "y": 80.03,
                    "label": "Trained on real art",
                    "target_id": "artist-real",
                    "label_x": 7,
                    "label_y": -32
                }
            ]
        },
        {
            id: "artist-math",
            layout: "two-column",
            img_url: "https://images.code.org/342749a60e60af943ad0b5d923f74d2d-artist-1.jpg",
            alt_text: "Alt text image 2",
            header: "Images into math",
            text: "The AI scans huge collections of images to notice repeated shapes, colors, textures, and layouts.",
            background_color: "#4da2c6",
            return_id_link: "artist-home"
        },
        {
            id: "artist-patterns",
            layout: "two-column",
            img_url: "https://images.code.org/3ee95308b63ecf3c079d25567fd8eefb-artist-2.jpg",
            alt_text: "Alt text image 3",
            header: "New images based on patterns",
            text: "Instead of saving pictures, it adjusts mathematical settings based on patterns it sees again and again.",
            background_color: "#4da2c6",
            return_id_link: "artist-home"
        },
        {
            id: "artist-real",
            layout: "two-column",
            img_url: "https://images.code.org/36b31147742ee46e36119f15cb4126ac-artist-3.jpg",
            alt_text: "Alt text image 3",
            header: "Trained on real art",
            text: "After training, it combines learned patterns to create something new, not a direct copy.",
            background_color: "#4da2c6",
            return_id_link: "artist-home"
        }
    ]
}

console.log(initialConfig)
