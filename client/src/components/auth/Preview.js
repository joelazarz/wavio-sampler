import styled from 'styled-components';

const TitleBlock = styled.div`
grid-row-start: 2;
grid-row-end: 4;
/* height: 30vh; */
font-size: 3em;
grid-column-start: 8;
grid-column-end: 15;
margin: 1rem;
display: flex;
justify-content: center;
place-items: center;
`

const Preview = () => {
  return (
    <TitleBlock>
      Wavio Sampler
    </TitleBlock>
  )
}

export default Preview
