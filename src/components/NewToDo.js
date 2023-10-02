import React, { useState } from "react";
import "../index.css";

const NewToDo = (props) => {
  const [userInput, setUserInput] = useState({
    task: "",
    time: "",
  });

  //   const taskChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       task: event.target.value,
  //     });
  //     console.log(userInput);
  //   };

  //   const timeChangeHandler = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       time: event.target.value,
  //     });
  //   };

  const inputChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const clearInput = () => {
    setUserInput({ task: "", time: "" });
  };

  function convertTo12HourFormat(time24Hour) {
    const [hour, minute] = time24Hour.split(":");
    const hourNum = parseInt(hour);
    const period = hourNum >= 12 ? "PM" : "AM";
    const hour12 = hourNum % 12 || 12;
    const time12Hour = `${hour12}:${minute} ${period}`;
    return time12Hour;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      key: Date.now(),
      task: userInput.task,
      time: convertTo12HourFormat(userInput.time),
      isChecked: false,
    };
    props.onSave(taskData);
    clearInput();
  };

  return (
    <div className="block  p-4 mb-7 bg-white h-80 xs:h-52 card-width min-w-min rounded-lg text-center">
      <form className="block" onSubmit={submitHandler}>
        <div className="flex flex-wrap gap-0 md:gap-8  text-left mb-0 md:mb-10  ">
          <div className="block">
            <label className="text-base xs:text-lg md:text-xl text-sky-600 mb-1 md:mb-2 block font-semibold">
              Task
            </label>
            <input
              type="text"
              required
              name="task"
              value={userInput.task}
              onChange={inputChangeHandler}
              className=" transition-all ease-in  duration-200 bg-slate-50 w-80 md:w-80 p-2 max-w-full outline-none text-lg rounded-xl border-2 border-transparent  shadow-md hover:bg-slate-100 focus:border-blue-500  "
            />
          </div>
          <div className="block">
            <label className="text-base xs:text-lg md:text-xl text-sky-600 mb-1 md:mb-2 block font-semibold">
              Time
            </label>
            <input
              type="time"
              required
              name="time"
              value={userInput.time}
              onChange={inputChangeHandler}
              className=" transition-all ease-in  duration-200 bg-slate-50 w-80 md:w-80 p-2 max-w-full outline-none text-lg rounded-xl border-2 border-transparent  shadow-md hover:bg-slate-100 focus:border-blue-500  "
            />
          </div>
        </div>
        <div className="text-center xs:text-right mb-2 xs:mb-4 ">
          <button className=" bg-sky-600 hover:bg-blue-700 p-3 text-base  xs:text-lg md:text-xl text-white rounded-lg add-btn  font-semibold">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewToDo;
