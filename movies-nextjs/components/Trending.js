import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       {/*  <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/xmen.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Xmen Days of Future Past</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <img src="/xmen.jpg" alt="card image"  height="auto"></img>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>X-Men</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       
         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/xmen.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Xmen Days of Future Past</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/xmen.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Xmen Days of Future Past</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       
      
       </Card> }
       </Col>  */}

       <div class="col-md-4">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5> Xmen Days of Future Past </h5>
            <p>Bagus 3.8/4.0</p>
          </div>
          <a href="#">
            <div class="property-social-icons">
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5> Xmen Days of Future Past </h5>
            <p>Bagus 3.8/4.0</p>
          </div>
          <a href="#">
            <div class="property-social-icons">
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5> Xmen Days of Future Past </h5>
            <p>Bagus 3.8/4.0</p>
          </div>
          <a href="#">
            <div class="property-social-icons">
            </div>
          </a>
        </div>
      </div>

      <div class="col-md-4">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title">
              </div>
            </div></a>
          <div class="property-description">
            <h5> Xmen Days of Future Past </h5>
            <p>Bagus 3.8/4.0</p>
          </div>
          <a href="#">
            <div class="property-social-icons">
            </div>
          </a>
        </div>
      </div>
   </Row>
</Container>

   )
}
export default Trending
