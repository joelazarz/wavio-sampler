import { useRef, useContext } from 'react'
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import styled from 'styled-components';
import SampleContext from '../../context/sample/sampleContext';

const PickerContainer = styled.div`
  margin: 2px 10px;
  display: flex;
  place-items: center;
  justify-content: space-between;
`

const SampleColorPicker = () => {
  console.log('sample color picker re render');

  const sampleContext = useContext(SampleContext);
  const { waveformColor, setWaveformColor } = sampleContext;

  const pickerRef = useRef();

  const hex2rgba = (hex,a) => `rgba(${hex.substr(1).match(/../g).map(x=>+`0x${x}`)},${a})`;

  const changeHandler = (colorObj) => {
    setWaveformColor(hex2rgba(colorObj.color, 1));
  };

  return (
    <PickerContainer>
      <span>Waveform Color:</span>
      <ColorPicker 
        ref={pickerRef}
        color={waveformColor}
        defaultColor={waveformColor}
        enableAlpha={false}
        onChange={changeHandler}
        mode={'RGB'}
      />
    </PickerContainer>
  );
};

export default SampleColorPicker;
