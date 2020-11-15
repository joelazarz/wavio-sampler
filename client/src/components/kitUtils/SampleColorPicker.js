import { useRef, useContext } from 'react'
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
import styled from 'styled-components';
import KitContext from '../../context/kit/kitContext';

const PickerContainer = styled.div`
  margin: 10px;
  display: flex;
  place-items: center;
  justify-content: space-between;
`

const SampleColorPicker = () => {
  const kitContext = useContext(KitContext);
  const { waveformColor, setWaveformColor } = kitContext;

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
