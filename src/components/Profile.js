import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const Profile = () => {
    return (
        // <div style={{ height: "90%", width: "90%", marginLeft: "5%", marginTop: "5%" }}>
        // <Container fluid>
        //     <Row>
        //         <Col sm={3}>
        //             <Card>LEFT</Card>
        //             {/* <Image /> */}
        //         </Col>
        //     <Col sm={9}>
        //             <Card>RIGHT</Card>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col>
        //             <div>ROW CREATOR FUNCTION</div>
        //         </Col>
        //     </Row>
        // </Container>
        // </div>
        <div style={{ height: "90%", width: "90%", marginLeft: "5%", marginTop: "5%" }}>
            {/* need the div to limit and fix width and height to a fixed ratio  */}
            <Image src="https://domitalk.s3.us-east-2.amazonaws.com/20200923_151615.jpg" rounded fluid />
            <div>edit button</div>
            <div>row of stat links ie: friends, plants, </div>
        </div>


    )
};
export default Profile; 