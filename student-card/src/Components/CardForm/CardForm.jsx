import React from "react";
import style from "./CardForm.module.scss";
import { useForm } from "react-hook-form";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // fromState: { errors },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => console.log(data);
  // console.log("register: ", register);
  // console.log("watch: ", watch);
  // console.log("handleSubmit: ", handleSubmit);
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
          {...register("name")}
          className={style.form_container_form_field}
        />
        <label>Фамилия</label>
        <input
          {...register("surname")}
          className={style.form_container_form_field}
        />
        <label>Год рождения</label>
        <input
          {...register("year")}
          className={style.form_container_form_field}
        />
        <label>Портфолио</label>
        <input
          {...register("portfolio")}
          className={style.form_container_form_field}
        />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <input type="submit" className={style.form_container_form_button} />
      </form>
    </div>
  );
};

export default CardForm;
