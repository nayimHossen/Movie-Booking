import React from "react";
import { useForm } from "react-hook-form";

const Booking = ({ movieData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle text-white bg-primary absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="font-bold text-2xl text-primary mb-4">{name}</h3> */}

          {/* Modal from start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input filed start */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* Name Input filed end */}

            {/* Email Input filed start */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email Input filed end */}

            {/* date Input filed start */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Date</span>
              </label>
              <input
                type="date"
                placeholder="Select Date"
                className="input input-bordered w-full"
                {...register("date", {
                  required: {
                    value: true,
                    message: "date is Required",
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.date.message}
                  </span>
                )}
                {errors.date?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.date.message}
                  </span>
                )}
              </label>
            </div>
            {/* date Input filed end */}

            {/* slots Input filed start */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Slots</span>
              </label>
              <select
                type=""
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Slot is Required",
                  },
                })}
              >
                <option>09:00am - 12:00am</option>
                <option>12:00am - 02:00pm</option>
                <option>02:00pm - 05:00pm</option>
              </select>
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/*slots Input filed start */}

            {/* Booking Button */}
            <input
              className="btn btn-primary w-full text-white"
              type="submit"
              value="Booking"
            />
          </form>
          {/* Modal from end */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
