import { useContext, useEffect } from 'react';
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
  grid-row-start: 4;
  grid-row-end: 8;
  grid-column-start: 5;
  grid-column-end: 12;
  height: 18em;
  flex-direction: column;
  place-items: center;
  border-width: 2px;
  border-radius: 1em;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  outline: none;
  transition: border .24s ease-in-out;
`;

const DropText = styled.div`
  background-color: rgb(255,250,250, 0.1);
  padding: 5em;
  border: 1px dotted white;
  border-radius: 0.25em;
`

const DropZone = (props) => {
  const kitContext = useContext(KitContext);
  const { loadSample } = kitContext;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    onDrop
  } = useDropzone({
    accept: 'audio/*',  
    maxFiles: 1,
    maxSize: 10000000
  });

  useEffect(() => {
    if (acceptedFiles === null) { return; };
    acceptedFiles.forEach(file => { 
      const sampleURL = URL.createObjectURL(file)
      loadSample(sampleURL);
    });
  },[acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    onDrop])

  return (
      <Container {...getRootProps({
        isDragActive, 
        isDragAccept, 
        isDragReject,
        })}>
        <input {...getInputProps()} />
        <DropText>
          Drag 'n' drop some files here, or click to select files
        </DropText>
      </Container>
  )
}

export default DropZone;
