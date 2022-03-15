import React, { useState } from 'react';
import SEO from '../components/SEO';
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

    const { submitting } = useSelector(mapState)

    const handleChange = e => {
        const { name, value } = e.target
        setPage({ ...page, [name]: value});
    }
    
    const handlePageCreation = e => {
        e.preventDefault();
        dispatch(NotionCreatePage({ page }));
        setPage(PAGE_STATE);
    }
    
    return (
      <>
      <SEO 
        title={'Create Page | Recharge Notion Integration'} 
        description={'Have a topic? Complete the form and submit you expertise!'}
      />
        <FlexColumn style={{ padding: '20px 0' }}>
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
                required={true}
              />
              
              <Textarea 
                type='text'
                value={page.content}
                onChange={handleChange}
                name='content'
                required={true}
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
              <Button 
                text={submitting ? 'Submitting' : 'Create New Page ✍🏽'}
                disabled={submitting ? true : false }
                background={submitting ? 'rgb(57 1 241 / 38%)' : ''} 
                cursor={ submitting ? 'not-allowed' : ''}
              />
            </AuthWrapper>
          </Container>
        </FlexColumn>
      </>
    );
};