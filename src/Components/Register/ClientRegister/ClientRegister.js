import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./ClientRegister.css";
import Stack from "@mui/joy/Stack";
import Input from "@mui/joy/Input";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

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

const ClientRegister = () => {
	const navigation = useNavigate();
	const [userData, setUserData] = useState({
		name: "",
		mobile: "",
		email: "",
		password: "",
		gender: "",
		category: "",
		state: "",
		address: "",
		usagetype: "",
		officiaid: "",
		file: "",
	});
	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [Gender, setGender] = React.useState("");
	const [Category, setCategory] = useState("");
	const [country, setCountry] = useState("");
	const [state, setstate] = useState("");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [usagetype, setUsagetype] = useState("");
	const [officialid, setOfficialid] = useState("");
	const [value, setValue] = React.useState("");
	const [eyeclose, setEyeclose] = useState(true);
	const [file,setFile]=useState("")
	const minLength = 8;
	const handleEvent = (e) => {
		var { value, name } = e.target;
		console.log(e.target.value + "\n" + e.target.name);
		setUserData({ ...userData, [name]: value });

		setValue(userData.password);
	};
	const Connection = async () => {
		console.log(userData);

		// toast.success("user registered")
		await axios
			.post("http://localhost:4000/reg", { userData })
			.then((res) => {
				if (res.data.status === 200) {
				} else {
					toast.warn("user Already exists");
				}
			})
			.catch((err) => {
				toast.error("error");
			});
	};
	const ClientRegisterEvent = () => {
		var passvery = /^(?=.*[A-Z])(?=.*[0-9])(?=.*@)[a-zA-Z0-9@]{8,}$/;
		console.log(userData);
		// if (
		// 	userData.name == "" ||
		// 	userData.mobile == "" ||
		// 	userData.email == "" ||
		// 	userData.password == "" ||
		// 	userData.gender == "" ||
		// 	userData.category == "" ||
		// 	userData.state == "" ||
		// 	userData.address == "" ||
		// 	userData.usagetype == "" ||
		// 	userData.officiaid == ""
		// ) {
		if (userData.name === "") {
			setName("Enter name");
		} else if (/[#$%^&()_+><?.,!`:;/|]/.test(userData.name)) {
			setName("name must not contain special character");
		} else if (/[0-9]/.test(userData.name)) {
			setName("name must not contain Numbers");
		} else {
			setName("");
		}

		if (userData.mobile === "") {
			setMobile("Enter Mobile");
		} else if (userData.mobile.length > 11) {
			setMobile("Mobile number is invalid");
		} else if (/[#$%^&()_+><?.,!`:;/|]/.test(userData.mobile)) {
			setMobile("mobile number must not contain special character");
		} else {
			setMobile("");
		}

		if (userData.email === "") {
			setEmail("Enter Email");
		} else if (userData.email.indexOf("@") == -1) {
			setEmail("Email is invalid");
		} else if (/[#$%^&()_+><?,!`:;/|]/.test(userData.email)) {
			setEmail("Email must not contain special character");
		} else {
			setEmail("");
		}
		// else if (!/[0-9]/.test(userData.email)) {
		// 	setPassword("Password must contain Number");
		// }
		// else if (userData.email.length <=8) {
		// 	setPassword("Password must contain 8 character");
		// }
		// else if (!/@/.test(userData.email)) {
		// 	setPassword("Password must contain character");
		// }
		// else if (!/[A-Z]/.test(userData.email)) {
		// 	setPassword("Password must contain Capital Letter");
		// }
		// else if (!/[a-z]/.test(userData.email)) {
		// 	setPassword("Password must contain Small Letter");
		// }

		if (userData.password === "") {
			setPassword("Enter Password");
		} else if (!/@/.test(userData.password)) {
			setPassword("Password must contain character");
		} else if (!/[A-Z]/.test(userData.password)) {
			setPassword("Password must contain Capital Letter");
		} else if (!/[0-9]/.test(userData.password)) {
			setPassword("Password must contain Number");
		} else if (!/[a-z]/.test(userData.password)) {
			setPassword("Password must contain Small Letter");
		} else if (userData.password.length <= 8) {
			setPassword("Password must contain 8 character");
		} else if (/[#$%^&()_+><?.,!`:;/|]/.test(userData.password)) {
			setPassword("Password must not contain special character");
		} else {
			setPassword("");
		}

		if (userData.gender === "") {
			setGender("Select Gender");
		}else{
			setGender("")
		}
		if (userData.category === "") {
			setCategory("Select Category");
		}else{
			setCategory("")
		}
		
		if (userData.state === "") {
			setstate("Select State");
		}else{
			setstate("")
		}

		if (userData.address === "") {
			setAddress("Enter Address");
		}else{
			setAddress("")
		}
		if (userData.usagetype === "") {
			setUsagetype("Select Usage Type");
		}else{
			setUsagetype("")
		}
		if (userData.officiaid === "") {
			setOfficialid("Enter Official Id");
		} else {
			setOfficialid("");
		}
		if(userData.file===""){
			setFile("Select File");
		}else{
			setFile("");
		}
		// } else if (userData.password.length < minLength) {
		// 	alert("Password should be atleast 12 characters");
		// }
	};

	return (
		<div className='login-section-component d-flex w-100 vh-100'>
			<ToastContainer />

			<div className='login-column1 h-100 bg-danger'>
				<div></div>
			</div>

			<div className='login-column2 h-100 '>
				<div className='login-submain '>
					<div className='login-heading mb-1'>
						<h1 className='heading'>Sign Up</h1>
					</div>
					<div className='login-subheading mb-1'>
						<h4>Welcome, Please Register to your account</h4>
					</div>
					<div className='inputfields'>
						<div className='w-100 mb-3'>
							{/* <input type="email" name="" id="" /> */}
							{/* <TextField
								id='standard-basic'
								label='Enter Your Name'
								variant='standard'
								className='w-100'
								name='name'
								onChange={handleEvent}
							/> */}
							<input
								type='email'
								name='name'
								id='standard-basic'
								label='Enter Your Name'
								placeholder='Enter Your Name'
								className='form-input w-100 h-100 form-control  input-group py-2 '
								onChange={handleEvent}
							/>

							<span className='error-message'>{name}</span>
						</div>
						<div className='w-100 mb-3'>
							{/* <input type="email" name="" id="" /> */}
							{/* <TextField
								id='standard-basic'
								label='Enter Your Mobile'
								variant='standard'
								className='w-100'
								name='mobile'
								onChange={handleEvent}
							/> */}
							<input
								type='email'
								name='mobile'
								id='standard-basic'
								label='Enter Your Mobile'
								placeholder='Enter Your Mobile'
								className='form-input w-100 h-100 form-control  input-group py-2 '
								onChange={handleEvent}
							/>

							<span className='error-message'>{mobile}</span>
						</div>
						<div className='w-100 mb-3'>
							{/* <input type="email" name="" id="" /> */}
							{/* <TextField
								id='standard-basic'
								label='Enter Email Address'
								variant='standard'
								className='w-100'
								name='email'
								onChange={handleEvent}
							/> */}
							<input
								type='email'
								name='email'
								id='standard-basic'
								label='Enter Email Address'
								placeholder='Enter Email Address'
								className='form-input w-100 h-100 form-control  input-group py-2 '
								onChange={handleEvent}
							/>
							<span className='error-message'>{email}</span>
						</div>
						{/* <TextField
								type='password'
								label='Password'
								variant='standard'
								id='standard-basic'
								className='w-100'
								// startDecorator={<Key />}
								name='password'
								value={value}
								onChange={handleEvent}
							/> */}
						<div className='w-100 mb-3'>
							<div className='input-password-field w-100'>
								<div className='w-100'>
									<input
										type={eyeclose ? "password" : "text"}
										name='password'
										id='standard-basic'
										label='Password'
										placeholder='Password'
										className='form-input w-100 h-100 form-control  input-group py-2 '
										onChange={handleEvent}
									/>
									<Stack
										spacing={0.5}
										sx={{
											"--hue": Math.min(value.length * 10, 120),
										}}
										className="password-bar"
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
										{/* <Typography
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
										</Typography> */}
									</Stack>
								</div>
								<div className='h-50 '>
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
							<span className='error-message'>{password}</span>
						</div>

						{/*  */}
						{/*  */}
						<div className='mb-3'>
							<Box sx={{ width: "100%" }}>
								<Grid
									className='border-0'
									container
									rowSpacing={1}
									columnSpacing={{ xs: 1, sm: 2, md: 3 }}
								>
									<Grid item xs={6}>
										<Item className='Item w-100 border-0'>
											{/* <FormControl
												className='w-100 '
												variant='standard'
												sx={{ m: 1, minWidth: 120 }}
											>
												<InputLabel
													id='demo-simple-select-standard-label'
													
												>
													Gender
												</InputLabel>
												<Select
													labelId='demo-simple-select-standard-label'
													id='demo-simple-select-standard'
													value={userData.gender}
													onChange={handleEvent}
													name='gender'
													label='Gender'
												>
													<MenuItem value=''>
														<em>Select Gender</em>
													</MenuItem>
													<MenuItem value={"male"}>Male</MenuItem>
													<MenuItem value={"female"}>Female</MenuItem>
													<MenuItem value={"other"}>Others</MenuItem>
												</Select>
											</FormControl> */}
											<select
												className='form-select form-control form-input w-100 h-100 input-group py-2 '
												aria-label='Default select example'
												onChange={handleEvent}
												variant='standard'
												name='gender'
												id='demo-simple-select-standard-label'
											>
												<option selected>Gender</option>
												<option value={"male"}>Male</option>
												<option value={"female"}>Female</option>
												<option value={"other"}>Transgender</option>
											</select>
											<span className='error-message'>{Gender}</span>
										</Item>
									</Grid>

									<Grid item xs={6}>
										<Item className='w-100'>
											{/* <FormControl
												className='w-100'
												variant='standard'
												sx={{ m: 1, minWidth: 120 }}
											>
												<InputLabel id='demo-simple-select-standard-label'>
													Select Category
												</InputLabel>
												<Select
													labelId='demo-simple-select-standard-label'
													id='demo-simple-select-standard'
													value={userData.category}
													onChange={handleEvent}
													label='Select Category'
												>
													<MenuItem value=''>
														<em>Select Category</em>
													</MenuItem>
													<MenuItem value={"vip client"} name='category'>
														VIP Client
													</MenuItem>
													<MenuItem value={"company client"} name='category'>
														Company Client
													</MenuItem>
													<MenuItem value={"habitual client"} name='category'>
														Habitual Client
													</MenuItem>
													<MenuItem value={"test"} name='category'>
														Test
													</MenuItem>
												</Select>
											</FormControl> */}
											<select
												className='form-select form-control form-input w-100 h-100 input-group py-2 '
												aria-label='Default select example'
												onChange={handleEvent}
												variant='standard'
												name='category'
												id='demo-simple-select-standard-label'
											>
												<option selected>
													<em>Select Category</em>
												</option>
												<option value={"vip client"}>VIP Client</option>
												<option value={"company client"}>Company Client</option>
												<option value={"habitual client"}>
													Habitual Client
												</option>
												<option value={"test"}>Test</option>
											</select>

											<span className='error-message'>{Category}</span>
										</Item>
									</Grid>

									<Grid item xs={6}>
										<Item className='w-100'>
											{/* <FormControl
												className='w-100'
												variant='standard'
												sx={{ m: 1, minWidth: 120 }}
											>
												<InputLabel id='demo-simple-select-standard-label'>
													State
												</InputLabel>
												<Select
													labelId='demo-simple-select-standard-label'
													id='demo-simple-select-standard'
													value={userData.state}
													onChange={handleEvent}
													label='Select Category'
												>
													<MenuItem value=''>
														<em>Select State</em>
													</MenuItem>
													<MenuItem value={"Andhrapradesh"}>
														Andhrapradesh
													</MenuItem>
													<MenuItem value={"Arunchalpradash"}>
														Arunchalpradash
													</MenuItem>
													<MenuItem value={"Assam"}>Assam</MenuItem>
													<MenuItem value={"delhi"}>delhi</MenuItem>
												</Select>
											</FormControl> */}
											<select
												className='form-select form-control form-input w-100 h-100 input-group py-2'
												aria-label='Default select example'
												onChange={handleEvent}
												variant='standard'
												name='state'
												id='demo-simple-select-standard-label'
											>
												<option selected>
													<em>State</em>
												</option>
												<option value={"Andhrapradesh"}>Andhrapradesh</option>
												<option value={"Arunchalpradash"}>
													Arunchalpradash
												</option>
												<option value={"Assam"}>Assam</option>
												<option value={"delhi"}>Delhi</option>
											</select>
											<span className='error-message'>{state}</span>
										</Item>
									</Grid>
									<Grid
										item
										xs={6}
										className='d-flex justify-content-center align-items-center m-auto'
									>
										<FormControl className=' w-100 '>
											<RadioGroup
												className='w-100 justify-content-around'
												row
												aria-labelledby='demo-row-radio-buttons-group-label'
												name='row-radio-buttons-group'
											>
												<FormControlLabel
													value='personal'
													control={<Radio />}
													label='Personal'
													name='usagetype'
													onChange={handleEvent}
												/>
												<FormControlLabel
													value='company'
													control={<Radio />}
													label='Company'
													name='usagetype'
													onChange={handleEvent}
												/>
											</RadioGroup>
											<span className='error-message text-center'>
												{usagetype}
											</span>
										</FormControl>
									</Grid>
								</Grid>
							</Box>
						</div>
						{/*  */}
						{/*  */}

						<div className=' mb-3 w-100'>
							<div className='form-floating mb-3 '>
								<textarea
									className='form-control shadow-none'
									placeholder='Address'
									id='floatingTextarea2'
									style={{ height: 100 }}
									onChange={handleEvent}
									name='address'
								/>
								<span className='error-message'>{address}</span>
							</div>
						</div>
						
						<div className='w-100 mb-3'>
							<Box sx={{ flexGrow: 1 }}>
								<Grid
									container
									spacing={{ xs: 2, md: 3 }}
									columns={{ xs: 4, sm: 8, md: 12 }}
								>
									<Grid item xs={6} sm={4} md={4}>
										<Item className="h-100 ">
											{/* <TextField
												id='standard-basic'
												label='Enter Title'
												variant='standard'
												className='w-100'
												name='title'
												onChange={handleEvent}
											/> */}
											<input
												type='text'
												name='officiaid'
												placeholder='Official Id'
												className='form-input w-100 h-100 form-control input-group m-0'
												onChange={handleEvent}
												id=''
											/>
											<span className='error-message'>{officialid}</span>
										</Item>
									</Grid>
									<Grid item xs={6} sm={4} md={4} >
										<Item className=" h-100 d-flex flex-column">
											<Button
												component='label'
												role={undefined}
												variant='contained'
												className='w-100 h-100 m-0  action-second form-input '
												
												tabIndex={-1}
												startIcon={<CloudUploadIcon />}
											>
												Upload file
												<VisuallyHiddenInput name="file" type='file' onChange={handleEvent} className="form-input"/>
											</Button>
												<span>{userData.file}</span>
												<span className='error-message'>{file}</span>
										</Item>
									</Grid>
								</Grid>	
							</Box>
						</div>
						{/*  */}
						{/*  */}
						<div className='login-actions mb-3 d-flex justify-content-between'>
							<Button
								variant='contained'
								className='bg-danger action-second py-3 rounded-0 form-input'
								onClick={() => ClientRegisterEvent()}
							>
								Sign Up
							</Button>
							<div className='w-25'></div>
						</div>
						<div className=' d-flex justify-content-between mb-3'>
							<p>
								Have an Account? <a href='/'>Login</a>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClientRegister;

						{/* <div className='w-100 mb-3'>
							{/* <TextField
								id='standard-basic'
								label='Official Id'
								variant='standard'
								className='w-100'
								name='officialid'
								onChange={handleEvent}
							/> */}
						// </div>

						{/*  */}
						{/*  */}
						// <div className='mb-3'></div> */}