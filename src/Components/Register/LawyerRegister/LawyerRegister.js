import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import "./LawyerRegister.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import RowAndColumnSpacing from "../../Login/SocialMedialog";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
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

const LawyerRegister = () => {
	const [value, setValue] = useState("");
	const minLength = 8;
	const navigation = useNavigate();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		mobile: "",
		password: "",
		dateofbirth: null,
		address: "",
		title: "",
		file: "",
	});
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [mobileError, setMobileError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [dateofbirth, setDateofbirth] = useState("");
	const [addressError, setAddressError] = useState("");
	const [titleError, setTitleError] = useState("");
	const [fileError, setFileError] = useState("");
	const [eyeclose, setEyeclose] = useState(false);

	const handleEvent = (e) => {
		const { name, value } = e.target;
		console.log(name + "\n" + value);
		setUserData({ ...userData, [name]: value });
		if (name === "password") {
			setValue(value);
		}
	};

	const handleDateChange = (date) => {
		setUserData({ ...userData, dateofbirth: date });
	};
	const LawyerRegisterEvent = () => {
		const { name, email, mobile, password, dateofbirth, address, title, file } =
			userData;
		if (name === "") {
			setNameError("Name is required");
		} else if (/[#$%^&()_+><?.,!`:;/|]/.test(name)) {
			setNameError("name must not contain special character");
		} else if (/[0-9]/.test(name)) {
			setNameError("name must not contain Numbers");
		} else {
			setNameError("");
		}

		if (email === "") {
			setEmailError("Email is required");
		} else if (email.indexOf("@") == -1) {
			setEmailError("Email is invalid");
		} else if (/[#$%^&()_+><?,!`:;/|]/.test(email)) {
			setEmailError("Email must not contain special character");
		} else {
			setEmailError("");
		}

		if (mobile === "") {
			setMobileError("Mobile is required");
		} else if (mobile.length > 11) {
			setMobileError("Mobile number is invalid");
		} else if (/[#$%^&()_+><?,!`:;/|]/.test(mobile)) {
			setMobileError("mobile number must not contain special character");
		} else {
			setMobileError("");
		}

		if (password === "") {
			setPasswordError("Password is required");
		} else if (!/@/.test(password)) {
			setPasswordError("Password must contain character");
		} else if (!/[A-Z]/.test(password)) {
			setPasswordError("Password must contain Capital Letter");
		} else if (!/[0-9]/.test(password)) {
			setPasswordError("Password must contain Number");
		} else if (!/[a-z]/.test(password)) {
			setPasswordError("Password must contain Small Letter");
		} else if (password.length <= 8) {
			setPasswordError("Password must contain 8 character");
		} else if (/[#$%^&()_+><?.,!`:;/|]/.test(password)) {
			setPasswordError("Password must not contain special character");
		} else {
			setPasswordError("");
		}

		if (dateofbirth === "") {
			setDateofbirth("Date of birth is required");
		}
		if (address === "") {
			setAddressError("Address is required");
		}
		if (title === "") {
			setTitleError("Title is required");
		}
		if (file === "") {
			setFileError("File is required");
		} else {
			setFileError("");
		}
	};
	const linkedin = () => {
		// console.log("linked in login")
		alert("linked in register");
	};
	const fb = () => {
		// console.log()
		alert("facebook register");
	};
	return (
		<div className='login-section-component d-flex w-100 vh-100'>
			<div className='login-column1 h-100 bg-danger'>
				<div></div>
			</div>
			<div className='login-column2 h-100 justify-content-center align-items-start'>
				<div className='login-submain py-3 '>
					<div className='login-heading mb-0'>
						<h1 className='heading'>Sign In</h1>
					</div>
					<div className='login-subheading mb-0'>
						<h4>Welcome to register as a lawyer</h4>
					</div>
					<div className='inputfields'>
						<Box sx={{ flexGrow: 1 }} className='w-100'>
							<Grid
								className='w-100  m-auto p-0'
								container
								spacing={{ xs: 2, md: 4 }}
								columns={{ xs: 4, sm: 8, md: 12 }}
							>
								<Grid item xs={12} sm={12} md={4} className=' w-100 m-0  p-1 mb-1 '
								>
									<Item className='w-100  px-0'>
										<div className='w-100'>
											{/* <TextField
												id='standard-basic'
												label='Enter Your Name'
												variant='standard'
												className='w-100'
												name='name'
												onChange={handleEvent}
											/> */}
											<input
												type='text'
												name='name'
												placeholder='Enter Your Name'
												className='form-input w-100 h-100 form-control input-group '
												onChange={handleEvent}
												id=''
											/>
											<span className='error-message'>{nameError}</span>
										</div>
									</Item>
								</Grid>

								<Grid item xs={12} sm={12} md={4} className=' w-100  p-1 mb-1 '>
									<Item className='w-100  px-0'>
										<div className='w-100 '>
											{/* <TextField
												id='standard-basic'
												label='Enter Your Email'
												variant='standard'
												className='w-100'
												name='email'
												onChange={handleEvent}
											/> */}
											<input
												type='email'
												name='email'
												placeholder='Enter Your Email'
												className='form-input w-100 h-100 form-control input-group '
												onChange={handleEvent}
												id=''
											/>
											<span className='error-message'>{emailError}</span>
										</div>
									</Item>
								</Grid>
								<Grid item xs={6} sm={4} md={4} className=' w-100   p-1 mb-1'>
									<Item className='w-100  px-0'>
										<div className='w-100 '>
											{/* <TextField
												id='standard-basic'
												label='Mobile'
												variant='standard'
												className='w-100'
												name='mobile'
												onChange={handleEvent}
											/> */}
											<input
												type='text'
												name='mobile'
												placeholder='Mobile'
												className='form-input w-100 h-100 form-control input-group'
												onChange={handleEvent}
												id=''
											/>

											<span className='error-message'>{mobileError}</span>
										</div>
									</Item>
								</Grid>

								<Grid item xs={6} sm={4} md={4} className=' w-100 p-1 mb-1 '>
									<Item className='w-100  px-0  '>
										<div className='input-password-field w-100 h-100 p-0'>
											<div className="w-100">
												{/* <div className='d-flex align-items-center'> */}
													<input
														type={eyeclose ? "password" : "text"}
														name='password'
														placeholder='Password'
														className='form-input w-100  h-100 form-control input-group '
														onChange={handleEvent}
														id=''
													/>
													{/* <VscEyeClosed
														className='icons-eye'
														onClick={() => setEyeclose(!eyeclose)}
													/>
												</div> */}
												<span className='error-message'>{passwordError}</span>
												<Stack
													spacing={0.5}
													sx={{
														"--hue": Math.min(value.length * 10, 120),
													}}
													className="password-bar-lawe"
												>
													<LinearProgress
														determinate
														size='sm'
														value={Math.min(
															(value.length * 100) / minLength,
															100,
														)}
														sx={{
															bgcolor: "background.level3",
															color: "hsl(var(--hue) 80% 40%)",
														}}
													/>
													{/* <Typography
														level='body-xs'
														sx={{
															alignSelf: "flex-end",
															color: "hsl(var(--hue) 80% 30%)",
														}}
													>
														{value.length < 3 && "Very weak"}
														{value.length >= 3 && value.length < 6 && "Weak"}
														{value.length >= 6 && value.length < 8 && "Strong"}
														{value.length >= 8 && "Very strong"}
													</Typography> */}
												</Stack>
											</div>
											<div className='mb-auto my-auto '>
												{eyeclose ? (
													<VscEyeClosed
														className='icons-eye'
														onClick={() => setEyeclose(!eyeclose)}
													/>
												) : (
													<VscEye
														className='icons-eye'
														onClick={() => setEyeclose(!eyeclose)}
													/>
												)}
											</div>
										</div>
										<span className='error-message'></span>
									</Item>
								</Grid>

								<Grid item xs={6} sm={12} md={4} className=' w-100 p-1 mb-1 '>
									<Item className='w-100 px-0 m-0 '>
										<div className='w-100 h-100 p-0 '>
											<LocalizationProvider dateAdapter={AdapterDayjs} className="form-input ">
												<DatePicker
													label='Date of Birth'
													className='form-input w-100 h-100  form-control input-group datepicker'
													value={userData.dateofbirth}
													onChange={handleDateChange}
													renderInput={(params) => (
														<TextField {...params} variant='standard' />
													)}
												/>
											</LocalizationProvider>
												<span className='error-message'>{dateofbirth}</span>
										</div>
									</Item>
								</Grid>
							</Grid>
						</Box>

						<div className=' w-100 m-0 p-1 mb-3 '>
							<input
								type='text'
								name='address'
								placeholder='Address'
								className='form-input w-100 h-100 form-control input-group '
								onChange={handleEvent}
								id=''
							/>
							<span className='error-message'>{addressError}</span>
						</div>
						<div className=' w-100  px-0 '>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									className='w-100 m-auto p-0'
									spacing={{ xs: 2, md: 3 }}
									columns={{ xs: 4, sm: 8, md: 12 }}
								>
									<Grid item xs={6} sm={4} md={4} className=' w-100  p-1 mb-3'>
										<Item className='w-100 px-0  '>
											<input
												type='text'
												name='title'
												placeholder='Enter Title'
												className='form-input w-100 h-100 form-control input-group '
												onChange={handleEvent}
												id=''
											/>
											<span className='error-message'>{titleError}</span>
										</Item>
									</Grid>

									<Grid item xs={6} sm={4} md={4} className=' w-100  p-1 mb-3'>
										<Item className='w-100 h-100 d-flex flex-column   px-0 '>
											<Button
												component='label'
												role={undefined}
												variant='contained'
												className='w-100 h-100  action-second  form-input'
												tabIndex={-1}
												startIcon={<CloudUploadIcon />}
											>
												Upload file
												<VisuallyHiddenInput
													name='file'
													type='file'
													onChange={handleEvent}
												/>
											</Button>
											<span className='error-message'>{fileError}</span>
											<span className="w-100">{userData.file}</span>
										</Item>
									</Grid>
								</Grid>
							</Box>
						</div>

						{/* <div className='mb-3'>
							<Button
								component='label'
								role={undefined}
								variant='contained'
								className='action-second'
								tabIndex={-1}
								startIcon={<CloudUploadIcon />}
							>
								Upload files
								<VisuallyHiddenInput type='file' />
							</Button>
						</div> */}
						<div className='mb-3 login-actions d-flex justify-content-between'>
							<Button
								variant='contained'
								className='action-second bg-danger py-3 form-input'
								onClick={() => LawyerRegisterEvent()}
							>
								Sign Up
							</Button>
							<div>
								<RowAndColumnSpacing value={[linkedin, fb]} />
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

export default LawyerRegister;
