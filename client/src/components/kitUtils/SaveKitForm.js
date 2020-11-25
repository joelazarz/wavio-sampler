import SampleContext from '../../context/sample/sampleContext';
import { useState, useEffect, useContext } from 'react'; 

import { useDropzone } from 'react-dropzone';
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

const FormContainer = styled.form`
  display: flex; 
  /* margin: 4px 10px; */
  flex-direction: column;
  margin: 0.5em;
  max-width: 96%;
  min-width: 96%;
  min-height: 80%;
  /* background-color: ${({ theme }) => theme.nav}; */
  border-radius: 0.25em;
`

const KitNameInput = styled.input`
  display: flex;
  /* width: 100%; */
  margin: 0.5em;
  padding: 5px;
  font-family: inherit;
  background-color: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  border: 0.5px dotted white;
  border-radius: 0.25em;
  place-items: center;
`

const KitSaveWarning = styled.div`
  display: flex;
  /* width: 100%; */
  align-self: flex-start;
  max-width: 96%;
  min-width: 96%;
  font-family: inherit;
  font-size: 10px;
  background-color: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  margin: 0.5em;
  padding: 0.3rem;
`

const DropContainer = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 0.5em;
  max-width: 96%;
  min-width: 96%;
  height: 4em;
  font-family: inherit;
  flex-direction: column;
  place-items: center;
  border-width: 1px;
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
  padding: 4px;
  margin: 10px;
  font-size: 10px;
  border: 1px dotted white;
  border-radius: 0.25em;
  transition: all 250ms ease 0s;
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const KitSubmit = styled.input`
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.nav};
  border: 1px solid white;
  border-radius: 0.25em;
  margin: 0.5rem;
  padding: 0.3rem;
  transition: all 250ms ease 0s;
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const SaveKitForm = (props) => {

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    onDropAccepted
  } = useDropzone({
    accept: 'audio/*',  
    maxFiles: 1,
    maxSize: 10000000
  });

  const sampleContext = useContext(SampleContext);
  const { uploadSample, sampleLink, createKit } = sampleContext;

  const [kit, setKit] = useState({
    name: '',
    sample: ''
  });

  const { name, sample } = kit;

  const onChange = e => setKit({...kit, [e.target.name]: e.target.value});

  useEffect(() => {
    if (acceptedFiles.length === 0) { return; };
    let formData = new FormData();
    setKit({name: acceptedFiles[0].name});
    formData.append('audio', acceptedFiles[0]);
    uploadSample(formData);
    // eslint-disable-next-line
  },[acceptedFiles])

  useEffect(() => {
    setKit({
      name: kit.name,
      sample: sampleLink
    });
    // eslint-disable-next-line
  }, [sampleLink])

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || sample === '') {
      // set alert
      console.log('set alert for failed register');
    } else {
      createKit({
        name,
        sample
      });
    };
  };
  
  return (
    <FormContainer onSubmit={onSubmit}>
      <KitNameInput 
      name="name" 
      type="text" 
      placeholder="kit name" 
      value={name} 
      onChange={onChange}
      className="text-input"
      required
      />
      <KitSaveWarning>For security purposes you will need to choose the file again - Thank you.</KitSaveWarning>
      <DropContainer
      {...getRootProps({
        isDragActive, 
        isDragAccept, 
        isDragReject,
        })}>
        <input {...getInputProps()} required/>
        <DropText>{
        onDropAccepted && sampleLink === null ?
        <span>Loading... </span>
        :
        <span>Drag file or click to choose</span>
        }</DropText>
      </DropContainer>
      <KitSubmit 
      type="submit" 
      value="Save Kit" 
      />
    </FormContainer>
  )
}

export default SaveKitForm
