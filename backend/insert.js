// insert.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productModel.js'; 

dotenv.config();

mongoose.connect("mongodb+srv://thiongodan405:karimi495@nodetuts.qo9dk3h.mongodb.net/last", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB Connection Successful', process.env.MONGO_URI);
}).catch((err) => {
  console.log('DB Connection Error:', err, process.env.MONGO_URI);
});
const products = [
  {
      name: "Sekiro: Shadows Die Twice",
      image: "https://c4.wallpaperflare.com/wallpaper/25/429/92/sekiro-shadows-die-twice-sekiro-video-games-video-game-art-shadows-die-twice-hd-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/263/276/954/call-of-duty-black-ops-2-wallpaper-preview.jpg",
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
      name: "https://c4.wallpaperflare.com/wallpaper/391/440/837/gamers-video-games-call-of-duty-black-ops-gun-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/50/252/838/video-games-call-of-duty-black-ops-call-of-duty-call-of-duty-black-ops-iii-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/88/981/105/arkham-asylum-batman-games-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/749/661/68/batman-arkham-city-game-1-batman-arkham-city-wallpaper-preview.jpg",
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
      name: "Batman: Arkham Knight",
      image: "https://c4.wallpaperflare.com/wallpaper/223/238/420/batman-batman-arkham-knight-wallpaper-preview.jpg",
      brand: "Rocksteady Studios",
      quantity: 80,
      category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
      description: "A sequel to Arkham City with a larger, open-world environment and a deeper storyline.",
      reviews: [],
      rating: 4.8,
      numReviews: 0,
      price: 39.99,
      countInStock: 60
  },
  {
      name: "Assassin's Creed IV: Black Flag",
      image: "https://c4.wallpaperflare.com/wallpaper/551/846/454/assassin-s-creed-black-flag-pirates-fantasy-art-video-games-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/275/739/763/bloodborne-video-games-lady-maria-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/485/448/1020/metro-exodus-video-games-metro-last-light-metro-last-light-redux-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/278/398/352/metro-2033-metro-2033-redux-video-games-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/620/698/437/1hdrivers-action-fighting-futuristic-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/738/903/626/halo-master-chief-collection-video-games-halo-halo-3-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/390/819/749/8k-4k-e3-2018-dying-light-2-wallpaper-preview.jpg",
      brand: "Techland",
      quantity: 100,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world survival horror game with a dynamic day-night cycle and a branching story.",
      reviews: [],
      rating: 4.6,
      numReviews: 0,
      price: 59.99,
      countInStock: 80
  },
  {
      name: "Dying Light : Enhanced Edition",
      image: "https://c4.wallpaperflare.com/wallpaper/269/270/531/dying-light-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/216/471/778/detroit-become-human-wallpaper-preview.jpg",
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
      name: "Tomb Raider 2013",
      image: "https://c4.wallpaperflare.com/wallpaper/426/125/255/video-games-tomb-raider-2013-tomb-raider-wallpaper-preview.jpg",
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
      name: "Shadow of the Tomb Raider ",
      image: "https://c4.wallpaperflare.com/wallpaper/264/452/987/lara-croft-tomb-raider-face-hair-lara-croft-hd-wallpaper-preview.jpg",
      brand: "Crystal Dynamics",
      quantity: 100,
      category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
      description: "featuring Lara Croft's, and more origin story with a focus on survival and exploration.",
      reviews: [],
      rating: 4.6,
      numReviews: 0,
      price: 39.99,
      countInStock: 80
  },
  {
      name: "PUBG: Battlegrounds",
      image: "https://c4.wallpaperflare.com/wallpaper/56/878/323/pubg-playerunknown-s-battlegrounds-4k-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/557/189/265/call-of-duty-warzone-xbox-one-call-of-duty-black-ops-hd-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/637/872/995/valorant-jett-valorant-riot-games-hd-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/337/204/15/valve-counter-strike-2-rifles-swat-hd-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/273/67/659/counter-strike-counter-strike-global-offensive-wallpaper-preview.jpg",
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
      image: "https://c4.wallpaperflare.com/wallpaper/431/666/470/minecraft-video-games-pixels-wallpaper-preview.jpg",
      brand: "Mojang",
      quantity: 300,
      category: "66a0f0b78b81bbaee3549ae8", // Sandbox
      description: "A sandbox game where players can build, explore, and survive in a procedurally generated world made of blocks.",
      reviews: [],
      rating: 4.8,
      numReviews: 0,
      price: 29.99,
      countInStock: 200
  },
  {
    name: "Fortnite",
    image: "https://c4.wallpaperflare.com/wallpaper/332/936/882/season-5-8k-4k-fortnite-wallpaper-preview.jpg",
    brand: "Epic Games",
    quantity: 200,
    category: "66a0f09a8b81bbaee3549ae0", // FPS
    description: "A popular battle royale game with building mechanics and a constantly evolving world.",
    reviews: [],
    rating: 4.3,
    numReviews: 0,
    price: 0.00, // Free-to-play
    countInStock: 200
},
{
    name: "Rainbow Six Siege",
    image: "https://c4.wallpaperflare.com/wallpaper/806/964/867/video-games-rainbow-six-siege-wallpaper-preview.jpg",
    brand: "Ubisoft",
    quantity: 150,
    category: "66a0f09a8b81bbaee3549ae0", // FPS
    description: "A tactical shooter focused on team-based gameplay with destructible environments and diverse operators.",
    reviews: [],
    rating: 4.5,
    numReviews: 0,
    price: 39.99,
    countInStock: 100
},
{
    name: "Call of Duty: Black Ops Cold War",
    image: "https://c4.wallpaperflare.com/wallpaper/613/113/235/look-glasses-hat-the-inscription-soldiers-hd-wallpaper-preview.jpg",
    brand: "Treyarch",
    quantity: 150,
    category: "66a0f09a8b81bbaee3549ae0", // FPS
    description: "A first-person shooter set during the Cold War, with a mix of historical and fictional elements.",
    reviews: [],
    rating: 4.4,
    numReviews: 0,
    price: 59.99,
    countInStock: 100
},
{
    name: "Far Cry 5",
    image: "https://c4.wallpaperflare.com/wallpaper/341/271/730/far-cry-5-wallpaper-preview.jpg",
    brand: "Ubisoft",
    quantity: 100,
    category: "66a0f0a58b81bbaee3549ae4", // Open-World
    description: "An open-world shooter set in Montana, USA, featuring a fight against a doomsday cult.",
    reviews: [],
    rating: 4.2,
    numReviews: 0,
    price: 49.99,
    countInStock: 80
},
{
    name: "Stellar Blade",
    image: "https://c4.wallpaperflare.com/wallpaper/787/854/424/jujutsu-kaisen-satoru-gojo-anime-boys-anime-girls-hd-wallpaper-preview.jpg",
    brand: "Nexon",
    quantity: 100,
    category: "66a0f0b78b81bbaee3549ae8", // RPG
    description: "A sci-fi action RPG with dynamic combat and a deep narrative.",
    reviews: [],
    rating: 4.5,
    numReviews: 0,
    price: 49.99,
    countInStock: 70
},
{
    name: "Control",
    image: "https://c4.wallpaperflare.com/wallpaper/243/513/191/control-remedy-games-red-hd-wallpaper-preview.jpg",
    brand: "Remedy Entertainment",
    quantity: 100,
    category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
    description: "A supernatural third-person shooter with a gripping story and unique telekinetic abilities.",
    reviews: [],
    rating: 4.7,
    numReviews: 0,
    price: 59.99,
    countInStock: 70
},
{
    name: "Uncharted 4: A Thief's End",
    image: "https://c4.wallpaperflare.com/wallpaper/994/142/495/nathan-drake-ps4-uncharted-4-a-thiefs-end-wallpaper-preview.jpg",
    brand: "Naughty Dog",
    quantity: 100,
    category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
    description: "The final chapter in Nathan Drake's adventures, featuring breathtaking visuals and a cinematic story.",
    reviews: [],
    rating: 4.8,
    numReviews: 0,
    price: 59.99,
    countInStock: 70
},
{
  name: "Far Cry 3",
  image: "https://c4.wallpaperflare.com/wallpaper/496/748/861/far-cry-far-cry-3-computer-msi-wallpaper-preview.jpg",
  brand: "Ubisoft",
  quantity: 100,
  category: "66a0f0a58b81bbaee3549ae4", // Open-World
  description: "An open-world first-person shooter set on a dangerous tropical island, featuring a gripping narrative and dynamic gameplay.",
  reviews: [],
  rating: 4.8,
  numReviews: 0,
  price: 39.99,
  countInStock: 80
},
{
  name: "Far Cry 4",
  image: "https://c4.wallpaperflare.com/wallpaper/925/727/813/far-cry-video-games-far-cry-4-wallpaper-preview.jpg",
  brand: "Ubisoft",
  quantity: 100,
  category: "66a0f0a58b81bbaee3549ae4", // Open-World
  description: "An open-world shooter set in a fictional Himalayan region with a mix of combat, exploration, and a compelling story.",
  reviews: [],
  rating: 4.6,
  numReviews: 0,
  price: 49.99,
  countInStock: 80
},
{
  name: "Far Cry Primal",
  image: "https://c4.wallpaperflare.com/wallpaper/462/548/859/far-cry-primal-video-games-wallpaper-preview.jpg",
  brand: "Ubisoft",
  quantity: 100,
  category: "66a0f0a58b81bbaee3549ae4", // Open-World
  description: "An open-world game set in the Stone Age, where players fight for survival against prehistoric creatures and rival tribes.",
  reviews: [],
  rating: 4.4,
  numReviews: 0,
  price: 39.99,
  countInStock: 80
},
{
  name: "Uncharted: Drake's Fortune",
  image: "https://c4.wallpaperflare.com/wallpaper/493/307/578/drake-039-s-fortune-uncharted-wallpaper-preview.jpg",
  brand: "Naughty Dog",
  quantity: 100,
  category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
  description: "The first entry in the Uncharted series, introducing Nathan Drake and his treasure-hunting adventures.",
  reviews: [],
  rating: 4.5,
  numReviews: 0,
  price: 19.99,
  countInStock: 70
},
{
  name: "Uncharted 2: Among Thieves",
  image: "https://c4.wallpaperflare.com/wallpaper/994/118/509/uncharted-2-among-thieves-uncharted-2-danger-nathan-drake-wallpaper-preview.jpg",
  brand: "Naughty Dog",
  quantity: 100,
  category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
  description: "A critically acclaimed sequel featuring an expanded story, new gameplay mechanics, and even more breathtaking action sequences.",
  reviews: [],
  rating: 4.8,
  numReviews: 0,
  price: 29.99,
  countInStock: 70
},
{
  name: "Uncharted 3: Drake's Deception",
  image: "https://c4.wallpaperflare.com/wallpaper/859/734/427/uncharted-uncharted-2-among-thieves-wallpaper-preview.jpg",
  brand: "Naughty Dog",
  quantity: 100,
  category: "66a0f0b78b81bbaee3549ae8", // Action-Adventure
  description: "The third installment in the Uncharted series, featuring a deeper exploration of Nathan Drake's past and thrilling new adventures.",
  reviews: [],
  rating: 4.7,
  numReviews: 0,
  price: 29.99,
  countInStock: 70
}


];

