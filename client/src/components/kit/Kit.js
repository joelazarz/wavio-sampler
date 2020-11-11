// context
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
// components
import Dock from './Dock';
import SampleStation from './SampleStation';
import LoopStation from './LoopStation';

const Kit = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <Dock />
    <SampleStation />
    <LoopStation />
    </>
  )
};

export default Kit;
