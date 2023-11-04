import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(), // side effects like this should always be done in prepare method not reducer
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

//  *** WITH STORE-V2 (without redux toolkit)
// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
