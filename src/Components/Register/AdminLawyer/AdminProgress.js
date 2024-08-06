import React from 'react'
import './AdminRegister.css'
const AdminProgress = () => {
  return (
    <div className='login-section-component d-flex w-100 vh-100'>
    <div className='login-column1 h-100 bg-danger'>
        <div></div>
    </div>
    <div className='login-column2 h-100 justify-content-center align-items-center'>
        <div className='login-submain py-3'>
        {/*  */}
        {/*  */}
            <div className="progress-section ">
           
           <div className='progress '>
           <p className='detailsent'></p>
           <div className='bar'>
            <div className='progress-bar'></div>
           </div>
           <p className='AdminAccept'></p>
           </div>

           </div>
            </div>
            {/*  */}
            {/*  */}
        </div>
    </div>
  )
}

export default AdminProgress
