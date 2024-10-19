import { TOGGLE_COLOR_MODE } from "../actions/colorActions";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  light: {
    mode: 'light',
    brand: '#e1a140', //Gold
    text: "#2b1c10",  // darkBrown
    text1: "#f4e1d2",  // light page
    text2: "#914110", // brown
    card: "#914110", // brown
    border: "#2b1c1067", // brown transparent
    link1: '#1F1F1F', //dark
    bg: "#f4e1d2", // light page
    bg1: "silver", // silver
    bg2: "#987284", // pink
    bg3: "#f4e1d262", // light transparent
    bg4: "#2b1c108a", // brown transparent
  },
  dark: {
    mode: 'dark',
    brand: '#1F1F1F', // dark
    text: "#E1D4C1", // page
    text1: "silver", // silver
    text2: "#f4e1d2", // light page
    card: "#1F1F1F", // Dark
    border: "#f4e1d27f", // page  transparent
    link1: '#E1D4C1', // page
    bg: "#1F1F1F", // Dark
    bg1: "#2c2c2c", // light Dark
    bg2: "#2b1c10", // darkBrown
    bg3: "#1f1f1fc4",  // dark transparent
    bg4: "#2c2c2c",  // darkBrown
  },
};

const toggle_theme_reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COLOR_MODE: {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    }
    default:
      return state;
  }
};

export default toggle_theme_reducer