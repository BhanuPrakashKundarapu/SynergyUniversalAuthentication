import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SmsIcon from "@mui/icons-material/Sms";

import iconfb from '../../Sources/Facebook.png'
import icongg from '../../Sources/Google.png'
import iconli from '../../Sources/linkedin.png'
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing(props) {
	console.log(props.value)
	return (
    <div className="w-100 px-1">

		<Box  sx={{ width: "100%" }} >
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid xs={4}>
					<Item onClick={props.value[1]}>
						<FacebookIcon  className="icons"/>
					</Item>
				</Grid>
				<Grid xs={4}>
					<Item>
						<GoogleIcon className="icons" />
					</Item>
				</Grid>
				<Grid xs={4} >
					<Item onClick={props.value[0]}>
						<LinkedInIcon className="icons"/>
					</Item>
				</Grid>
			</Grid>
		</Box>
    </div>

	);
}
