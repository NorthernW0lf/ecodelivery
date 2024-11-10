import React, {useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import UserService from "./services/UserService";
import {IUser} from "./models/IUser";

function App() {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([])

    async function getUsers(){
        try{
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() => {
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])

    if (store.isLoading){
        return <div>Loading...</div>
    }

    if(!store.isAuth){
        return (
            <div>
                <LoginForm/>
                <button onClick={getUsers}>GET USERS</button>
            </div>
    )
    }
    return (
    <div>
        <h1>{store.isAuth ? `User authorized ${store.user.email}` : 'AUTHORIZE'}</h1>
        <h1>{store.user.isActivated ? `Account confirmed by email` : 'Сonfirm account by email'}</h1>
        <button onClick={() => store.logout()}>Logout</button>
        <div>
            <button onClick={getUsers}>GET USERS</button>
        </div>
        {users.map(user=>
            <div key={user.email}>{user.email}</div>
        )}
    </div>
  );
}

export default observer(App);
