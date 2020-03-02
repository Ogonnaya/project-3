import React, { useState } from "react";
import { Button, Modal, ModalHeader } from "reactstrap";
import Tabs from "./Tabs";

const ModalExample = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="link" onClick={toggle}>
        Already have an account? Sign In
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Sign In</ModalHeader>
        <Tabs />
      </Modal>
    </div>
  );
};

export default ModalExample;
