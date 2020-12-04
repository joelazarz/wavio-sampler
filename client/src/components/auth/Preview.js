import styled from 'styled-components';
import darkScreenshot from './preview-assets/ws-dark.png';
import lightScreenshot from './preview-assets/ws-light.png';

const TitleSpace = styled.div`
font-size: 3em;
width: 100%;
margin: 1rem;
display: flex;
justify-content: center;
text-align: center;
`

const ScreenshotSpace = styled.div`
place-items: center;
  & > img {
    border: 5px solid white;
    border-radius: 0.25em;
    width: 90%
  }
`

const FeaturesSpace = styled.div`
  background: ${({ theme }) => theme.nav};
  border-radius: 0.25em;
  width: 90%;
  margin: 2em 0;
`

const Preview = ({ theme }) => {
  return (
    <>
    <TitleSpace>
      Wavio Sampler
    </TitleSpace>
    <ScreenshotSpace>
      { theme === 'dark' ?
      <img src={darkScreenshot} alt="screenshot" />
      :
      <img src={lightScreenshot} alt="screenshot" />
      }
    </ScreenshotSpace>
    <FeaturesSpace>
      <h3>Wavio Sampler is a browser-based social DAW</h3>
    </FeaturesSpace>
    </>
  )
}

export default Preview
