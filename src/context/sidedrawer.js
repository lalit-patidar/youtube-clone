import {createContext} from "react";

const sideDrawerState = {
    showSideDrawer: true,
}

 const sideDrawerContext = createContext(sideDrawerState);

 export default sideDrawerContext;
