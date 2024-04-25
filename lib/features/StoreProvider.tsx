"use client";
 import { store } from "../store";
 import { Provider } from "react-redux";

 import React, { Children } from 'react'

 type Props = {}

 export default function StoreProvider({children}: {children: React.ReactNode}) {
   return (
     <Provider store={store}>{children}</Provider>
   )
 }
