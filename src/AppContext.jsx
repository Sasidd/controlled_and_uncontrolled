import React, { createContext, useState } from "react";
export const EditerContext = createContext();

const AppContext = (props) => {
    const [name , setName] = useState('')
    const [age , setAge] = useState("")
  return (
    <>
      <EditerContext.Provider
        value={{
          name,
          setName,
          age,
          setAge
        }}
      >
        {props.children}
      </EditerContext.Provider>
    </>
  );
};

export default AppContext;
