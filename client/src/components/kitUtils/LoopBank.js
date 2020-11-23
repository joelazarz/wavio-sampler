import { useContext } from 'react';
import LoopContext from '../../context/loop/loopContext';

import {ReactComponent as CallUpIcon} from '../../css/icons/leftarrow.svg'
import {ReactComponent as SequenceIcon} from '../../css/icons/plus-sign.svg'
import styled from 'styled-components';

const LoopBankContainer= styled.div`
display: flex;
flex-direction: column;
min-height: 16em;
max-height: 16em;
overflow-x: hidden;
overflow-y: scroll;
background-color: ${({ theme }) => theme.nav};
padding: 0.4em;
margin: 0.5em;
border-radius: 0.25em;
` 

const LoopRow = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.body};
  max-height: 1.5em;
  min-height: 1.5em;
  width: auto;
  margin: 2px 3px;
  padding: 1px 2px;
  border-radius: 0.25em;
  & > svg {
    margin: 0rem;
    margin-right: 20px;
    height:0.8rem; 
    width: 0.8rem;
    fill: white;
  }
`

const LoopBank = () => {
  const loopContext = useContext(LoopContext);
  const { loopBank, callUpLoop, setToSequence } = loopContext;

  return (
    <LoopBankContainer>
      <>
        {loopBank.map(loop => 
          <LoopRow 
          key={loop.id} 
          >
            {loop.id} 
            <CallUpIcon onClick={() => callUpLoop(loop.id)} />
            <SequenceIcon onClick={() => setToSequence(loop.id)} />
          </LoopRow>
        )}
      </>
    </LoopBankContainer>
  );
};

export default LoopBank;
