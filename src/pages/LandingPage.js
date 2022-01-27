import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { FlexColumn, Container, StyledH1 } from '../components/Commons';

export default function LandingPage(){
    const navigate = useNavigate()
    return (
        <FlexColumn>
            <Container>
                <StyledH1>Quick ad-hoc way to document complex merchant issues, and their solutions. 👋🏽</StyledH1>
            </Container>
            <Container>
                 <p>A Notion Integration to post solutions to an easily-searchable database</p>
            </Container>
            <Container>
                <Button 
                    text={'Start Creating Pages!'} 
                    onClick={() => navigate('/create-page')}
                />
            </Container>
        </FlexColumn>
    )
}