import React, { useState } from 'react';
import { FlexColumn, Container, ListItem, AuthWrapper, StyledH1 } from '../components/Commons';
import Input from '../components/Forms/Input';
import Button from '../components/Button';
import  Card  from '../components/Card';
import axios from 'axios';

const PAGE_STATE = {
    pageTitle: '',
    cover: '',
    emoji: '',
    selection: '',
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
        .post('http://localhost:8000', { page })
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }
    return (
      <FlexColumn>
        {/* <Container>
        <ul className='list-grid'>
          <ListItem>
            <Card 
              header={'01'} 
              para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
              time={'2022-01-19'}
            />
          </ListItem>
          <ListItem>
            <Card 
              header={'02'} 
              para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
              time={'2022-01-19'}
            />
          </ListItem>
          <ListItem>
            <Card 
              header={'03'} 
              para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} 
              time={'2022-01-19'}
            />
          </ListItem>
        </ul>
        </Container> */}
        <Container>
          {/* <h1>Notion Recharge Integration</h1> */}
        <br></br>
        <br></br>
        <br></br>
        <AuthWrapper onSubmit={handlePageCreation}>
            <StyledH1>Start creating here.</StyledH1>

            <Input 
              type='text'
              value={page.pageTitle}
              onInput={handleChange}
              name='pageTitle'
              placeholder={"Page Title"}
            />

            <br></br>
            <br></br>
            <br></br>

            <Input 
              type='text'
              value={page.cover}
              onInput={handleChange}
              name='cover'
              placeholder={"Image URL"}
            />

            <br></br>
            <br></br>
            <br></br>

          <label>
            {/* Choose issue type: */}
            <select type='text' value={page.selection} onInput={handleChange} name='selection'>
              <option value="Error Code">Error Code</option>
              <option value="Expected Behavior">Expected Behavior</option>
              <option value="Unexpected Behavior">Unexpected Behavior</option>
              <option value="Not Specified">Not Specified</option>
            </select>
          </label>
        

            <br></br>
            <br></br>
            <br></br>
         
            <Button text={"Create New Page! ✍🏽"}/>
          </AuthWrapper>
        </Container>
      </FlexColumn>
    )
}