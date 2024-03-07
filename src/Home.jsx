import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Austins Dive Cafe
            </h3>
            <p>
              There are {snacks.length} snacks and {drinks.length} drinks.
            </p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;