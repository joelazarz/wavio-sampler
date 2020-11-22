import { useContext } from 'react';
import LoopContext from '../../context/loop/loopContext';
import styled from 'styled-components';

export const LoopBankContainer= styled.div`
display: flex;
flex-direction: column;
min-height: 9.5em;
max-height: 8.5em;
overflow-x: hidden;
overflow-y: scroll;
background-color: ${({ theme }) => theme.nav};
padding: 0.4em;
margin: 0.5em;
border-radius: 0.25em;
`

const LoopBank = () => {
  const loopContext = useContext(LoopContext);
  const { loopBank, callUpLoop } = loopContext;

  return (
    <LoopBankContainer>
      <ul>
        {loopBank.map(loop => <span key={loop.id} onClick={() => callUpLoop(loop.id)}>{loop.id}</span>)}
      </ul>
    </LoopBankContainer>
  )
}

export default LoopBank
