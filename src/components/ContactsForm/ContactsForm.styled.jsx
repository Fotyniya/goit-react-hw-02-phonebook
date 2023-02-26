import styled from 'styled-components';
import {ErrorMessage as FormikError} from 'formik'

export const FormField = styled.label`
display: flex;
flex-direction: column;
width: 200px;
gap: 4px;
margin-bottom: 8px;
`
export const FormContainer = styled.div`
border: 1px solid black;
width: 300px;
padding: 16px;
`
export const Button = styled.button`
    border: 1px solid #F4EFEF;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px; 
`
export const ErrorMessage = styled(FormikError)`
    color: tomato;
`
