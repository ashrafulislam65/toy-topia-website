import { FaRegFaceSadTear } from 'react-icons/fa6';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
                <div className="text-center">
                    
                    <div className="text-8xl mb-4 md:px-50"><FaRegFaceSadTear /></div>

                    
                    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

                    <p className="text-gray-600 mb-8 max-w-md">
                        Sorry, the page you are looking for could not be found.
                        Please return to the homepage or try again.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="btn btn-primary">
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-outline"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;