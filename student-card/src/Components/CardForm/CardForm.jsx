import React, { useState } from "react";
import style from "./CardForm.module.scss";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const history = useHistory();

  const onSubmit = (data) => {
    window.localStorage.setItem("user", JSON.stringify(data));
    history.push("/");
  };

  const userData = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className={style.form_container}>
      <h4 className={style.form_container_h}>
        Пожалуйста, введите свои данные
      </h4>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.form_container_form}
      >
        <label>Имя</label>
        <input
          type="text"
          defaultValue={userData ? userData.name : ""}
          {...register("name", {
            required: { value: true, message: "Введите, пожалуйста, своё имя" },
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "Данные должны быть написаны латиницей",
            },
          })}
          className={style.form_container_form_field}
        />
        <span className={style.form_container_form_field_error}>
          {errors.name && errors.name.message}
        </span>
        <label>Фамилия</label>
        <input
          type="text"
          defaultValue={userData ? userData.surname : ""}
          {...register("surname", {
            required: {
              value: true,
              message: "Введите, пожалуйста, свою фамилию",
            },
            pattern: {
              value: /[A-Za-z]{3}/,
              message: "Данные должны быть написаны латиницей",
            },
          })}
          className={style.form_container_form_field}
        />
        <span className={style.form_container_form_field_error}>
          {errors.surname && errors.surname.message}
        </span>
        <label>Год рождения</label>
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear() - 1}
          defaultValue={userData ? userData.year : ""}
          {...register("year", {
            required: {
              value: true,
              message: "Введите, пожалуйста, год своего рождения",
            },
            max: {
              value: new Date().getFullYear() - 1,
              message: "Год Вашего рождения не может быть больше текущего года",
            },
          })}
          className={style.form_container_form_field}
        />
        <span className={style.form_container_form_field_error}>
          {errors.year && errors.year.message}
        </span>
        <label>Портфолио</label>
        <input
          type="text"
          defaultValue={userData ? userData.portfolio : ""}
          {...register("portfolio", {
            required: {
              value: true,
              message: "Пожалуйста, укажите ссылку на Ваше портфолио",
            },
            validate: {
              isLink: (value) => {
                const portfolioRegExp =
                  /http\:\/\/\w+\.\w+|https\:\/\/\w+\.\w+/g;
                return portfolioRegExp.test(value);
              },
            },
          })}
          className={style.form_container_form_field}
        />
        <span className={style.form_container_form_field_error}>
          {errors.portfolio && errors.portfolio.message}
          {errors.portfolio?.type === "isLink" &&
            "Пожалуйста, укажите правильную ссылку на Ваше портфолио"}
        </span>
        <div>
          {userData && (
            <Link to="/" className={style.form_container_form_button}>
              Back
            </Link>
          )}{" "}
          <input type="submit" className={style.form_container_form_button} />
        </div>
      </form>
    </div>
  );
};

export default CardForm;
