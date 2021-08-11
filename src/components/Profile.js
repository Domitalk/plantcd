import styled from 'styled-components';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const Profile = () => {

    const ProfileCard = styled(Card)`
        border-color: red;
    `;


    return (
        <div>
            profile page container contains the entire page 
            <div>
                <ProfileCard>
                    <Image src="https://domitalk.s3.us-east-2.amazonaws.com/20200923_151615.jpg" rounded fluid />

                </ProfileCard>
            </div>
        </div>

    )
};
export default Profile; 