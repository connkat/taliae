import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function RightAccordion() {
  return (
    <div className="Accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>Availability</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Weekends: Saturday afternoon, Sunday all day </li>
            <li>Weekdays: Monday and Friday after school </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>Because of my age, I don't</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>cook with a stove </li>
            <li>take kids to the park without an adult</li>
            <li>stay home without an adult </li>
            <li>give kids baths </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default RightAccordion;
