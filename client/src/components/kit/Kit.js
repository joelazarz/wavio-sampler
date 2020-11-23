// context
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import SampleContext from '../../context/sample/sampleContext';
import KitContext from '../../context/kit/kitContext';
// components
import Dock from './Dock';
import DropZone from '../kitUtils/DropZone';
import SampleStation from './SampleStation';
import LoopStation from './LoopStation';

const Kit = () => {
  const authContext = useContext(AuthContext);
  const sampleContext = useContext(SampleContext);
  const kitContext = useContext(KitContext);

  const { sampleBlob, loadedKit } = sampleContext;
  const { loopBlob } = kitContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
        { sampleBlob || loadedKit || loopBlob ? 
        <>
        <Dock />
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
