import { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import KitContext from '../../context/kit/kitContext';
import styled from 'styled-components';

const getColor = (props) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isDragActive) {
      return '#2196f3';
  }
  return '#eeeeee';
}

const Container = styled.div`
  display: grid;
  margin: 0em 2em;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 5;
  grid-column-end: 13;
  height: 18em;
  padding-right: 2rem;
  padding-left: 2rem;
  flex-direction: column;
  place-items: center;
  border-width: 2px;
  border-radius: 0.25em;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: border .24s ease-in-out;
`;

const DropZone = (props) => {
  const kitContext = useContext(KitContext);
  const { loadSample } = kitContext;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'audio/*',  maxFiles:1});

  if (acceptedFiles === null) { return; };
  acceptedFiles.forEach(file => { 
    const sampleURL = URL.createObjectURL(file)
    loadSample(sampleURL);
  });

  return (
      <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
  )
}

export default DropZone;
