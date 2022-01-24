import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ServicesComponent from "./components/ServicesComponent";
import ViewServicesByCategoryComponent from "./components/ViewServicesByCategoryComponen";
import CreateServicesComponent from "./components/CreateServicesComponent";
import ViewServicesComponent from "./components/ViewServicesComponent";

/*const App = () => {
  return <Home/>;
};*/

class App extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" exact component={Home} />
              <Route path="/services" component={ServicesComponent} />
              <Route path="/view-categories/:servicesCategory" component={ViewServicesByCategoryComponent} />
              <Route path = "/add-services/:servicesId" component = {CreateServicesComponent}/>
              <Route path = "/view-services/:servicesId" component = {ViewServicesComponent}></Route>
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
