import React from "react";

const AppContainer = (props) => {
  return (
    <div className="flex flex-col p-8 h-screen justify-center items-center bg-neutral-800">
      {props.children}
    </div>
  );
};

export default AppContainer;
