import React, { FC } from 'react';

const ContactForm: FC = () => {
  return (
    <form>
      <div className="mb-3">
        <label>Name</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" name="name" />
      </div>
      <div className="mb-3">
        <label>Message</label>
        <textarea className="form-control" placeholder="Leave a comment here"></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};
export default ContactForm;
