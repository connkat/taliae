import * as React from "react";

import { accordionOptions } from "../../data";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./CustomAccordions.css";

function CustomAccordion() {
	return (
		<div className="Accordion">
			{accordionOptions.map((data, key) => {
				return (
					<Accordion key={key}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>
								<b>{data.title}</b>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								{data.points.map((item, key) => {
									return <li key={item}>{item}</li>;
								})}
							</Typography>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
}

export default CustomAccordion;
