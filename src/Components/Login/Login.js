import React, { useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SocialMedialog from "./SocialMedialog";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
const Login = () => {
	var [mailerror, setMAilError] = useState("");
	const [eyeclose, setEyeclose] = useState(true);
	var [passworderror, setPasswordError] = useState("");
	var [data, setData] = useState({
		email: "",
		password: "",
	});
	var [Mail, setMail] = useState("");
	var [Password, setPassword] = useState("");
	const navigation = useNavigate();

	const onChangeField = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const loginevent = () => {
		const passvery = /^(?=.*[A-Z])(?=.*[0-9])(?=.*@)[a-zA-Z0-9@]{8,}$/;
		if (data.email == "" || data.password == "") {
			if (data.email == "") {
				setMAilError("please enter email");
			} else if (
				!data.email.includes("@")
			) {
				// console.log("email invalid")
				setMAilError("email is invalid");
			}
			if (data.password == "") {
				setPasswordError("please valid password");
			} else if (!passvery.test(data.password)) {
				setPasswordError("password is very week");
			}
		} else {
			navigation("/home");
		}
	};

	const linkedin = () => {
		// console.log("linked in login")
		alert("linked in login");
	};
	const fb = () => {
		// console.log()
		alert("facebook login");
	};
	return (
		<div className='login-section-component d-flex w-100 vh-100'>
			<div className='login-column1 h-100 bg-danger'>
				<div></div>
			</div>
			<div className='login-column2 h-100 mt-3 justify-content-center align-items-center'>
				<div className='login-submain py-3'>
					<div className='login-heading '>
						<h1 className='heading'>Sign In</h1>
					</div>
					<div className='login-subheading mb-2'>
						<h4>Welcome back, Please login to your account</h4>
					</div>
					{/* <div>
						<button
							className='btn btn-dark'
							onClick={() => navigation("/adminregister")}
						>
							Register As Admin
						</button>
					</div> */}
					<div className='inputfields'>
						<form>
							<div className='w-100 h-25 mb-4 '>
								{/* <input type="email" name="" id="" /> */}
								{/* <TextField
								id='standard-basic'
								label='Enter Email Address'
								variant='standard'
								className='w-100'
								type="email"
								name='email'
								onChange={onChangeField}
							/> */}
								<input
									type='email'
									// pattern="[^-,]+" title="'-' is not allowed"
									name='email'
									id='standard-basic'
									label='Enter Email Address'
									placeholder='Enter Email Address'
									className='form-input w-100 h-100 form-control  input-group py-2 '
									onChange={onChangeField}
								/>
								<span className='error-message'>{mailerror}</span>
							</div>
							<div className='w-100 mb-3'>
								{/* <TextField
								id='standard-basic'
								label='Password'
								variant='standard'
								className='w-100'
							/> */}
								<div className='input-password-field'>
									<input
										type={eyeclose ? "password" : "text"}
										name='password'
										placeholder='Password'
										className='form-input w-100 h-100 form-control input-group py-2 '
										onChange={onChangeField}
										id=''
									/>
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
								<span className='error-message'>{passworderror}</span>
							</div>
							<div className='d-flex justify-content-between align-items-center mx-2 mb-3'>
								<FormGroup>
									<FormControlLabel
										control={<Checkbox />}
										label='Remember me'
										className='rounded-5'
									/>
								</FormGroup>

								<p
									style={{ cursor: "pointer" }}
									onClick={() => navigation("/forgotpassword")}
								>
									Forgot Password?
								</p>
							</div>
							<div className='login-actions mb-3 d-flex justify-content-between'>
								<Button
									variant='contained'
									className='action-second bg-danger py-3 rounded-0 form-input'
									onClick={loginevent}
								>
									Login
								</Button>

								<div>
									<SocialMedialog value={[linkedin, fb]} />
								</div>
							</div>
						</form>

						<div className='last-actions d-flex justify-content-between   mb-3'>
							<p className="mb-2 ">
								Don’t have an Account?{" "}
								<a href='/clientreg'>Register as a client</a>{" "}
							</p>
							<p>
								Don’t have an Account?{" "}
								<a href='/lawyerreg'>Register as a lawyer</a>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
