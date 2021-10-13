import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="Form bg-red-300 grid-cols-2">
      <div className=" col-span-1">
        {" "}
        <h3>bize ulaşın</h3>
      </div>

      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input {...register("firstName")} />
          <input {...register("lastName")} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
