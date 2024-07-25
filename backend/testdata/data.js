const products = [
    {
        name: "Sekiro: Shadows Die Twice",
        image: "https://www.mobygames.com/images/covers/l/607739-sekiro-shadows-die-twice-playstation-4-front-cover.jpg",
        brand: "FromSoftware",
        quantity: 100,
        category: "66a0f0b78b81bbaee3549ae8", // RPG
        description: "A challenging action-adventure game with intense swordplay and a unique setting inspired by Sengoku-era Japan.",
        reviews: [],
        rating: 4.8,
        numReviews: 0,
        price: 59.99,
        countInStock: 80
    },
    {
        name: "Call of Duty: Black Ops II",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Call_of_Duty_Black_Ops_II_cover_art.jpg",
        brand: "Treyarch",
        quantity: 150,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A first-person shooter with a futuristic setting, branching storylines, and engaging multiplayer modes.",
        reviews: [],
        rating: 4.5,
        numReviews: 0,
        price: 29.99,
        countInStock: 100
    },
    {
        name: "Call of Duty: Black Ops",
        image: "https://upload.wikimedia.org/wikipedia/en/7/71/Call_of_Duty_Black_Ops.jpg",
        brand: "Treyarch",
        quantity: 150,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A first-person shooter set during the Cold War with a gripping single-player campaign and robust multiplayer.",
        reviews: [],
        rating: 4.4,
        numReviews: 0,
        price: 29.99,
        countInStock: 100
    },
    {
        name: "Call of Duty: Black Ops III",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Black_Ops_III_cover.jpg",
        brand: "Treyarch",
        quantity: 150,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A futuristic first-person shooter featuring a new campaign, enhanced multiplayer, and cooperative Zombies mode.",
        reviews: [],
        rating: 4.3,
        numReviews: 0,
        price: 39.99,
        countInStock: 100
    },
    {
        name: "Batman: Arkham Asylum",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Batman_-_Arkham_Asylum_Cover.jpg",
        brand: "Rocksteady Studios",
        quantity: 80,
        category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
        description: "An action-adventure game that brings players into the dark and immersive world of Gotham City.",
        reviews: [],
        rating: 4.7,
        numReviews: 0,
        price: 19.99,
        countInStock: 60
    },
    {
        name: "Batman: Arkham City",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Batman_Arkham_City_cover.jpg",
        brand: "Rocksteady Studios",
        quantity: 80,
        category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
        description: "A sequel to Arkham Asylum with a larger, open-world environment and a deeper storyline.",
        reviews: [],
        rating: 4.8,
        numReviews: 0,
        price: 29.99,
        countInStock: 60
    },
    {
        name: "Assassin's Creed IV: Black Flag",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Assassin%27s_Creed_IV_Black_Flag_cover.jpg",
        brand: "Ubisoft",
        quantity: 100,
        category: "66a0f0b78b81bbaee3549ae8", // RPG
        description: "An action-adventure game set during the Golden Age of Piracy, featuring naval exploration and swashbuckling combat.",
        reviews: [],
        rating: 4.6,
        numReviews: 0,
        price: 39.99,
        countInStock: 80
    },
    {
        name: "Bloodborne",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Bloodborne_cover_art.jpg",
        brand: "FromSoftware",
        quantity: 100,
        category: "66a0f0b78b81bbaee3549ae8", // RPG
        description: "A dark action RPG set in a gothic, Lovecraftian world with fast-paced combat and a mysterious story.",
        reviews: [],
        rating: 4.9,
        numReviews: 0,
        price: 59.99,
        countInStock: 70
    },
    {
        name: "Metro Exodus",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Metro_Exodus_cover.jpg",
        brand: "4A Games",
        quantity: 80,
        category: "66a0f0a58b81bbaee3549ae4", // Open-World
        description: "A post-apocalyptic shooter with a rich narrative, expansive environments, and dynamic weather systems.",
        reviews: [],
        rating: 4.8,
        numReviews: 0,
        price: 59.99,
        countInStock: 60
    },
    {
        name: "Metro 2033",
        image: "https://upload.wikimedia.org/wikipedia/en/4/48/Metro_2033_cover.jpg",
        brand: "4A Games",
        quantity: 80,
        category: "66a0f0a58b81bbaee3549ae4", // Open-World
        description: "A first-person shooter set in a post-apocalyptic Moscow with a gripping story and atmospheric environments.",
        reviews: [],
        rating: 4.7,
        numReviews: 0,
        price: 39.99,
        countInStock: 60
    },
    {
        name: "Helldivers",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Helldivers_cover_art.jpg",
        brand: "Arrowhead Game Studios",
        quantity: 100,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A top-down cooperative twin-stick shooter with a focus on teamwork and strategic gameplay.",
        reviews: [],
        rating: 4.5,
        numReviews: 0,
        price: 19.99,
        countInStock: 70
    },
    {
        name: "Halo: Master Chief Collection",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Halo_Master_Chief_Collection_cover.jpg",
        brand: "343 Industries",
        quantity: 150,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A collection of Halo games featuring updated graphics, improved matchmaking, and all the campaigns from Halo: Combat Evolved to Halo 4.",
        reviews: [],
        rating: 4.8,
        numReviews: 0,
        price: 39.99,
        countInStock: 100
    },
    {
        name: "Dying Light 2",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Dying_Light_2_Cover.jpg",
        brand: "Techland",
        quantity: 100,
        category: "66a0f0a58b81bbaee3549ae4", // Open-World
        description: "An open-world survival horror game with a dynamic day-night cycle, parkour mechanics, and a branching story.",
        reviews: [],
        rating: 4.6,
        numReviews: 0,
        price: 59.99,
        countInStock: 80
    },
    {
        name: "Detroit: Become Human",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d5/Detroit_Become_Human_cover.jpg",
        brand: "Quantic Dream",
        quantity: 100,
        category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
        description: "A narrative-driven game exploring themes of artificial intelligence and free will, with multiple branching storylines.",
        reviews: [],
        rating: 4.7,
        numReviews: 0,
        price: 59.99,
        countInStock: 70
    },
    {
        name: "Tomb Raider",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Tomb_Raider_2013_cover.jpg",
        brand: "Crystal Dynamics",
        quantity: 100,
        category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
        description: "A reboot of the iconic franchise, featuring Lara Croft's origin story with a focus on survival and exploration.",
        reviews: [],
        rating: 4.6,
        numReviews: 0,
        price: 29.99,
        countInStock: 80
    },
    {
        name: "PUBG: Battlegrounds",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/PlayerUnknown%27s_Battlegrounds_cover.jpg",
        brand: "PUBG Corporation",
        quantity: 150,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A battle royale game where players fight to be the last person standing in a large, open world.",
        reviews: [],
        rating: 4.5,
        numReviews: 0,
        price: 29.99,
        countInStock: 100
    },
    {
        name: "Call of Duty: Warzone",
        image: "https://upload.wikimedia.org/wikipedia/en/3/37/Call_of_Duty_Warzone_cover_art.jpg",
        brand: "Infinity Ward",
        quantity: 150,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A free-to-play battle royale mode set in the Call of Duty universe, featuring large-scale combat and various game modes.",
        reviews: [],
        rating: 4.4,
        numReviews: 0,
        price: 0.00, // Free-to-play
        countInStock: 100
    },
    {
        name: "Valorant",
        image: "https://upload.wikimedia.org/wikipedia/en/2/27/Valorant_cover_art.jpg",
        brand: "Riot Games",
        quantity: 200,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A tactical first-person shooter with a focus on team-based play, unique character abilities, and precise gunplay.",
        reviews: [],
        rating: 4.6,
        numReviews: 0,
        price: 0.00, // Free-to-play
        countInStock: 200
    },
    {
        name: "Counter-Strike 2",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Counter-Strike_2_cover_art.jpg",
        brand: "Valve",
        quantity: 200,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "The latest entry in the Counter-Strike series, featuring updated graphics, new maps, and refined gameplay.",
        reviews: [],
        rating: 4.7,
        numReviews: 0,
        price: 0.00, // Free-to-play
        countInStock: 200
    },
    {
        name: "Counter-Strike: Global Offensive",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b7/Counter-Strike_Global_Offensive_cover.jpg",
        brand: "Valve",
        quantity: 200,
        category: "66a0f09a8b81bbaee3549ae0", // FPS
        description: "A popular tactical shooter with a focus on team-based play, featuring a variety of game modes and competitive matchmaking.",
        reviews: [],
        rating: 4.5,
        numReviews: 0,
        price: 14.99,
        countInStock: 150
    },
    {
        name: "Minecraft",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        brand: "Mojang",
        quantity: 300,
        category: "66a0f0b78b81bbaee3549ae8", // Sandbox
        description: "A sandbox game where players can build, explore, and survive in a procedurally generated world made of blocks.",
        reviews: [],
        rating: 4.8,
        numReviews: 0,
        price: 29.99,
        countInStock: 200
    }
];
