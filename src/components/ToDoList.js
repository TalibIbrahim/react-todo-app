import React from "react";
import ListItem from "./ListItem";
import Card from "../UI/Card";

const ToDoList = (props) => {
  const incompleteTasks = props.listItems.filter(
    (item) => item.isChecked === false
  );
  const completedTasks = props.listItems.filter(
    (item) => item.isChecked === true
  );

  const cardStyle =
    "transition-all ease-in  duration-200 h-16 md:h-20 mb-4 p-4 flex min-w-min justify-between rounded-lg bg-green-400  w-full";
  const checkboxStyle =
    "m-2 appearance-none w-4 md:w-5 h-4 md:h-5 border-2 border-green-700 rounded-full    bg-white  checked:border-green-700 checked:border-6";
  const delBtnStyle =
    " transition-all ease-in  duration-200 bg-green-400 text-red-600 text-center  px-1 hover:bg-red-600 hover:text-white rounded-full material-symbols-outlined";

  return (
    <Card>
      <div className="text-white  w-full p-6 ">
        {props.listItems.length === 0 ? (
          <h1 className="text-xl md:text-2xl text-center font-semibold">
            No Tasks Found
          </h1>
        ) : (
          <>
            {incompleteTasks.length > 0 && (
              <>
                <h2 className="text-xl md:text-2xl text-center font-semibold mb-2">
                  To Do:
                </h2>
                {incompleteTasks.map((item) => (
                  <ListItem
                    key={item.key}
                    id={item.key}
                    task={item.task}
                    time={item.time}
                    isChecked={item.isChecked}
                    onDelete={props.onDelete}
                    onCheck={props.onCheck}
                  />
                ))}
              </>
            )}

            {completedTasks.length > 0 && (
              <>
                <h2 className="text-xl md:text-2xl text-center font-semibold mb-2">
                  Completed:
                </h2>
                {completedTasks.map((item) => (
                  <ListItem
                    key={item.key}
                    id={item.key}
                    task={item.task}
                    time={item.time}
                    cardStyle={cardStyle}
                    checkboxStyle={checkboxStyle}
                    delBtnStyle={delBtnStyle}
                    isChecked={item.isChecked}
                    onDelete={props.onDelete}
                    onCheck={props.onCheck}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </Card>
  );
};

export default ToDoList;
