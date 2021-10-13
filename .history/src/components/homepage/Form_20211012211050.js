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
    <div className="Form bg-red-300 grid grid-cols-2">
      <div className="col-span-1 flex align-middle justify-center">
        <h3 className="text-4xl">Lorem Lorem Lorem Lorem Lorem</h3>
      </div>
      <div className="col-span-1 flex flex-col align-middle justify-center">
        <input></input>
        <input></input>
        <input></input>
      </div>
    </div>
  );
}

export default Form;
