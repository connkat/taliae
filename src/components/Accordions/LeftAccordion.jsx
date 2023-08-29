import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Accordions.css";

function LeftAccordion() {
  return (
		<div className="Accordion">
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>
						<b>Services Offered</b>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<li>
							playing indoors and in your backyard while you work or take a
							break
						</li>
						<li>making snacks</li>
						<li>helping kids tidy up play space</li>
						<li>crafts</li>
						<li>reading books</li>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography>
						<b>Rates</b>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<li>$7/hour for 1 kid </li>
						<li>$9/hour for 2 kids </li>
						<li>$11/hour for 3 kids</li>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default LeftAccordion;
