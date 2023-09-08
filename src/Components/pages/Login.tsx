import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface FormData {
  mobile: string;
  otp: string;
}

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Specify the type for your form data

  const onSubmit = (data: FormData) => {
    try {
      const mobile = data.mobile;
      const otp = data.otp;
      const requestData = {
        mobile,
        otp,
      };
      navigate('/user-details');
      console.log(requestData, 'requestData');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <section>
       <div
      style={{
        backgroundImage: "url(/assets/images/bg.jpg)" ,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // Other CSS properties for positioning and sizing
      }}
    >
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <form
                className="theme-form login-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="text-center">
                  <img src="/assets/images/logo/Prime_shelf_logo.png" alt="Logo" />
                </div>
                <h4>&nbsp;</h4>
                <div className="form-group text-start">
                  <label>Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      // name="mobile"
                      {...register('mobile', { required: true })} 
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-danger text-start">
                      Mobile Number is required
                    </p>
                  )}
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-success btn-xs">Send OTP</button>
                </div>
                <div className="form-group text-start">
                  <label>Verify OTP</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      // name="otp"
                      {...register('otp', { required: true })}
                    />
                  </div>
                  {errors.otp && (
                    <p className="text-danger text-start">Otp is required</p>
                  )}
                </div>
                <div className="form-group d-flex justify-content-center">
                  <button className="btn custom_btn btn-block" type="submit">
                    Sign in
                  </button>
                </div>
                <div className="my_txt">
                  <a href="#" className="">
                    Sign up / Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Login;
