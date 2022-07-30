import {
  ADD_LANDLORD,
  RETRIEVE_LANDLORDS,
  UPDATE_LANDLORD,
  DELETE_LANDLORD,
  } from "../actions/types";
  const initialState = [];
  function landlordReducer(landlords = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case  ADD_LANDLORD:
        return [...landlords, payload];
      case RETRIEVE_LANDLORDS:
        return payload;
      case UPDATE_LANDLORD:
        return landlords.map((landlord) => {
          if (landlord.landlordId === payload.landlordId) {
            return {
              ...landlord,
              ...payload,
            };
          } else {
            return landlord;
          }
        });
      case DELETE_LANDLORD:
        return landlords.filter(({ landlordId }) => landlordId !== payload.landlordId);
      
      default:
        return landlords;
    }
  };
  export default landlordReducer;