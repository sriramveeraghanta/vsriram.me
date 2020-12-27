import React, { FC } from 'react';
// react bootstrap
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const ContactForm: FC = () => {
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
        <FormControl as="textarea" />
      </FormGroup>
      <FormGroup>
        <Button variant="primary">Submit</Button>
      </FormGroup>
    </form>
  );
};
export default ContactForm;
