
import React, { use } from 'react';

import useTitle from '../hooks/useTitle';
import { AuthContext } from '../provider/AuthProvider';

const OrderHistory = () => {
    useTitle('Order History');
    const { user } = use(AuthContext);

    // Sample order data
    const orders = [
        { id: 1, name: "Remote Control Car", price: "$25.99", date: "2024-01-15", status: "Delivered" },
        { id: 2, name: "Lego Building Set", price: "$35.50", date: "2024-01-10", status: "Delivered" },
        { id: 3, name: "Educational Robot", price: "$49.99", date: "2024-01-05", status: "Processing" }
    ];

    return (
        <div className="min-h-screen bg-base-200 mt-16 py-8">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Order History</h1>
                    <p className="text-gray-600 mt-2">Your recent toy orders</p>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full">
                                    <img src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile" />
                                </div>
                            </div>
                            <div>
                                <h2 className="card-title">{user?.displayName || 'User'}</h2>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {orders.map(order => (
                                <div key={order.id} className="flex justify-between items-center p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-semibold">{order.name}</h3>
                                        <p className="text-sm text-gray-500">{order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">{order.price}</p>
                                        <span className={`badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-gray-500">Total Orders: {orders.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;