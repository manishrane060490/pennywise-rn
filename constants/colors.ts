const coffeeTheme = {
    primary: "#8B593E",
    background: "#FFF8F3",
    text: "#4A3428",
    border: "#E5D3B7",
    white: "#FFFFFF",
    textLight: "#9A8478",
    expense: "#E74C3C",
    income: "#2ECC71",
    card: "#FFFFFF",
    shadow: "#000000",
};

const forestTheme = {
    primary: "#2E7D32",
    background: "#E8F5E9",
    text: "#1B5E20",
    border: "#C8E6C9",
    white: "#FFFFFF",
    textLight: "#66BB6A",
    expense: "#C62828",
    income: "#388E3C",
    card: "#FFFFFF",
    shadow: "#000000",
};

const purpleTheme = {
    primary: "#6A1B9A",
    background: "#F3E5F5",
    text: "#4A148C",
    border: "#D1C4E9",
    white: "#FFFFFF",
    textLight: "#BA68C8",
    expense: "#D32F2F",
    income: "#388E3C",
    card: "#FFFFFF",
    shadow: "#000000",
};

const oceanTheme = {
    primary: "#0277BD",
    background: "#E1F5FE",
    text: "#01579B",
    border: "#B3E5FC",
    white: "#FFFFFF",
    textLight: "#4FC3F7",
    expense: "#EF5350",
    income: "#26A69A",
    card: "#FFFFFF",
    shadow: "#000000",
};

const darkTheme = {
    primary: "#4FC3F7",     // lighter blue accent (used for buttons, highlights)
    background: "#0D1B2A",  // deep navy blue background
    text: "#E1F5FE",        // light text for readability
    border: "#1E3A5F",      // muted blue border, low contrast
    white: "#121212",       // dark surface background for cards
    textLight: "#81D4FA",   // secondary text (subtle blue tone)
    expense: "#EF5350",     // red for expense (kept same for consistency)
    income: "#26A69A",      // teal-green for income (pops well on dark)
    card: "#1A2634",        // slightly lighter than background for elevation
    shadow: "#000000",      // subtle shadows
  };

export const THEMES = {
    coffee: coffeeTheme,
    forest: forestTheme,
    purple: purpleTheme,
    ocean: oceanTheme,
    dark: darkTheme
};

export const COLORS = THEMES.dark;