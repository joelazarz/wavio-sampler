import { useReducer } from 'react';
import axios from 'axios';
import KitContext from './kitContext';
import kitReducer from './kitReducer';
// import types

const KitState = props => {
  const initialState ={

  };

  const [state, dispatch] = useReducer(kitReducer, initialState);

  // Get kits

  // Get selected kit

  // Create kit

  // Edit kit

  // Delete kit

  // Create region

  // Delete region

  return (
    <KitContext.Provider
    value={{
      
    }}
    >
      {props.children}
    </KitContext.Provider>
  );
};

export default KitState;
