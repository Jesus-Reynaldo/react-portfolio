import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import emailjs from '@emailjs/browser'
import "../styles/form.css";
import { Alert } from "./Alert";
import { useState } from "react";

interface FormValues{
  name: string,
  email: string,
  message: string,
}
export const Form = () => {
  const VITE_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const VITE_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      name: '',
      email: '',
      message: '',
    }
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const onSubmit:SubmitHandler<FormValues> = (data) => {
    const templateParams={
      me_name: "Jesus",
      user_name: data.name,
      message: data.message,
      user_email: data.email,
    }
    console.log(templateParams)
    emailjs.send(VITE_SERVICE_ID,VITE_TEMPLATE_ID,templateParams,{publicKey: VITE_PUBLIC_KEY})
    .then(
      () => {
        console.log('SUCCESS!');
        setIsSuccess(()=>true)
        reset()
        const timer = setTimeout(() => {
          setIsSuccess(()=>false);
        }, 2500); 
        clearTimeout(timer);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  return (
    <>
      <form id="myform"className="w-full sm:w-2/3 lg:w-1/3 p-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={clsx(
              "shadow-sm bg-gray-50 border border-gray-300 text-[#031926] text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light focus_style",
              { focus_style_error: errors.name?.message }
            )}
            {...register("name", {
              required: {
                value: true,
                message: "Name is required.",
              },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long.",
              },
              maxLength: {
                value: 20,
                message: "Name must not exceed 20 characters in length.",
              },
            })}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops! </span> 
              {errors.name.message?.toString()}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-[#031926] text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
            placeholder="name@example.com"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required.",
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address.",
              }
            })}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops! </span>
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="mb-5">
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-[#031926] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            {...register("message", {
              required: false,
            })}
          ></textarea>
        </div>
        <div className="flex justify-center items-center ">
          <button
            type="submit"
            className="w-full md:w-2/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      {
        isSuccess&&<Alert />
      }
    </>
  );
};
