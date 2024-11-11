import React, { useContext, useEffect, useState } from 'react';
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import UserService from "./services/UserService";
import { IUser } from "./models/IUser";
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import './index.css';
import CompanyInfo from "./components/CompanyInfo";
import TransportServices from "./components/TransportServices";
import Storage from "./components/Storage";
import ContactPage from "./components/ContactPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import OrderTracking from "./components/OrderTracking";

function App() {
    const { store } = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, []);

    if (store.isLoading) {
        return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
    }

    if (!store.isAuth) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
                <LoginForm />
            </div>
        );
    }

    if (!store.user.isActivated) {
        return (
            <div className="min-h-screen bg-gray-50 p-8 text-center">
                <h1 className="text-2xl font-bold text-gray-700">Email confirmation needed</h1>
                <h2 className="text-lg font-medium text-gray-600 mt-2">
                    Please confirm your account. An email was sent to: {store.user.email}
                </h2>
                <button
                    onClick={() => store.logout()}
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        );
    }

    const isAdmin = store.user.email === 'ecodev777@gmail.com';

    return (
        <div>
            {!isAdmin && <TheHeader onLogout={() => store.logout()} />}
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage users={users} getUsers={getUsers} userEmail={store.user.email} isAdmin={isAdmin} />}
                    />
                    {!isAdmin && (
                        <>
                            <Route path="/about" element={<CompanyInfo />} />
                            <Route path="/transport" element={<TransportServices />} />
                            <Route path="/storage" element={<Storage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/tracking" element={<OrderTracking />} />
                        </>
                    )}
                </Routes>
            </div>
            {!isAdmin && <TheFooter />}
        </div>
    );
}

export default observer(App);
