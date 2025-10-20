import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({name, image, email, password});

        createUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-bold text-2xl text-center pt-10'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        <label className="label font-semibold">Name</label>
                        <input 
                        name='name' 
                        type="text" 
                        className="input mb-2" 
                        placeholder="Name" 
                        required/>

                        <label className="label font-semibold">Your Photo</label>
                        <input 
                        name='image' 
                        type="text" 
                        className="input mb-2" 
                        placeholder="Your Image URL" />

                        <label className="label font-semibold">Email</label>
                        <input 
                        name='email' 
                        type="email" 
                        className="input mb-2" 
                        placeholder="Email" 
                        required/>

                        <label className="label font-semibold">Password</label>
                        <input 
                        name='password' 
                        type="password" 
                        className="input mb-2" 
                        placeholder="Password" 
                        required/>

                        <div><a className="link link-hover">Terms and Condition</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Register</button>

                        <p className='text-center font-semibold pt-3'>
                            Already have an account? <Link className='text-secondary' to='/auth/login'>Login</Link>
                        </p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;