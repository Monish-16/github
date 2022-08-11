import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Drawer } from "react-bootstrap-drawer";

export default function CustomNavigation(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Drawer>
      <Drawer.Toggle onClick={toggle} />
      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC>
            <Drawer.Header href="orderlist">Application</Drawer.Header>
            <Drawer.Nav>
              <Drawer.Item href="settings">Settings</Drawer.Item>
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  );
}
