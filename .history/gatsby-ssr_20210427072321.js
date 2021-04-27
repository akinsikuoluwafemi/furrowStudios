import React from "react"
import { GlobalStoreProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalStoreProvider>{element}</GlobalStoreProvider>
}
