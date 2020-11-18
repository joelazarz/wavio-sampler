import styled from 'styled-components';

const FormContainer = styled.div`
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

const KitSubmit = styled.input`
  font-family: inherit;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.nav};
  border: 1px solid white;
  border-radius: 0.25em;
  margin: 0.5rem;
  padding: 0.3rem;
`


const SaveKitForm = () => {
  
  return (
    <FormContainer>
      <KitNameInput name="name" type="text" placeholder="kit name" />
      <KitSaveWarning>For security purposes you will need to choose the file again - Thank you.</KitSaveWarning>
      <KitSubmit type="submit" value="Save Kit" />
    </FormContainer>
  )
}

export default SaveKitForm
