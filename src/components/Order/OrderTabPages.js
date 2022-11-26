import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import ShippingOrder from "./ShippingOrder";
import Payment from "./Payment";
export const OrderTabPages = () => {
  const [value, setValue] = React.useState("1");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className= "w-[60%]">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Shipping" value="1" />
              <Tab label="Payment" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ShippingOrder />
          </TabPanel>
          <TabPanel value="2">
            <Payment />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
