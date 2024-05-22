export const wineAromas = {
  primary: {
    flower: [
      "Iris",
      "Peony",
      "Elderflower",
      "Acaccia",
      "Lilac",
      "Jasmine",
      "Honeysuckle",
      "Violet",
      "Lavender",
      "Rose",
      "Potpourri",
      "Hibiscus",
    ] as const,
    citrus: ["Lime", "Lemon ", "Grapefruit", "Orange", "Marmelade"] as const,
    tree_fruit: [
      "Quince",
      "Apple",
      "Pear",
      "Nectarine",
      "Peach",
      "Apricot",
      "Persimmon",
    ] as const,
    tropical_fruit: [
      "Pineapple",
      "Mango",
      "Guava",
      "Kiwi",
      "Lychee",
      "Bubblegum",
    ] as const,
    red_fruit: [
      "Cranberry",
      "Red Plum",
      "Pomeggranate",
      "Sour Cherry",
      "Strawberry",
      "Cherry",
      "Raspberry",
    ] as const,
    black_fruit: [
      "Boysenberry",
      "Black Currant",
      "Plum",
      "Blackberry",
      "Blueberrry",
      "Olive",
    ] as const,
    dried_fruit: ["Rasin", "Fig", "Date", "Fruitcake"] as const,
    noble_rot: ["Beewox", "Ginger", "Honey"] as const,
    spice: [
      "White Pepper",
      "Red Pepper",
      "Black Pepper",
      "Cinnamon",
      "Anis",
      "5-Spice",
      "Fennel",
      "Eucalyptus",
      "Mint",
      "Thyme",
    ] as const,
    vegetable: [
      "Black Tea",
      "Sun Dried Tomato",
      "Tomato",
      "Bitter Almond",
      "Jalapeño",
      "Bell Pepper",
      "Gooseberry",
      "Tomato Leaf",
      "Grass",
    ] as const,
    earth: [
      "Petroleum",
      "Volcanic Rocks",
      "Red Beet",
      "Potting Soil",
      "Wet Gravel",
      "Slate",
      "Clay Pot",
    ] as const,
  },
  secondary: {
    microbial: [
      "Mushroom",
      "Truffle",
      "Lager",
      "Sourdough",
      "Cream",
      "Butter",
    ] as const,
  },
  tertiary: {
    oak_aging: [
      "Dill",
      "Smoke",
      "Cigar Box",
      "Bakin Spices",
      "Coconut",
      "Vanilla",
    ] as const,
    general_aging: [
      "Leather",
      "Cocoa",
      "Coffee",
      "Tobacco",
      "Nuts",
      "Dried Fruit",
    ] as const,
  },
  faults: {
    "tca_(corked)": ["Wet Dog", "Musty Cardboard"] as const,
    "sulfides_&_mercaptans": [
      "Cat Pee",
      "Onion",
      "Garlic",
      "atch Box",
      "Burnt Rubber",
      "Boiled Eggs",
      "Cured Meat",
    ] as const,
    brettanomyces: [
      "Horse Manure",
      "Sweaty Leather Saddle",
      "Band-Aid",
      "Black Cardamon",
    ] as const,
    cooked: ["Stewed Fruit", "Toffee"] as const,
    volatile_acidity: ["Balsamic Vinegar"] as const,
  },
};

export type AromaType = keyof typeof wineAromas;
export type CategoryType<T extends keyof typeof wineAromas> =
  keyof (typeof wineAromas)[T];

export type CT<
  T extends AromaType,
  C extends CategoryType<T>,
> = keyof (typeof wineAromas)[T][C];

export function getCategory<T extends AromaType>(aroma: T): CategoryType<T>[] {
  return Object.keys(wineAromas[aroma]) as CategoryType<T>[];
}

export function getAromas() {
  return Object.keys(wineAromas) as AromaType[];
}

export function getTastes<A extends AromaType, C extends CategoryType<A>>(
  aroma: A,
  category: C,
) {
  return wineAromas[aroma][category];
}

type AromaShape = {
  aroma: string;
  category: string;
  taste: string;
  // taste: "primary" | "secondary" | "tertiary" | "faults";
};
