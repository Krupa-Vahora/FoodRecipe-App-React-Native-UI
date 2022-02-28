import images from "./images";
import icons from "./icons";

const trendingRecipes = [
  {
    id: 1,
    name: "Sizzler",
    image: images.sizzler,
    duration: "2 Hour",
    serving: 1,
    isBookmark: false,
    category: "Sizzler",
    author: {
      profilePic: images.UserProfile5,
      name: "Krupa",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.pasta,
        description: "Spaghetti pasta",
        quantity: "100g",
      },
      {
        id: 2,
        icon: icons.oil,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        icon: icons.chilli,
        description: "Chilly",
        quantity: "100g",
      },
      {
        id: 4,
        icon: icons.tomato,
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        icon: icons.salt,
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        icon: icons.pepper,
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: images.UserProfile1,
      },
      {
        id: 2,
        profilePic: images.UserProfile2,
      },
      {
        id: 3,
        profilePic: images.UserProfile3,
      },
      {
        id: 4,
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 5,
    name: "Dabeli",
    image: images.dabeli,
    duration: "20 Mins",
    serving: 1,
    isBookmark: false,
    category: "Bombay Item",
    author: {
      profilePic: images.UserProfile5,
      name: "Dipali",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.chilli,
        description: "Chilli",
        quantity: "100g",
      },
      {
        id: 2,
        icon: icons.oil,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        icon: icons.lemongrass,
        description: "Lemon Grass",
        quantity: "100g",
      },
      {
        id: 4,
        icon: icons.tomato,
        description: "Campari tomatoes",
        quantity: "100g",
      },
      {
        id: 5,
        icon: icons.salt,
        description: "Salt",
        quantity: "¾ tbsp",
      },
      {
        id: 6,
        icon: icons.pepper,
        description: "Black Pepper",
        quantity: "¼ tbsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: images.UserProfile1,
      },
      {
        id: 2,
        profilePic: images.UserProfile2,
      },
      {
        id: 3,
        profilePic: images.UserProfile3,
      },
      {
        id: 4,
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza",
    image: images.pizza,
    duration: "20 mins",
    serving: 8,
    isBookmark: true,
    category: "Italian",
    author: {
      profilePic: images.UserProfile8,
      name: "Riti",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.cheese,
        description: "Pizza Roti",
        quantity: "1",
      },
      {
        id: 2,
        icon: icons.lemongrass,
        description: "Lemongrass stalk",
        quantity: "1 stalk",
      },
      {
        id: 3,
        icon: icons.onion,
        description: "Large Onion",
        quantity: "1",
      },
      {
        id: 4,
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "5",
      },
      {
        id: 5,
        icon: icons.coriander,
        description: "Coriander",
        quantity: "1 tsp",
      },
    ],
    viewers: [
      {
        id: 1,
        profilePic: images.UserProfile5,
      },
      {
        id: 2,
        profilePic: images.UserProfile4,
      },
      {
        id: 3,
        profilePic: images.UserProfile1,
      },
      {
        id: 4,
        profilePic: images.UserProfile2,
      },
      {
        id: 5,
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 3,
    name: "Frankie",
    image: images.frankie,
    duration: "10 mins",
    serving: 2,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile9,
      name: "Miti",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 2,
        icon: icons.lemongrass,
        description: "Lemongrass",
        quantity: "2 stalks",
      },
      {
        id: 3,
        icon: icons.tomato,
        description: "Tometo",
        quantity: "2",
      },
      {
        id: 4,
        icon: icons.coriander,
        description: "Coriander",
        quantity: "100g",
      },
      {
        id: 5,
        icon: icons.chilli,
        description: "Chilly",
        quantity: "1",
      },
    ],
    viewers: [
      {
        id: 1,
        name: "User 1",
        profilePic: images.UserProfile1,
      },
      {
        id: 2,
        name: "User 2",
        profilePic: images.UserProfile2,
      },
      {
        id: 3,
        name: "User 3",
        profilePic: images.UserProfile3,
      },
    ],
  },
  {
    id: 4,
    name: "Mexican Rice",
    image: images.maxicanRice,
    duration: "1 hour",
    serving: 1,
    isBookmark: true,
    category: "Local",
    author: {
      profilePic: images.UserProfile7,
      name: "Riya",
    },
    ingredients: [
      {
        id: 1,
        icon: icons.chilli,
        description: "Dried Chilli",
        quantity: "30g",
      },
      {
        id: 2,
        icon: icons.garlic,
        description: "Garlic cloves",
        quantity: "3",
      },
      {
        id: 3,
        icon: icons.tomato,
        description: "Tomato",
        quantity: "10",
      },
      {
        id: 4,
        icon: icons.rice,
        description: "rice",
        quantity: "1kg",
      },
    ],
    viewers: [],
  },
];

const categories = trendingRecipes;

export default {
  trendingRecipes,
  categories,
};
