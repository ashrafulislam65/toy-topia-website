import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hooks/useTitle';
import { toast } from 'react-toastify';

const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const { signIn, googleSignIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(location);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log({ email, password });
        setEmail(email);
        const loadingToast = toast.loading('Signing in...');
        signIn(email, password).then(result => {
            const user = result.user;
            toast.dismiss(loadingToast);
            toast.success(' Login successful!');
            navigate(`${location.state ? location.state : '/'}`)

        })
            .catch((error) => {
                toast.dismiss(loadingToast);
                const errorCode = error.code;
                const errorMessage = error.message;
                //  alert(errorCode,errorMessage);
                toast.error(errorMessage);
                setError(errorCode);
            });
    };
       const handleGoogleSignIn = () => {
        const loadingToast = toast.loading('Signing in with Google...');
        googleSignIn()
            .then(result => {
                const user = result.user;
                toast.dismiss(loadingToast);
                toast.success('Google login successful!');
                navigate(location.state ? location.state : '/');
            })
            .catch(error => {
                //console.error('Google sign in error:', error);
                toast.dismiss(loadingToast);
                toast.error(' Google sign in failed: ' + error.message);
                setError(error.message);
            });
    };
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='text-2xl font-bold text-center'>Login Your Account</h3>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input required name='email' type="email" onChange={(e) => setEmail(e.target.value)}className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />
                        <div> <Link to="/auth/forgot-password" state={{ email: email }} className="link link-hover">
                            Forgot password?
                        </Link></div>
                        {error && <p className='text-red-400 text-xs'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <button onClick={handleGoogleSignIn} className="btn mt-3 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className='text-center pt-5'>Don't Have an Account? <Link className='text-secondary' to="/auth/register">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;