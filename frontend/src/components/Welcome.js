import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => (
  <Container>
    <h1>Images Gallery</h1>
    <p>
      This is simple application that retrieves photos using Unspash API. In
      order to start enter any search term in the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn more
      </Button>
    </p>
  </Container>
);

export default Welcome;
