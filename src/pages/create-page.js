import React, { useState } from 'react';
import { 
  FlexColumn, 
  Container,  
  AuthWrapper, 
  StyledH1, 
  StyledSelect, 
  StyledOption, 
  LabelWrapper, 
  StyledLabel } from '../components/Commons';
import Input from '../components/Forms/Input';
import Textarea from '../components/Forms/Textarea';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux'

import { NotionCreatePage } from '../redux/notion/notion-actions';

const PAGE_STATE = {
    pageTitle: '',
    emoji: '',
    cover: '',
    selection: '',
    content: '',
  }

const mapState = ({ notion }) => ({
  errors: notion.errors,
  pageURL: notion.pageURL,
  submitting: notion.submitting,
  submitted: notion.submitted
})

export default function CreatePage(){
    const dispatch = useDispatch()
    const [page, setPage] = useState(PAGE_STATE)

    const { submitted, submitting } = useSelector(mapState)

    const handleChange = e => {
        const { name, value } = e.target
        setPage({ ...page, [name]: value});
    }
    
    const handlePageCreation = e => {
        e.preventDefault()
        dispatch(NotionCreatePage({ page }));
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
            />
            
            <Textarea 
              type='text'
              value={page.content}
              onChange={handleChange}
              name='content'
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
            {
              submitted ? 
              <>
                <p style={{ color: 'green', textAlign: 'center'}}>Thanks for your Submission! For now, if you would like to submit again, please refresh the page. Or, take a look at your page
                  <a 
                    style={{ marginLeft: '0.4rem'}}
                    target='_blank'
                    href="https://www.notion.so/994c24e36390405dbb3a69c044596817?v=a0786629e0614375a9755bfd1cc28c8c" 
                    rel="noreferrer"
                  >
                    here.
                  </a>
                </p>
              </>
              :
              <Button 
                text={submitting ? 'Submitting to Notion...' : 'Create New Page ✍🏽'}
                background={submitting ? 'rgb(57 1 241 / 38%)' : ''} 
              />
            } 
          </AuthWrapper>
        </Container>
      </FlexColumn>
    )
}