const products1 = [
    {
      name: "The Witcher 3: Wild Hunt",
      image: "https://c4.wallpaperflare.com/wallpaper/127/577/116/the-witcher-3-wild-hunt-geralt-of-rivia-wallpaper-preview.jpg",
      brand: "CD Projekt",
      quantity: 100,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "An open-world RPG game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
      reviews: [],
      rating: 4.9,
      numReviews: 0,
      price: 39.99,
      countInStock: 50
    },
    {
      name: "Cyberpunk 2077",
      image: "https://c4.wallpaperflare.com/wallpaper/929/501/218/cyberpunk-2077-cd-projekt-red-hd-wallpaper-preview.jpg",
      brand: "CD Projekt",
      quantity: 100,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
      reviews: [],
      rating: 4.1,
      numReviews: 0,
      price: 59.99,
      countInStock: 75
    },
    {
      name: "Call of Duty: Modern Warfare",
      image: "https://c4.wallpaperflare.com/wallpaper/840/48/40/call-of-duty-modern-warfare-2-video-games-soldier-war-wallpaper-preview.jpg",
      brand: "Activision",
      quantity: 200,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "An intense, action-packed first-person shooter game with a gripping story and modern warfare gameplay.",
      reviews: [],
      rating: 4.5,
      numReviews: 0,
      price: 49.99,
      countInStock: 100
    },
    {
      name: "Assassin's Creed Valhalla",
      image: "https://c4.wallpaperflare.com/wallpaper/469/469/225/assassin-s-creed-video-games-assassin-s-creed-valhalla-assassin-s-creed-valhalla-assassins-creed-valhalla-hd-wallpaper-preview.jpg",
      brand: "Ubisoft",
      quantity: 120,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An epic Viking adventure set in an open-world, where you raid, conquer, and fight for glory.",
      reviews: [],
      rating: 4.3,
      numReviews: 0,
      price: 59.99,
      countInStock: 80
    },
    {
      name: "Elden Ring",
      image: "https://c4.wallpaperflare.com/wallpaper/489/876/39/elden-ring-from-software-fromsoftware-hd-wallpaper-preview.jpg",
      brand: "FromSoftware",
      quantity: 150,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "A dark fantasy action RPG adventure, set in a beautifully bleak world, with challenging gameplay and deep lore.",
      reviews: [],
      rating: 4.8,
      numReviews: 0,
      price: 59.99,
      countInStock: 90
    },
    {
      name: "Grand Theft Auto V",
      image: "https://c4.wallpaperflare.com/wallpaper/602/770/560/weapons-dog-chain-the-bandits-wallpaper-preview.jpg",
      brand: "Rockstar Games",
      quantity: 300,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world action-adventure game set in the sprawling city of Los Santos, full of missions, heists, and chaos.",
      reviews: [],
      rating: 4.7,
      numReviews: 0,
      price: 29.99,
      countInStock: 200
    },
    {
      name: "Borderlands 3",
      image: "https://c4.wallpaperflare.com/wallpaper/86/588/836/borderlands-3-borderlands-gearbox-software-hd-wallpaper-preview.jpg",
      brand: "2K Games",
      quantity: 130,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "A chaotic and comedic first-person shooter with tons of loot, quirky characters, and cooperative gameplay.",
      reviews: [],
      rating: 4.2,
      numReviews: 0,
      price: 49.99,
      countInStock: 70
    },
    {
      name: "Horizon Zero Dawn",
      image: "https://c4.wallpaperflare.com/wallpaper/795/358/450/video-game-horizon-zero-dawn-aloy-horizon-zero-dawn-wallpaper-preview.jpg",
      brand: "Guerrilla Games",
      quantity: 140,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world action RPG where you explore a lush world inhabited by robotic creatures and uncover the secrets of a past civilization.",
      reviews: [],
      rating: 4.6,
      numReviews: 0,
      price: 39.99,
      countInStock: 60
    },
    {
      name: "Dark Souls III",
      image: "https://c4.wallpaperflare.com/wallpaper/761/403/799/dark-souls-3-games-pc-games-ps-games-wallpaper-preview.jpg",
      brand: "FromSoftware",
      quantity: 110,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "A dark and challenging action RPG, known for its deep lore, strategic combat, and high difficulty level.",
      reviews: [],
      rating: 4.7,
      numReviews: 0,
      price: 49.99,
      countInStock: 50
    },
    {
      name: "Far Cry 6",
      image: "https://c4.wallpaperflare.com/wallpaper/973/985/308/far-cry-ubisoft-ubisoft-toronto-far-cry-6-hd-wallpaper-preview.jpg",
      brand: "Ubisoft",
      quantity: 160,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "An open-world first-person shooter set in a tropical paradise ruled by a dictator, where you fight for freedom.",
      reviews: [],
      rating: 4.0,
      numReviews: 0,
      price: 59.99,
      countInStock: 85
    },
    {
      name: "The Elder Scrolls V: Skyrim",
      image: "https://c4.wallpaperflare.com/wallpaper/821/483/724/the-elder-scrolls-v-skyrim-video-games-wallpaper-preview.jpg",
      brand: "Bethesda",
      quantity: 250,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "An epic open-world RPG set in a fantasy realm filled with dragons, quests, and limitless possibilities.",
      reviews: [],
      rating: 4.8,
      numReviews: 0,
      price: 19.99,
      countInStock: 150
    },
    {
      name: "Destiny 2",
      image: "https://c4.wallpaperflare.com/wallpaper/272/750/501/5k-destiny-2-wallpaper-preview.jpg",
      brand: "Bungie",
      quantity: 220,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "A first-person shooter with a rich, evolving world, where you explore planets, fight alien threats, and uncover the mysteries of the universe.",
      reviews: [],
      rating: 4.3,
      numReviews: 0,
      price: 0.00,
      countInStock: 120
    },
    {
      name: "Red Dead Redemption 2",
      image: "https://c4.wallpaperflare.com/wallpaper/81/249/300/red-dead-red-dead-redemption-2-arthur-morgan-dutch-van-der-linde-wallpaper-preview.jpg",
      brand: "Rockstar Games",
      quantity: 200,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world Western action-adventure game with an immersive storyline, breathtaking landscapes, and detailed character interactions.",
      reviews: [],
      rating: 4.9,
      numReviews: 0,
      price: 59.99,
      countInStock: 100
    },
    {
      name: "Fallout 4",
      image: "https://c4.wallpaperflare.com/wallpaper/602/567/775/fallout-4-fallout-wallpaper-preview.jpg",
      brand: "Bethesda",
      quantity: 180,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "An open-world post-apocalyptic RPG where you explore the ruins of Boston, build settlements, and shape the future of the Wasteland.",
      reviews: [],
      rating: 4.5,
      numReviews: 0,
      price: 29.99,
      countInStock: 100
    },
    {
      name: "Doom Eternal",
      image: "https://c4.wallpaperflare.com/wallpaper/238/51/616/doom-doom-eternal-hd-wallpaper-preview.jpg",
      brand: "id Software",
      quantity: 170,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "An intense and brutal first-person shooter where you battle demonic hordes with an arsenal of powerful weapons.",
      reviews: [],
      rating: 4.6,
      numReviews: 0,
      price: 59.99,
      countInStock: 90
    },
    {
      name: "The Legend of Zelda: Breath of the Wild",
      image: "https://c4.wallpaperflare.com/wallpaper/1017/880/838/castle-the-legend-of-zelda-breath-of-the-wild-sunlight-video-games-wallpaper-preview.jpg",
      brand: "Nintendo",
      quantity: 190,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world action-adventure game where you explore a vast and vibrant world, solve puzzles, and battle enemies.",
      reviews: [],
      rating: 4.9,
      numReviews: 0,
      price: 59.99,
      countInStock: 100
    },
    {
      name: "Mass Effect: Legendary Edition",
      image: "https://c4.wallpaperflare.com/wallpaper/804/438/350/mass-effect-mass-effect-2-mass-effect-3-mass-effect-legendary-edition-video-games-hd-wallpaper-preview.jpg",
      brand: "Bioware",
      quantity: 150,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "A remastered trilogy of the iconic sci-fi RPG series, where you lead your team across the galaxy to save humanity.",
      reviews: [],
      rating: 4.4,
      numReviews: 0,
      price: 59.99,
      countInStock: 80
    },
    {
      name: "Battlefield 2042",
      image: "https://c4.wallpaperflare.com/wallpaper/826/768/1017/battlefield-2042-battlefield-hd-wallpaper-preview.jpg",
      brand: "Electronic Arts",
      quantity: 210,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "A first-person shooter set in a near-future world, featuring large-scale battles, dynamic weather, and changing combat conditions.",
      reviews: [],
      rating: 4.1,
      numReviews: 0,
      price: 59.99,
      countInStock: 110
    },
    {
      name: "Ghost of Tsushima",
      image: "https://c4.wallpaperflare.com/wallpaper/139/265/83/video-game-ghost-of-tsushima-hd-wallpaper-preview.jpg",
      brand: "Sucker Punch",
      quantity: 160,
      category: "66a0f0a58b81bbaee3549ae4", // Open-World
      description: "An open-world action-adventure game set in feudal Japan, where you play as a samurai fighting against the Mongol invasion.",
      reviews: [],
      rating: 4.7,
      numReviews: 0,
      price: 59.99,
      countInStock: 100
    },
    {
      name: "Diablo III",
      image: "https://c4.wallpaperflare.com/wallpaper/7/562/371/diablo-iii-diablo-3-reaper-of-souls-video-games-wallpaper-preview.jpg",
      brand: "Blizzard Entertainment",
      quantity: 140,
      category: "66a0f0b78b81bbaee3549ae8", // Rpg
      description: "An action RPG set in a dark fantasy world, where you battle hordes of demons, collect powerful loot, and save humanity from the forces of Hell.",
      reviews: [],
      rating: 4.5,
      numReviews: 0,
      price: 39.99,
      countInStock: 80
    },
    {
      name: "Overwatch",
      image: "https://c4.wallpaperflare.com/wallpaper/496/973/77/overwatch-video-games-artwork-digital-art-wallpaper-preview.jpg",
      brand: "Blizzard Entertainment",
      quantity: 200,
      category: "66a0f09a8b81bbaee3549ae0", // FPS
      description: "A team-based multiplayer first-person shooter, featuring a diverse cast of characters, fast-paced action, and strategic gameplay.",
      reviews: [],
      rating: 4.6,
      numReviews: 0,
      price: 29.99,
      countInStock: 150
    }
  ];
  
  
const insertProducts = async () => {
  try {
    await Product.insertMany(products);
    console.log('Products inserted successfully',process.env.MONGO_URI);
    mongoose.connection.close();
  } catch (error) {
    console.log('Error inserting products:', error, process.env.MONGO_URI);
  }
};

insertProducts();
