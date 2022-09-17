import React from "react";
import style from "./Card.module.scss";

const Card = () => {
  const userData = window.localStorage.getItem("user");
  return (
    <div className={style.container_card}>
      <div>Имя: {userData.name}</div>
      <div>Фамилия: {userData.surname}</div>
      <div>Год рождения: {userData.year}</div>
      <div>Портфолио: {userData.portfolio}</div>
      <button className={style.container_card_button}>Редактировать</button>
    </div>
  );
};

export default Card;
