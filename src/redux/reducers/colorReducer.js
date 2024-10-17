import { TOGGLE_COLOR_MODE } from "../actions/colorActions";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  light: {
    text: "#2b1c10",  // darkBrown
    text2: "#6E493A", // brown
    link1: '#1F1F1F',
    bg: "#f4e1d2", // light page
    bg2: "#987284", // pink
    bg3: "#f4e1d262", // light transparent
  },
  dark: {
    text: "#E1D4C1", // page
    text2: "#f4e1d2", // light page
    link1: '#E1D4C1', // page
    bg: "#1F1F1F", // Dark
    bg2: "#2b1c10", // darkBrown
    bg3: "#1f1f1fc4",  // dark transparent
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