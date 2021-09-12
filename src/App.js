import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreatePage from "./createpage";
import Mainpage from "./mainpage";
import {createTheme,ThemeProvider } from '@material-ui/core';
const theme=createTheme({
  typography:{
    fontFamily:"Glory",
    fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700
  }

})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Switch>
      <Route path="/create"><CreatePage/></Route>
      <Route path="/" exact><Mainpage/></Route>
      </Switch>

      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
