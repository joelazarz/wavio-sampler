import styled from 'styled-components';

const TitleBlock = styled.div`
grid-row-start: 2;
grid-row-end: 4;
/* height: 30vh; */
font-size: 3em;
grid-column-start: 5;
grid-column-end: 8;
margin: 1rem;
display: flex;
justify-content: center;
`

const Preview = () => {
  return (
    <TitleBlock>
      Wavio Sampler
    </TitleBlock>
  )
}

export default Preview
