import React, { useState } from 'react';
import { FlexColumn, Container,  AuthWrapper, StyledH1, StyledSelect, StyledOption, LabelWrapper, StyledLabel } from '../components/Commons';
import Input from '../components/Forms/Input';
import Textarea from '../components/Forms/Textarea';
import Button from '../components/Button';
import axios from 'axios';

const PAGE_STATE = {
    pageTitle: '',
    cover: '',
    emoji: '',
    selection: '',
    content: '',
  }

export default function PageCreate(){
    const [page, setPage] = useState(PAGE_STATE)

    const handleChange = e => {
        const { name, value } = e.target
        setPage({ ...page, [name]: value});
    
    }
    
    const handlePageCreation = e => {
        e.preventDefault()
        axios
        .post('https://notion-integration-server.herokuapp.com/', { page })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    return (
      <FlexColumn>
        <Container style={{justifyContent: 'center'}}>
          <AuthWrapper onSubmit={handlePageCreation}>
            <StyledH1>Start creating here.</StyledH1>
            <LabelWrapper>
              <StyledLabel>What's the page title?</StyledLabel>
            </LabelWrapper>
            <Input 
              type='text'
              value={page.pageTitle}
              onInput={handleChange}
              name='pageTitle'
              // placeholder={"Page Title"}
            />
            
            <Textarea 
              type='text'
              value={page.content}
              onChange={handleChange}
              name='content'
              // placeholder={"Write the page content here."}
            >
            </Textarea>

            <StyledSelect 
              type='text' 
              value={page.selection} 
              onInput={handleChange} 
              name='selection'
            >
              <StyledOption value="Not Specified">Not Specified</StyledOption>
              <StyledOption value="Error Code">Error Code</StyledOption>
              <StyledOption value="Expected Behavior">Expected Behavior</StyledOption>
              <StyledOption value="Unexpected Behavior">Unexpected Behavior</StyledOption>
            </StyledSelect>
            <Button text={"Create New Page ✍🏽"}/>
          </AuthWrapper>
        </Container>
      </FlexColumn>
    )
}