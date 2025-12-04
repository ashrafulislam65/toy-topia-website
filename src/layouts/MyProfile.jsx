import React, {  use, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import useTitle from '../hooks/useTitle';

const MyProfile = () => {
    useTitle('My Profile');
    const authContext = use(AuthContext); 
    const { user, updateUser, loading } = authContext; 
    const navigate = useNavigate();
    
    
    const [formData, setFormData] = useState({
        displayName: '',
        photoURL: ''
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || '',
                photoURL: user.photoURL || ''
            });
        }
    }, [user]);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/auth/login');
        }
    }, [user, loading, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateLoading(true);
        setMessage('');

        try {
            await updateUser({
                displayName: formData.displayName,
                photoURL: formData.photoURL
            });
            
            setMessage('Profile updated successfully!');
            setIsEditing(false);
        } catch (error) {
            //console.error('Update error:', error);
            setMessage('Error updating profile: ' + error.message);
        } finally {
            setUpdateLoading(false);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        setMessage('');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loading></Loading>
                    <p className="mt-4 text-lg">Loading your profile...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-base-200 mt-16 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">My Profile</h1>
                    <p className="text-gray-600">Manage your account information</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* User Info Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-col items-center mb-6">
                                <div className="avatar mb-4">
                                    <div className="w-24 h-24 rounded-full">
                                        <img
                                            src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                            alt="Profile"
                                        />
                                    </div>
                                </div>
                                <h2 className="card-title text-2xl">{user.displayName || 'No Name'}</h2>
                                <p className="text-gray-500">{user.email}</p>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Name:</span>
                                    <span>{user.displayName || 'Not set'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Email:</span>
                                    <span>{user.email}</span>
                                </div>
                               
                            </div>

                            <button
                                onClick={handleEditToggle}
                                className="btn btn-primary"
                            >
                                {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                            </button>
                        </div>
                    </div>

                    {/* Edit Form */}
                    {isEditing && (
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Update Profile</h2>

                                {message && (
                                    <div className={`alert ${message.includes('Error') ? 'alert-error' : 'alert-success'}`}>
                                        <span>{message}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Display Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="displayName"
                                            value={formData.displayName}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Profile Photo URL</span>
                                        </label>
                                        <input
                                            type="url"
                                            name="photoURL"
                                            value={formData.photoURL}
                                            onChange={handleChange}
                                            placeholder="https://example.com/photo.jpg"
                                            className="input input-bordered"
                                        />
                                    </div>

                                    {formData.photoURL && (
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo Preview</span>
                                            </label>
                                            <div className="avatar">
                                                <div className="w-16 h-16 rounded">
                                                    <img
                                                        src={formData.photoURL}
                                                        alt="Preview"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="card-actions justify-between mt-6">
                                        <button
                                            type="button"
                                            onClick={handleEditToggle}
                                            className="btn btn-ghost"
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={updateLoading}
                                        >
                                            {updateLoading ? (
                                                <>
                                                    <span className="loading loading-spinner"></span>
                                                    Updating...
                                                </>
                                            ) : (
                                                'Save Changes'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;