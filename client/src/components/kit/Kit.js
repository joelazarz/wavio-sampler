// context
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SampleContext from '../../context/sample/sampleContext';

// components
import Dock from './Dock';
import DropZone from '../kitUtils/DropZone';
import SampleStation from './SampleStation';
import LoopStation from './LoopStation';

const Kit = () => {
  const authContext = useContext(AuthContext);
  const sampleContext = useContext(SampleContext);

  const { sampleBlob, loadedKit } = sampleContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Dock />
        { sampleBlob || loadedKit ? 
        <>
        <SampleStation /> 
        <LoopStation />
        </>
        : 
        <DropZone /> 
      }
    </>
  )
};

export default Kit;
