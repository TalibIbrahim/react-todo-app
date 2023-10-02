import React from "react";
import "../index.css";

const ListItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const handleCheckBoxChange = () => {
    props.onCheck(props.id, !props.isChecked);
  };

  const cardStyle = props.cardStyle
    ? props.cardStyle
    : "transition-all ease-in  duration-200 h-16 md:h-20 mb-4 p-4 flex min-w-min justify-between rounded-lg bg-white w-full";
  const checkboxStyle = props.checkboxStyle
    ? props.checkboxStyle
    : "m-2 appearance-none w-4 md:w-5 h-4 md:h-5 border-2 border-blue-500 rounded-full hover:cursor-pointer    bg-white  checked:border-blue-500 checked:border-6";
  const delBtnStyle = props.delBtnStyle
    ? props.delBtnStyle
    : "transition-all ease-in  duration-200 bg-white text-red-600 text-center  px-1 hover:bg-red-600 hover:text-white rounded-full material-symbols-outlined";

  return (
    <div className={cardStyle}>
      <div className="flex justify-between items-center  ">
        <input
          type="checkbox"
          onChange={handleCheckBoxChange}
          checked={props.isChecked ? "checked" : undefined}
          className={checkboxStyle}
        />
        <h2 className="m-1 text-black text-lg md:text-xl font-semibold">
          {props.task}
        </h2>
        <h2 className="m-1 text-neutral-500 text-base md:text-lg font-semibold">
          {props.time}
        </h2>
      </div>
      <div className="flex justify-between del-btn text-center p-2 h-12 w-12">
        <button className={delBtnStyle} onClick={deleteHandler}>
          delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
