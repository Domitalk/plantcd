import styled from 'styled-components';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import { Gear } from 'react-bootstrap-icons';

// TODO
// 7. name field center
// 8. descriptors field center 

const Profile = () => {

    // testing the effect of styled on react bootstrap
    const ProfileCard = styled(Card)`
        width: 300px;
        height: 600px; 
    `;

    const ProfileImage = styled(Image)`
        width: 260px;
        height: 260px;
        align-self: center;
        object-fit: cover;
    `;
    
    const GearOnTopRight = styled(Gear)`
        margin-top: 2px;
        margin-right: 2px;
        align-self: flex-end; 
    `;

    const CenteredCardTitle = styled(Card.Title)`
        margin-top: 10px;
        align-self: center;
    `

    const CenteredCardText = styled(Card.Text)`
        align-self: center;
        text-align: center; 
    `

    return (
        <div>
            <div>
                <ProfileCard>
                    <GearOnTopRight />
                    <ProfileImage src="https://domitalk.s3.us-east-2.amazonaws.com/20200923_151615.jpg" roundedCircle />
                    <CenteredCardTitle>
                        FirstName LastName
                    </CenteredCardTitle>
                    <CenteredCardText>
                        Summary Text Summary Text Summary Text Summary Text Summary Text
                    </CenteredCardText>
                </ProfileCard>
            </div>
        </div>

    )
};
export default Profile; 