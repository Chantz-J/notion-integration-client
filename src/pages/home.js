import React from 'react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { FlexColumn, Container, StyledH1 } from '../components/Commons';
import Knowledge  from '../svgs/Knowledge';

export default function Home(){
    const navigate = useNavigate() // RIP useHistory 😭
    return (
            <>
                <SEO 
                    title={'Home | Recharge Notion Integration'} 
                    description={'A Notion Integration to post solutions to an easily-searchable database'}
                />
                    <FlexColumn>
                        <Container>
                            <StyledH1>Make a POST request to a Notion Database 👋🏽</StyledH1>
                            <Knowledge />
                        </Container>
                        <Container>
                            <p>Client app that will turn form data into a Notion Database item.</p>
                        </Container>
                        <Container>
                            <Button 
                                text={'Start Creating Pages'} 
                                onClick={() => navigate('/create-page')}
                            />
                        </Container>
                    </FlexColumn>
             </>
    )
}