import styled from 'styled-components';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'


// TODO
// 1. fix the size of the card OR max height / width ?
// 2. fix size of the profile image
// 3. round the image
// 4. center the image
// 5. find pencil aka edit image
// 6. position it to the top right corner
// 7. name field center
// 8. descriptors field center 

const Profile = () => {

    // testing the effect of styled on react bootstrap
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