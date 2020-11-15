import { useContext } from 'react';
import KitContext from '../../context/kit/kitContext';

import { TitleContainer } from '../../css/TitleContainer';

const RegionHover = () => {
  const kitContext = useContext(KitContext);
  const { hoverRegion } = kitContext;

  if(!hoverRegion) {
    return <TitleContainer />
  };

  return (
    <TitleContainer>
      <span>{hoverRegion ? `Region: [${hoverRegion.id}] ` : '...'}</span>
    </TitleContainer>
  )
};

export default RegionHover;
