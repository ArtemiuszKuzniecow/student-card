import React from "react";
import "./App.scss";
import Card from "./Components/Card/Card";
import CardForm from "./Components/CardForm/CardForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardWrapper from "./CardWrapper";

function App() {
  return (
    <BrowserRouter>
      <CardWrapper>
        <Switch>
          <Route path="/" exact component={Card} />
          <Route path="/register" component={CardForm} />
        </Switch>
      </CardWrapper>
    </BrowserRouter>
  );
}

export default App;
