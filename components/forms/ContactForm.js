import React from "react";
// react bootstrap
import { FormGroup, FormControl, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <form>
      <FormGroup>
        <label>Name</label>
        <FormControl type="text" />
      </FormGroup>
      <FormGroup>
        <label>Email</label>
        <FormControl type="text" />
      </FormGroup>
      <FormGroup>
        <label>Message</label>
        <FormControl as="textarea" rows="3" />
      </FormGroup>
      <FormGroup>
        <Button variant="primary">Submit</Button>
      </FormGroup>
    </form>
  );
}
export default ContactForm;
