import { useContext } from 'react';
import LoopContext from '../../context/loop/loopContext';
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
`

const LoopBank = () => {
  const loopContext = useContext(LoopContext);
  const { loopBank, callUpLoop } = loopContext;

  return (
    <LoopBankContainer>
      <>
        {loopBank.map(loop => 
          <LoopRow key={loop.id} onClick={() => callUpLoop(loop.id)}>{loop.id}</LoopRow>
        )}
      </>
    </LoopBankContainer>
  );
};

export default LoopBank;
