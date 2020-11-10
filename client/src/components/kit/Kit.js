import Dock from './Dock';
import SamplePlayback from './SamplePlayback';
import SampleStation from './SampleStation';
import SampleControl from './SampleControl';
import LoopPlayback from './LoopPlayback';
import LoopStation from './LoopStation';
import LoopControl from './LoopControl';

const Kit = () => {
  return (
    <>
    <Dock />
    <SamplePlayback />
    <SampleStation />
    <SampleControl/>
    <LoopPlayback />
    <LoopStation />
    <LoopControl />
    </>
  )
}

export default Kit
