import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RightAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>weekend: Saturday afternoon, Sunday all day </li>
            <li>weekdays: Monday and Friday after school </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Rates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        <li>$5/hour for 1 kid </li>
        <li>$7/hour for 2 kids </li>
        <li>$9/hour for 3 kids</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default RightAccordion;