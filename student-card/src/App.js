import React from "react";
import "./App.scss";
import Card from "./Components/Card/Card";
import CardForm from "./Components/CardForm/CardForm";

function App() {
  return (
    <div className="App">
      <h1>Карточка студента</h1>
      {window.localStorage.getItem("user") ? (
        <Card />
      ) : (
        <CardForm />
        // <>
        //   <div>Нет данных</div>
        //   <button className="app-button">Добавить</button>
        // </>
      )}
    </div>
  );
}

export default App;
