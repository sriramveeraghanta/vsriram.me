import React from "react";
// react bootstrap
import { Card, Button } from "react-bootstrap";
// hooks
import { useRequest } from "lib/hooks";

function GithubRepoCard(props) {
  const { data } = useRequest({ url: props.url });

  return (
    <Card>
      <Card.Body>
        <Card.Title>{data && data.name}</Card.Title>
        <Card.Text>{data && data.description}</Card.Text>
        <Button as="a" href={data && data.html_url} target="_blank" variant="primary">
          Visit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GithubRepoCard;
