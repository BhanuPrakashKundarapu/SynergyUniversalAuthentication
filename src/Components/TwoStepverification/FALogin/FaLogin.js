import React, { useEffect, useState } from "react";
import "./FaLogin.css";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const FaLogin = () => {
	var [bool,setBool]=useState(true);
	var [number, setNumber] = useState("7659041456");
	var [carvated, setCarvated] = useState();
	var [ext, setExt] = useState("+91");
	useEffect(() => {
		setCarvated("0000000000");
	}, []);
	const handlebool=()=>{
		setBool(!bool);
		if(bool){
			setCarvated("0000000000")
		}else{
			setCarvated("abc@gmail.com")
		}
	}
	return (
		<div className='login-section-component d-flex w-100 vh-100'>
			<div className='login-column1 h-100 bg-danger'>
				<div></div>
			</div>
			<div className='login-column2  d-flex justify-content-center align-items-center h-100 '>
				{/*  */}
				<div className='login-submain py-3 '>
					<div className='text-center'>
						<h4>Factor verification</h4>
					</div>

					<div className='d-flex flex-column justify-content-center gap-5 align-items-center w-100 '>
						<div className='w-50  mb-3'>
							<TextField
								id='standard-number'
								label='We have sent an otp to'
								type='number'
								InputLabelProps={{
									shrink: true,
								}}
								placeholder={carvated}
								variant='standard'
								className='w-100 '
							/>
						</div>
						<div className='w-50 mb-3'>
							<TextField
								id='outlined-number'
								label='OTP'
								type='otp'
								className='w-100'
								InputLabelProps={{
									shrink: true,
								}}
								placeholder='000000'
							/>
						</div>
						<div className='d-flex justify-content-between w-50  mb-3'>
							<p>Resend the code</p>
							{
								bool?
							<p onClick={handlebool} style={{cursor:"pointer"}}>send otp to mail</p>:
							<p onClick={handlebool} style={{cursor:"pointer"}}>send otp to mobile</p>
							}
						</div>
						<div className='w-50 gap-1'>
							<Button
								variant='contained'
								className='bg-danger w-25 py-3 rounded-0 m-1 w-50'
							>
								Verify
							</Button>
                           
						</div>
					</div>
				</div>

				{/*  */}
			</div>
		</div>
	);
};

export default FaLogin;
