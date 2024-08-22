import React, {createContext, useState, ReactNode} from 'react';
interface Content {
  id: string;
  isCompleted?: boolean;
  title: string;
  description: string;
  thumbnail: string;
  animationUrl: string;
  duration: {
    minutes: number;
    seconds: number;
  };
}

interface AppContextType {
  contents: Content[];
  currentContents: Content | undefined;
  setContents: (data: Content[]) => void;
  updateCurrentContents: (data: Content) => void;
  handleFinishDrill: (data: Content) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [contents, setContents] = useState<Content[]>([]);
  const [currentContents, setCurrentContents] = useState<Content | undefined>();

  const updateCurrentContents = (data: Content) => {
    setCurrentContents(data);
  };

  const handleFinishDrill = (data: Content) => {
    setContents(prevContents =>
      prevContents.map(item =>
        item.id === data.id ? {...item, isCompleted: true} : item,
      ),
    );
  };

  return (
    <AppContext.Provider
      value={{
        contents,
        handleFinishDrill,
        updateCurrentContents,
        currentContents,
        setContents,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {AppProvider, AppContext};
