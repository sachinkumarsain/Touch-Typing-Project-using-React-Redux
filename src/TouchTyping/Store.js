import { configureStore } from "@reduxjs/toolkit";
import slicereduser from "./Slice"
export default configureStore ({
    reducer:{
        touchType:slicereduser
    }
})