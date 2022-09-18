import React from "react";
import style from "./CardForm.module.scss";
import { useForm } from "react-hook-form";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

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
          {...register("name", {
            required: { value: true, message: "Введите, пожалуйста, своё имя" },
          })}
          className={style.form_container_form_field}
        />
        <span>{errors.name && errors.name.message}</span>
        <label>Фамилия</label>
        <input
          type="text"
          {...register("surname", {
            required: {
              value: true,
              message: "Введите, пожалуйста, свою фамилию",
            },
          })}
          className={style.form_container_form_field}
        />
        <span>{errors.surname && errors.surname.message}</span>
        <label>Год рождения</label>
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear() - 1}
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
        <span>{errors.year && errors.year.message}</span>
        <label>Портфолио</label>
        <input
          type="text"
          {...register("portfolio", {
            required: {
              value: true,
              message: "Пожалуйста укажите ссылку на Ваше портфолио",
            },
            validate: {
              value: (value) => {
                const portfolioRegExp =
                  /http\:\/\/\w+\.\w+|https\:\/\/\w+\.\w+/g;
                return portfolioRegExp.test(value);
              },
              message: "Пожалуйста укажите правильную ссылку на Ваше портфолио",
            },
          })}
          className={style.form_container_form_field}
        />
        <span>{errors.portfolio && errors.portfolio.message}</span>
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <input type="submit" className={style.form_container_form_button} />
      </form>
    </div>
  );
};

export default CardForm;
