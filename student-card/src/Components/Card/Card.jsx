import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
import { getFullAge } from "../../utils/getFullAge";

const Card = () => {
  const userData = JSON.parse(window.localStorage.getItem("user"));
  let age;
  if (userData) age = getFullAge(userData.year);

  return userData ? (
    <div className={style.container_card}>
      <div>Имя: {userData.name}</div>
      <div>Фамилия: {userData.surname}</div>
      <div>
        Год рождения: {userData.year} ({age})
      </div>
      <div>Портфолио: {userData.portfolio}</div>
      <Link to="/register" className={style.container_card_button}>
        Редактировать
      </Link>
    </div>
  ) : (
    <>
      <h3>Пожалуйста, введите свои данные</h3>
      <Link to="/register" className={style.container_card_button}>
        Добавить данные
      </Link>
    </>
  );
};

export default Card;
