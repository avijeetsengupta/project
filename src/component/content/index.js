import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Content.css";

function Content() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="content">
      <h1 className="content-head">WHY BOOK WITH BEST AIRFARES?</h1>
      <div className="content-container">
        <div className="content-container-card">
          <p data-aos="fade-right" className="content-container-card-para">
            Easily the most attracted website for the people who want to travel for vacation, adventure, exploration or
            business, known for its cheapest and competitive travel itinerary and a top class customer relation
            experience BEST AIRFARES has an unparalleled customer satisfaction index based on our 4.7+ ratings on both
            BBB and Trust Pilot.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="content-container-img"
          src="https://www.bestairfares.com/images/1.jpeg"
          alt="content"
        />
      </div>
      <div className="content-container-2">
        <img
          data-aos="fade-right"
          className="content-container-img-2"
          src="https://www.bestairfares.com/images/2.png"
          alt="content"
        />
        <div className="content-container-card-2">
          <p data-aos="fade-left" className="content-container-card-para-2">
            With us you can get some of the most dynamic pricing for your flights and as first time customer you can get
            your hands on to some unpublished deals for your travel plans. You get best alternate for cheapest routs and
            different ways you have to save every extra buck in your pocket. We have a dedicated team of Travel Research
            executives who on real time basis can answer your security or conveyance related query for the next flight.
          </p>
        </div>
      </div>
      <div className="content-container-3">
        <div className="content-container-card-3">
          <p data-aos="fade-right" className="content-container-card-para-3">
            However we are best know to match our customer’s expectations in terms of providing value for money. We have
            an extremely friendly customer-company relation and terms and condition for refund and pricing where we
            ensure that every customer is given the optimal refund for cancelled tickets after minimal mandate airlines
            and service charges.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="content-container-img-3"
          src="https://www.bestairfares.com/images/3.jpeg"
          alt="content"
        />
      </div>

      <h1 className="content-head-2">Travel Deals</h1>

      <div className="content-container-4">
        <div data-aos="fade-right" className="content-container-card-4">
          <span className="content-container-card-head">Last Minute Deals</span>
          <p className="content-container-card-para-4">
            Planning vacation, deciding destinations is exciting and is instant. Do not miss out on the excitement! Let
            us help you with your last minute travel changes . Call us and unravel some of the most dynamic travel
            offers we run through out the season. Big time offers on hotels, car rentals, airfares are just on call
            away.
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="content-container-img-4"
          src="https://www.bestairfares.com/images/travel-deals2.png"
          alt="content"
        />
      </div>

      <div className="content-container-5">
        <img
          data-aos="fade-right"
          className="content-container-img-5"
          src="https://www.bestairfares.com/images/fare-alerts2.png"
          alt="content"
        />
        <div data-aos="fade-left" className="content-container-card-5">
          <span className="content-container-card-head-1">Last Minute Deals</span>
          <p className="content-container-card-para-5">
            Planning vacation, deciding destinations is exciting and is instant. Do not miss out on the excitement! Let
            us help you with your last minute travel changes . Call us and unravel some of the most dynamic travel
            offers we run through out the season. Big time offers on hotels, car rentals, airfares are just on call
            away.
          </p>
        </div>
      </div>

      <div className="content-container-6">
        <div className="content-container-card-easy">
          <img
            className="content-container-img-easy"
            src="https://www.bestairfares.com/images/features_icon.png"
            alt="content"
          />
          <h1 className="content-container-card-easy-head">Easy Booking</h1>
          <p className="content-container-card-easy-para">
            Search, select and save - the fastest way to book your trip. Find affordable flights worldwide.
          </p>
        </div>
        <div className="content-container-card-trust">
          <img
            className="content-container-img-trust"
            src="https://www.bestairfares.com/images/features_icon.png"
            alt="content"
          />
          <h1 className="content-container-card-trust-head">Trust & Safety</h1>
          <p className="content-container-card-trust-para">
            Trust and safety team is devoted to making Best Airfares a safe and reliable place to trade.
          </p>
        </div>
        <div className="content-container-card-service">
          <img
            className="content-container-img-service"
            src="https://www.bestairfares.com/images/features_icon.png"
            alt="content"
          />
          <h1 className="content-container-card-service-head">Customer Service</h1>
          <p className="content-container-card-service-para">
            For our exceptional, friendly customer service and support, call us toll free at 1-855-997-6999.
          </p>
        </div>
      </div>

      <div className="content-container-7">
        <div className="content-container-div-1">
          <h1 className="content-container-head-7">Stay up-to-date</h1>
          <p className="content-container-para-7">Subscribe and receive latest travel news</p>
        </div>
        <div className="content-container-div-2">
          <input className="content-container-input" type="text" placeholder="address@email.com" />
          <button className="content-container-btn">Subscribe</button>
        </div>
      </div>

      <div className="content-container-8">
        <h1 className="content-container-head-8">TOP TRAVEL DESTINATIONS</h1>
        <div className="content-container-small-head-8">
          <p>Domestic</p>
        </div>
        <ul className="content-container-ul-8">
          <li className="content-container-li-8 placeNames">Boston</li>
          <li className="content-container-li-8 placeNames">John F. Kennedy</li>
          <li className="content-container-li-8 placeNames">Los angeles</li>
          <li className="content-container-li-8 placeNames">Las Vegas</li>
          <li className="content-container-li-8 placeNames">Newark</li>
          <li className="content-container-li-8 placeNames">Miami</li>
        </ul>
        <div className="content-container-small-head-8-1">
          <p>International</p>
        </div>
        <ul className="content-container-ul-8-1">
          <li className="content-container-li-8-1 placeNames-1">Aruba</li>
          <li className="content-container-li-8-1 placeNames-1">Santiago</li>
          <li className="content-container-li-8-1 placeNames-1">Argentina</li>
          <li className="content-container-li-8-1 placeNames-1">Bolivia</li>
          <li className="content-container-li-8-1 placeNames-1">Brazil</li>
          <li className="content-container-li-8-1 placeNames-1">Chile</li>
        </ul>
        <ul className="content-container-ul-8-2">
          <li className="content-container-li-8-2 placeNames-2">Cancun</li>
          <li className="content-container-li-8-2 placeNames-2">Colombia</li>
          <li className="content-container-li-8-2 placeNames-2">Guadalajara</li>
          <li className="content-container-li-8-2 placeNames-2">Guatemala</li>
          <li className="content-container-li-8-2 placeNames-2">Guyana</li>
          <li className="content-container-li-8-2 placeNames-2">London</li>
        </ul>
        <ul className="content-container-ul-8-3">
          <li className="content-container-li-8-3 placeNames-3">Mexico</li>
          <li className="content-container-li-8-3 placeNames-3">Peru</li>
          <li className="content-container-li-8-3 placeNames-3">Puerto Vallarta</li>
          <li className="content-container-li-8-3 placeNames-3">San José del Cabo</li>
          <li className="content-container-li-8-3 placeNames-3">San Juan</li>
        </ul>
      </div>
    </div>
  );
}

