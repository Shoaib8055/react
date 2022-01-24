import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Container } from "reactstrap";

const ViewCategory = ({ category }) => {
  const navigate = useNavigate();
  const redirectLink = (category) => {
    navigate(`/view-by-category/${category}`);
  };
  return (
    <div
      className="mb-2"
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Card
        style={{
          width: 250,
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          border: "1px solid black",
        }}
      >
        <CardBody className="text-center">
          <CardSubtitle className="fw-bold fs-4">{category}</CardSubtitle>
          <Container>
            <Button
              color="success"
              outline
              className="mt-2"
              onClick={(e) => redirectLink(category)}
            >
              Explore
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewCategory;
