import React from "react";
import { Collapse } from "react-bootstrap";
import { Drawer, DrawerOverflow, DrawerToC } from "react-bootstrap-drawer";

import CustomNavigation from "./CustomNavigation";

export default function AppDrawer(props) {
  // const [open, setOpen] = useState(true);

  // const handleToggle = () => setOpen(!open);

  return (
    <Drawer className={props.className}>
      <Collapse in={true}>
        <DrawerOverflow>
          <DrawerToC>
            {/* Your Navigation Goes Here */}
            <CustomNavigation />
          </DrawerToC>
        </DrawerOverflow>
      </Collapse>
    </Drawer>
  );
}