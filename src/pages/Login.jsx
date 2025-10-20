import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const {signIn} = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((result) => {
        const user = result.user;
        console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage, errorCode);
        });
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold text-2xl text-center pt-10'>Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center font-semibold pt-3'>
                            Don't have an account? <Link className='text-secondary' to='/auth/register'>Register</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;