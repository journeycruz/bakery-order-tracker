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
    console.log(data);
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
    <div>
      <div class='min-h-screen bg-transparent py-6 flex flex-col sm:py-12'>
        <div class='relative md:w-11/12 md:mx-auto sm:mx-auto'>
          <div class='absolute inset-0 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 rounded-3xl'></div>
          <div class='relative bg-white shadow-lg rounded-3xl p-6'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='mx-auto grid items-end grid-cols-1 p-4 rounded-lg'
              disabled>
              <h3 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl pb-12'>
                Order these
              </h3>
              <input
                {...register("_id")}
                type='hidden'
                name='_id'
                value={_id}
              />
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
                <span className='text-gray-700'>
                  When do you need these by?
                </span>
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
              <div></div>
              <label className='block mb-5'>
                <span className='text-gray-700'>Order</span>
                <textarea
                  {...register("order", { required: true })}
                  name='order'
                  className='shadow-inner border rounded py-2 px-3  form-textarea mt-1 block w-full'
                  rows='5'
                  placeholder='Enter your order here'></textarea>
              </label>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <input
                type='submit'
                value='Submit Order'
                className='shadow w-1/2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
