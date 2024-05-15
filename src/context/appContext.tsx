import React, {createContext, useState} from 'react';
import {drillsData} from '../components/constant';

const AppContext = createContext();

const AppProvider = ({children}) => {
  const [contents, setContents] = useState(drillsData);
  const [currentContents, setCurrentContents] = useState();

  const updateCurrentContents = data => {
    setCurrentContents(data);
  };
  const handleFinishDrill = data => {
    // const found = contents.map((item) => {
    //   if (item.id === data.id) {
    //     item.isCompleted = true;
    //   }
    // });
    // setContents(found);
    // setContents((prevContents) => {
    //   return prevContents.map((item) => {
    //     if (item.id === data.id) {
    //       return { ...item, isCompleted: true };
    //     }
    //     return item;
    //   });
    // });
  };

  return (
    <AppContext.Provider
      value={{
        contents,
        handleFinishDrill,
        updateCurrentContents,
        currentContents,
      }}>
      <>{children}</>
    </AppContext.Provider>
  );
};

export {AppProvider, AppContext};
