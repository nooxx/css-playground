import {createContext, Dispatch, SetStateAction} from "react"

export type AppContextType = {
    areAllVideosPlaying: boolean,
    setAppContext: Dispatch<SetStateAction<AppContextType>>
}

export const AppContextInitialValue: AppContextType = {
    areAllVideosPlaying: false,
    setAppContext: (): void => {
        throw new Error('setContext function must be overridden');
    },
}

export const AppContext = createContext<AppContextType>(AppContextInitialValue)