export default Content;

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// export default function Content() {
//   useEffect(() => {
//     Aos.init({ duration: 2000, offset: 120 })
//   }, [])

//   return (
//     <div
//       style={{
//         // width: '200px',
//         height: '200px',
//         marginTop: '20px',
//         justifyContent: 'center',
//         marginLeft: '10%',
//       }}
//     >
//       <Container>
//         <Row xs={2}>
//           <Col>
//             <Card data-aos="fade-left" style={{ marginBottom: '20px' }}>
//               <Card.Header as="h5">Featured</Card.Header>
//               <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card data-aos="fade-right" style={{ marginBottom: '20px' }}>
//               <Card.Header as="h5">Featured</Card.Header>
//               <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         <Row>
//           <Col>
//             <Card data-aos="fade-left" style={{ marginBottom: '20px' }}>
//               <Card.Header as="h5">Featured</Card.Header>
//               <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card data-aos="fade-right" style={{ marginBottom: '20px' }}>
//               <Card.Header as="h5">Featured</Card.Header>
//               <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Card data-aos="fade-left" style={{ marginBottom: '20px' }}>
//               <Card.Header as="h5">Featured</Card.Header>
//               <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card data-aos="fade-right" style={{ marginBottom: '20px' }}>
//               <Card.Header as="h5">Featured</Card.Header>
//               <Card.Body>
//                 <Card.Title>Special title treatment</Card.Title>
//                 <Card.Text>
//                   With supporting text below as a natural lead-in to additional
//                   content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   )
// }
