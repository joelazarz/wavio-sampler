// context
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import KitContext from '../../context/kit/kitContext';

// components
import Dock from './Dock';
import DropZone from '../kitUtils/DropZone';
import SampleStation from './SampleStation';
import LoopStation from './LoopStation';

const Kit = () => {
  const authContext = useContext(AuthContext);
  const kitContext = useContext(KitContext);

  const { sampleBlob, loadedKit } = kitContext

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
        <DropZone /> }
    </>
  )
};

export default Kit;
