import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const links = <>
    <NavLink className="" to="/">Home</NavLink>
    <NavLink className="" to="/profile">My Profile</NavLink>
    <NavLink className="" to="/orders">My Orders</NavLink>
    
</>

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        //console.log("logged out");
        logOut().then(() => {
            toast.success('You LoggedOut Successfully');
        }).catch((error) => {
            //console.log(error);
            toast.error('Error logging out: ' + error);
        });
    }

    return (
        <div>
            
            <div className="navbar md:px-[80px] bg-[#a4a898] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold text-xl">ToyTopia</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex gap-5 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="relative group">
                        <div className="w-10 rounded-full overflow-hidden cursor-pointer ">
                            <img className='rounded-full'
                                alt="Tailwind CSS Navbar component"
                                src={`${user ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}`} />

                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {user ? user.displayName : "Guest"}
                        </div>
                    </div>

                    {
                        user ? <button onClick={handleLogOut} className='btn bg-[#1a1a1a] text-[white] rounded-4xl'>Sign out</button> : <Link to="/auth/login"><button className='btn bg-[#1a1a1a] text-[white] rounded-4xl'>Sign in</button></Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;