import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Jumbotron,
  Container,
  CardImgOverlay
} from "reactstrap";

import "./style.css";

const Team = props => {
  return (
    <div>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4">Your Event Team</h1>
            <p className="lead">
              Here are the vendors we recommend for your event. Feel free to
              contact them or explore other vendors in your area.
            </p>
          </Container>
        </Jumbotron>
      </div>
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Jason Mowry</CardTitle>
            <CardSubtitle>DJ</CardSubtitle>
            <CardText>
              We have been blessed by being a part of many events! We will bring
              a memorable experience to your special day! We love and enjoy what
              we do! We would love to make your event an amazing experience!
              When looking for DJ services in Spanish, we are bilingual
              (English/Spanish) as well!
            </CardText>
            <Button>Contact me</Button>
          </CardBody>
        </Card>
        {/* ================================================================================================================ */}
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1531058240690-006c446962d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>The Parcel Flower Co.</CardTitle>
            <CardSubtitle>Florist</CardSubtitle>
            <CardText>
              The Parcel Flower Co. is a farm and design studio based in the
              Lower Hudson Valley specializing in unique designs with a
              sustainable approach. We do this in many ways like growing our own
              flowers, sourcing locally, offering rentals of hard goods,
              composting materials and drying flowers.
            </CardText>
            <Button>Contact me</Button>
          </CardBody>
        </Card>
        {/* ================================================================================================================ */}
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1473433657392-e7e31b785bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Evan Clarkson Photography</CardTitle>
            <CardSubtitle>Photographer</CardSubtitle>
            <CardText>
              I see my job as more than just being a photographer. I am the
              grounding center during the day when things get hectic. Im there
              to make irrevant jokes during group photos to get genuine laughs
              out of dad From the moment of our 1st meeting until all the photos
              are delivered and thank you cards.
            </CardText>
            <Button>Contact me</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck>
        {/* ================================================================================================================ */}
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1528809217021-151305b50e55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Angela Hudson</CardTitle>
            <CardSubtitle>Event planner</CardSubtitle>
            <CardText>
              Angela Hudson caters to your planning, coordinating, or design
              needs. Whether its a wedding, shower, party, conference, memorial
              service, or festival, we are here to help. Bringing the utmost
              integrity and professionalism, our company is here to serve you.
              Utilizing only the highest quality vendors, we strive to deliver
              an unmatched service. We turn your ideas and concepts into a
              beautiful event you will not soon forget.
            </CardText>
            <Button>Contact me</Button>
          </CardBody>
        </Card>

        {/* ================================================================================================================ */}
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Wennington Catering Co.</CardTitle>
            <CardSubtitle>Caterers</CardSubtitle>
            <CardText>
              Our mission is to cultivate special relationships, creating
              experiences to suit distinct needs and personality while providing
              hospitality, gracious service, and exceptional food in a lovely
              setting. Our dedicated multicultural tastemakers, culinary, and
              service team translate their passion for food, wine, cocktails,
              and entertainment to turn your vision into reality while
              respecting your budget.
            </CardText>
            <Button>Contact me</Button>
          </CardBody>
        </Card>
        {/* ================================================================================================================ */}
        <Card>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1560252825-92b877585070?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Anna Earle</CardTitle>
            <CardSubtitle>Host</CardSubtitle>
            <CardText>
              Give her the mic and she will inspire any audience! Experience
              includes brand representative, media spokesperson, internal
              communications, charity event host, keynote speaker, conference
              speaker, event emcee, sports announcer, live entertainment host,
              youth motivator, women's empowerment and more. Dramatic and bold
              personality, tasteful sass, and hilarious commentary leaves all
              your guests at the edge of their seats salivating for more!
            </CardText>
            <Button>Contact me</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-6">Explore other vendors in your area</h1>
          </Container>
        </Jumbotron>
      </div>
      <div>
        <CardDeck>
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Extraordinary Life Events LLC</CardTitle>
              <CardText>Dallas, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1576049044685-5afd737219f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Loud and Clear Music Experience</CardTitle>
              <CardText>Addison, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1556906360-21ecb6d73117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Twig and Vine Decor</CardTitle>
              <CardText>Irving, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
        </CardDeck>
      </div>
      <div>
        <CardDeck>
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1498830923224-e1c12d1564a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>ABN Photography</CardTitle>
              <CardText>Addison, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Soozie's Kitchen</CardTitle>
              <CardText>Addison, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Leah Goetzel Host Services</CardTitle>
              <CardText>Dallas, TX</CardText>
            </CardImgOverlay>
          </Card>
        </CardDeck>

        {/* ================================================================================================================ */}
        <CardDeck>
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Be Entertained Events</CardTitle>
              <CardText>Dallas, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/photo-1559076312-8c598e17844b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>The Florist on the Corner</CardTitle>
              <CardText>Lewisville, TX</CardText>
            </CardImgOverlay>
          </Card>
          {/* ================================================================================================================ */}
          <Card inverse>
            <CardImg
              width="100%"
              src="https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardTitle>Annie Elizabeth Photography</CardTitle>
              <CardText>Fort Worth, TX</CardText>
            </CardImgOverlay>
          </Card>
        </CardDeck>
        {/* ================================================================================================================ */}
      </div>
    </div>
  );
};

export default Team;
