import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/reducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          <Page />
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}

export default App;
