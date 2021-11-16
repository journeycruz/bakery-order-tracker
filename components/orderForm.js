import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import CupcakeSVG from "./cupcake";

export default function OrderForm({ _id }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createOrder", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return (
      <div className='m-auto'>
        <CupcakeSVG />
      </div>
    );
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your order!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            order: {formData.order}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-2xl mt-8 lg:mt-20 mx-auto grid items-end grid-cols-1 lg:max-w-7xl lg:shadow-lg lg:p-8 p-4 rounded-lg'
      disabled>
      <h3 className='text-xl font-normal tracking-tight text-gray-900 mb-6'>
        Order these
      </h3>
      <input {...register("_id")} type='hidden' name='_id' value={_id} />
      <label className='block mb-5'>
        <span className='text-gray-700'>Name</span>
        <input
          name='name'
          {...register("name", { required: true })}
          className='shadow-inner border rounded py-2 px-3 form-input mt-1 block w-full'
          placeholder='John Appleseed'
        />
      </label>
      <label className='block mb-5'>
        <span className='text-gray-700'>When do you need these by?</span>
        <input
          name='neededBy'
          {...register("neededBy", { required: true })}
          className='shadow-inner border rounded py-2 px-3 form-input mt-1 block w-full'
          placeholder='November 14, 2014'
        />
      </label>
      <label className='block mb-5'>
        <span className='text-gray-700'>Email</span>
        <input
          name='email'
          type='email'
          {...register("email", { required: true })}
          className='shadow-inner border rounded py-2 px-3 form-input mt-1 block w-full'
          placeholder='example@email.com'
        />
      </label>
      <div>
      </div>
      <label className='block mb-5'>
        <span className='text-gray-700'>Order</span>
        <textarea
          {...register("order", { required: true })}
          name='order'
          className='shadow-inner border rounded py-2 px-3  form-textarea mt-1 block w-full'
          rows='8'
          placeholder='Enter your order here'></textarea>
      </label>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input
        type='submit'
        className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
      />
    </form>
  );
}
