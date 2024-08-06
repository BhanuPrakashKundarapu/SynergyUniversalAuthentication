import React, { useRef, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import "./AdminRegister";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SocialMedialog from "../../Login/SocialMedialog";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const AdminRegister = () => {
	const [value, setValue] = React.useState("");
		const minLength = 12;
		const navigation = useNavigate();
		const linkedin = () => {
			// console.log("linked in login")
			alert("linked in register");
		};
		const fb = () => {
			// console.log()
			alert("facebook Register");
		};
	var [data, setData] = useState({
		name: "",
		email: "",
		mobile: "",
		password: "",
		referalcode: "",
		dateofbirth: "",
		address: "",
		title: "",
	});
	var [nameError, setNameError] = useState();
	var [emailError, setEmailError] = useState();
	var [mobileError, setMobileError] = useState();
	var [passwordError, setPasswordError] = useState();
	var [referalcodeError, setReferalcodeError] = useState();
	var [dateofbirthError, setDateofbirthError] = useState();
	var [addressError, setAddressError] = useState();
	var [titleError, setTitleError] = useState();

	const onFieldChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		setValue(data.password)
	};

	const AdminRegisterEvent = () => {
		
		if (
			data.name == "" ||
			data.email == "" ||
			data.mobile == "" ||
			data.password == "" ||
			data.dateofbirth == "" ||
			data.address == "" ||
			data.referalcode == "" ||
			data.title == ""
		) {
			if (data.name == "") {
				setNameError("Name is required");
			}
			if (data.email == "") {
				setEmailError("Email is required");
			}else if(data.email.indexOf("@")==-1){
				setEmailError("Email is invalid")
			}
			if (data.mobile == "") {
				setMobileError("Mobile is required");
			}
			if (data.password == "") {
				setPasswordError("Password is required");
			}
			if (data.dateofbirth == "") {
				setDateofbirthError("Date of birth is required");
			}
			if (data.address == "") {
				setAddressError("Address is required");
			}
			if (data.referalcode == "") {
				setReferalcodeError("Referal code is required");
			}
			if (data.title == "") {
				setTitleError("Title is required");
			}
			const findatrate="@"
				
		}
	};

	return (
		<div className='login-section-component d-flex w-100 vh-100'>
			<div className='login-column1 h-100 bg-danger'>
				<div></div>
			</div>
			<div className='login-column2 h-100 justify-content-center align-items-start'>
				<div className='login-submain py-3'>
					<div className='login-heading mb-3'>
						<h1 className='heading'>Sign In</h1>
					</div>
					<div className='login-subheading mb-3'>
						<h4>Welcome to register as a admin</h4>
					</div>
					<div className='inputfields'>
						<Box sx={{ flexGrow: 1 }} className='w-100'>
							<Grid
								className='w-100 '
								container
								spacing={{ xs: 2, md: 3 }}
								columns={{ xs: 4, sm: 8, md: 12 }}
							>
								<Grid item xs={12} sm={6} md={4} className=' w-100 d-flex mb-3'>
									<Item className='w-100 '>
										<div className='w-100'>
											{/* <input type="email" name="" id="" /> */}
											<TextField
												id='standard-basic'
												label='Enter Your Name'
												variant='standard'
												className='w-100'
												name='name'
												onChange={onFieldChange}
											/>
											{/* <span className='error-message'>{nameError}</span> */}
										</div>
									</Item>
								</Grid>

								<Grid item xs={12} sm={6} md={4} className=' w-100 d-flex mb-3'>
									<Item className='w-100 '>
										<div className='w-100 '>
											{/* <input type="email" name="" id="" /> */}
											<TextField
												id='standard-basic'
												label='Enter Your Email'
												variant='standard'
												className='w-100'
												name='email'
												onChange={onFieldChange}
											/>
											{/* <span className='error-message'>{emailError}</span> */}
										</div>
									</Item>
								</Grid>
								<Grid item xs={2} sm={4} md={4} className=' w-100 d-flex mb-3'>
									<Item className='w-100 '>
										<div className='w-100 '>
											{/* <input type="email" name="" id="" /> */}
											<TextField
												id='standard-basic'
												label='Mobile'
												variant='standard'
												className='w-100'
												name='mobile'
												onChange={onFieldChange}
											/>
											{/* <span className='error-message'>{mobileError}</span> */}
										</div>
									</Item>
								</Grid>
								<Grid item xs={2} sm={4} md={4} className=' w-100 d-flex mb-3'>
									<Item className='w-100 '>
										<TextField
											id='standard-basic'
											type='password'
											variant='standard'
											placeholder='Password'
											name='password'
											className="w-100"
											// startDecorator={<Key />}
											value={value}
											onChange={onFieldChange}
										/>
										<Stack
											spacing={0.5}
											sx={{
												"--hue": Math.min(value.length * 10, 120),
											}}
										>

											<LinearProgress
												determinate
												size='sm'
												value={Math.min((value.length * 100) / minLength, 100)}
												sx={{
													bgcolor: "background.level3",
													color: "hsl(var(--hue) 80% 40%)",
												}}
											/>
											<Typography
												level='body-xs'
												sx={{
													alignSelf: "flex-end",
													color: "hsl(var(--hue) 80% 30%)",
												}}
											>
												{value.length < 3 && "Very weak"}
												{value.length >= 3 && value.length < 6 && "Weak"}
												{value.length >= 6 && value.length < 10 && "Strong"}
												{value.length >= 10 && "Very strong"}
											</Typography>
										</Stack>
										{/* <span className='error-message'>{passwordError}</span> */}

									</Item>
								</Grid>
								<Grid item xs={12} sm={6} md={4} className=' w-100 d-flex mb-3'>
									<Item className='w-100 '>
										<div className='w-100 '>
											{/* <input type="email" name="" id="" /> */}
											<TextField
												id='standard-basic'
												label='Enter your referal as admin'
												variant='standard'
												className='w-100'
												name='referalcode'
												onChange={onFieldChange}
											/>
											{/* <span className='error-message'>{referalcodeError}</span> */}
										</div>
									</Item>
								</Grid>
								<Grid item xs={12} sm={4} md={4} className=' w-100 d-flex mb-3'>
									<Item className='w-100 '>
										<div>
											{/* <input type="date" className="input-group form-control" name="" id="" /> */}
											<input
												type='date'
												class='form-control'
												aria-label='Sizing example input'
												aria-describedby='inputGroup-sizing-sm'
												name='dateofbirth'
												onChange={onFieldChange}
											></input>
											{/* <span className='error-message'>{dateofbirthError}</span> */}
											{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
												<DatePicker
													label='Date of Birth'
													value={dayjs(data.dateofbirth)}
													onChange={onDateChange}
													renderInput={(params) => <TextField {...params} />}
												/>
											</LocalizationProvider> */}
										</div>
									</Item>
								</Grid>
							</Grid>
						</Box>

						<div className='w-100 mb-3'>
							{/* <input type="email" name="" id="" /> */}
							<TextField
								id='standard-basic'
								label='Enter Address'
								name='address'
								onChange={onFieldChange}
								variant='standard'
								className='w-100'
							/>
							{/* <span className='error-message'>{addressError}</span> */}
						</div>
						<div className='w-100 mb-3'>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									spacing={{ xs: 2, md: 3 }}
									columns={{ xs: 4, sm: 8, md: 12 }}
								>
									<Grid item xs={2} sm={4} md={4}>
										<Item>
											<TextField
												id='standard-basic'
												label='Enter Title'
												variant='standard'
												className='w-100'
												name='title'
												onChange={onFieldChange}
											/>
											{/* <span className='error-message'>{titleError}</span> */}
										</Item>
									</Grid>
									<Grid item xs={2} sm={4} md={4}>
										<Item>
											<Button
												component='label'
												role={undefined}
												variant='contained'
												tabIndex={-1}
												startIcon={<CloudUploadIcon />}
											>
												Upload file
												<VisuallyHiddenInput type='file' />
											</Button>
										</Item>
									</Grid>
								</Grid>
							</Box>
						</div>

						<div className='mb-3 d-flex justify-content-between'>
							<Button
								variant='contained'
								onClick={AdminRegisterEvent}
								className='action-second bg-danger py-3 rounded-0'
							>
								Sign Up
							</Button>
							<div>
								<SocialMedialog value={[linkedin, fb]} />
							</div>
						</div>
						<div className=' d-flex justify-content-between mb-3'>
							<p>
								have an Account? <a href='/'>Log in</a>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminRegister;
