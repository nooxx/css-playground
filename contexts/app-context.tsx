import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react"

type ContextValues = {
    areAllVideosPlaying: boolean,
}

// Context interface
type AppContextInterface = {
    appContext: ContextValues,
    setAppContext: Dispatch<SetStateAction<ContextValues>>,
}

// Default values
const DEFAULT_CONTEXT_VALUES = {
    areAllVideosPlaying: false,
}

// Whole context default value (with functions)
const AppContextDefaultValue: AppContextInterface = {
    appContext: {...DEFAULT_CONTEXT_VALUES},
    setAppContext: (): void => {
        throw new Error('setAppContext function must be overridden');
    },
}

// App context created by react
export const AppContext = createContext<AppContextInterface>(AppContextDefaultValue)

// App context provider, used in <Layout> so you can access the context within the whole app
export const AppContextProvider = ({children}: { children: ReactNode}) => {
    const [appContext, setAppContext] = useState<ContextValues>(DEFAULT_CONTEXT_VALUES)

    return (
        <AppContext.Provider value={{appContext, setAppContext}}>
            {children}
        </AppContext.Provider>
    )
}
