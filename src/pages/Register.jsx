import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold text-2xl text-center pt-10'>Register Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">

                        <label className="label font-semibold">Name</label>
                        <input type="text" className="input mb-2" placeholder="Name" />

                        <label className="label font-semibold">Your Photo</label>
                        <input type="text" className="input mb-2" placeholder="Your Image URL" />

                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input mb-2" placeholder="Email" />

                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input mb-2" placeholder="Password" />

                        <div><a className="link link-hover">Terms and Condition</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className='text-center font-semibold pt-3'>
                            Already have an account? <Link className='text-secondary' to='/auth/login'>Login</Link>
                        </p>

                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;