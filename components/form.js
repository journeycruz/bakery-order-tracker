import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import CupcakeSVG from "./cupcake";

const people = [
  {
    id: 1,
    name: "Yes",
  },
  {
    id: 2,
    name: "No",
  },
];

export default function Form({ _id }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selected, setSelected] = useState(people[0]);
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
      response = await fetch("/api/createComment", {
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
      <div className='grid place-content-center'>
        <CupcakeSVG />
      </div>
    );
  }
  if (hasSubmitted) {
    return (
      <div className='grid place-content-center'>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-2xl mt-8 lg:mt-20 mx-auto grid items-end grid-cols-1 lg:max-w-7xl lg:shadow-lg lg:p-8 p-4 rounded-lg'
      disabled>
      <h3 className='text-xl font-normal tracking-tight text-gray-900 mb-6'>
        Let us know what you think:
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
        <label>
          <div className='mb-5 w-full'>
            <span className='text-gray-700'>Rating</span>
            <br />
            <input
              name='rating'
              type='rating'
              {...register("rating", { required: true })}
              className='shadow-inner border rounded py-2 px-3 form-input mt-1 w-4/6'
              placeholder='5 (decimals are allowed)'
            />
            <span className='my-auto pl-4 text-gray-700'> out of 5 stars</span>
          </div>
          <div className='mb-5'>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className='block text-gray-700'>
                    Would you recommend?
                  </Listbox.Label>
                  <div className='mt-1 relative'>
                    <Listbox.Button className='relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                      <span className='flex items-center'>
                        <span className='ml-3 block truncate'>
                          {selected.name}
                        </span>
                      </span>
                      <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                        <SelectorIcon
                          className='h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      leave='transition ease-in duration-100'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'>
                      <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={person}>
                            {({ selected, active }) => (
                              <>
                                <div className='flex items-center'>
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}>
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}>
                                    <CheckIcon
                                      className='h-5 w-5'
                                      aria-hidden='true'
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
        </label>
      </div>
      <label className='block mb-5'>
        <span className='text-gray-700'>Comment</span>
        <textarea
          {...register("comment", { required: true })}
          name='comment'
          className='shadow-inner border rounded py-2 px-3  form-textarea mt-1 block w-full'
          rows='8'
          placeholder='Enter your comment here'></textarea>
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
