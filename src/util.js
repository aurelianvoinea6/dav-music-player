import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return[
        {
            name: "Lose Her Way",
            artist: "C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#3C3F2A', '#718174'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31589',
        },
        {
            name: "Riverside",
            artist: "Swum, G Mills",
            cover: "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#D7C9AE', '#22241D'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30140',
        },
         {
            name: "Santiago",
            artist: "Psalm Trees, Moods",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#A4BCC7', '#79787C'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30202',
        },
         {
            name: "Just to Make Sure",
            artist: "Taro",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#A4BCC7', '#79787C'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30109',
        },
        {
            name: "Tropical Midnight",
            artist: "C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#3C3F2A', '#718174'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516',
        },
        //more coming soon
    ];
}

export default chillHop;