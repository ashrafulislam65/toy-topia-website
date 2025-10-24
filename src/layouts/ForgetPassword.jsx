import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import useTitle from '../hooks/useTitle';
import Loading from '../components/Loading';

const ForgotPassword = () => {
    useTitle('Forgot Password');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    
   useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleReset = (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        const auth = getAuth();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('✅ Password reset email sent! Check your inbox.');
                setLoading(false);
                
                // Automatically redirect to Gmail after 2 seconds
                setTimeout(() => {
                    window.open('https://mail.google.com', '_blank');
                    navigate('/auth/login');
                }, 2000);
            })
            .catch((error) => {
                setLoading(false);
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === 'auth/user-not-found') {
                    setError(' No user found with this email address.');
                } else if (errorCode === 'auth/invalid-email') {
                    setError(' Invalid email address.');
                } else if (errorCode === 'auth/missing-email') {
                    setError(' Please enter your email address.');
                } else {
                    setError(` Error: ${errorMessage}`);
                }
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center bg-base-200'>
            <div className="card bg-base-100 w-full max-w-md shadow-2xl">
                <div className="card-body">
                    <h3 className='text-2xl font-bold text-center mb-2'>Reset Your Password</h3>
                    <p className="text-center text-gray-500 mb-6">
                        Enter your email address to receive password reset instructions
                    </p>

                    <form onSubmit={handleReset} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email Address</span>
                            </label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered"
                                placeholder="Enter your email"
                            />
                        </div>

                        {message && (
                            <div className="alert alert-success">
                                <span>{message}</span>
                            </div>
                        )}

                        {error && (
                            <div className="alert alert-error">
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="form-control mt-6">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                       <Loading></Loading>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Reset Link'
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <button 
                            className="btn btn-ghost btn-sm"
                            onClick={() => navigate('/auth/login')}
                        >
                            ← Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;