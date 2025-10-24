import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hooks/useTitle';
import { toast } from 'react-toastify';

const Register = () => {
    useTitle('Register');
    const { createUser,setUser,updateUser, googleSignIn } = use(AuthContext);
    
    const [nameError, setNameError] = useState('');
      const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();
    const handleRegister = (e) => {
        
        e.preventDefault();
        //console.log(e.target);
        const form = e.target;
        const name = form.name.value;
       
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        
        // Name validation
        if (name.length < 5) {
            toast.error('Name must be at least 5 characters long');
            return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Password validation
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
             toast.error('Password must contain at least one uppercase letter');
            return;
        }

        // Show loading
        const loadingToast = toast.loading('Creating account... Please wait');


        //console.log({ name, email, photo, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({
                    displayName: name,
                    photoURL: photo
                }).then(()=>{
                    setUser({...user,displayName:name,photoURL:photo});
                    toast.dismiss(loadingToast);
                    toast.success(' Account created successfully!');
                    navigate('/');
                })
                .catch((error)=>{
                    toast.dismiss(loadingToast);
                    toast.error('Error: ' + error.message);
                })
               // console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorMessage);

            });



    }
     const handleGoogleSignIn = () => {
        const loadingToast = toast.loading('Signing in with Google...');
        googleSignIn()
            .then(result => {
                const user = result.user;
                toast.dismiss(loadingToast);
                toast.success(' Google sign in successful!');
                navigate('/');
            })
            .catch(error => {
                toast.dismiss(loadingToast);
                toast.error('Google sign in error: ' + error.message);
            });
    };
      
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h3 className='text-2xl font-bold text-center'>Register Your Account</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input required name='name' type="text" className="input" placeholder="Name" />
                        {nameError && <p className='text-red-400 text-xs'>{nameError}</p>}
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">PhotoURL</label>
                        <input required name='photo' type="text" className="input" placeholder="PhotoURL" />
                        <label className="label">Password</label>
                          <div className="relative">
                            <input 
                                required 
                                name='password' 
                                type={showPassword ? "text" : "password"} 
                                className="input w-full pr-10" 
                                placeholder="Password" 
                            />
                            {/* Eye Icon Button */}
                            <button 
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                                    </svg>
                                ) : (
                                    
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <button onClick={handleGoogleSignIn} className="btn mt-3 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>

                        <p className='text-center pt-5'>Already Have an Account? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;