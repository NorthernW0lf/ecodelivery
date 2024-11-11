import { useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Состояние для управления сообщением об ошибке
    const { store } = useContext(Context);

    const handleLogin = async () => {
        try {
            await store.login(email, password);
            setError(''); // Очистить ошибку при успешном входе
        } catch (e: any) {
            console.log("Ошибка при логине:", e); // Логирование для диагностики
            setError('Ошибка при выполнении входа'); // Установим статичное сообщение
        }
    };

    const handleRegister = async () => {
        try {
            await store.registration(email, password);
            setError(''); // Очистить ошибку при успешной регистрации
        } catch (e: any) {
            console.log("Ошибка при регистрации:", e); // Логирование для диагностики
            setError('Ошибка при регистрации'); // Установим статичное сообщение
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            {error && (
                <div className="text-red-500 text-sm mb-4">
                    {error}
                </div>
            )}
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleLogin}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Login
            </button>
            <button
                onClick={handleRegister}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                Register
            </button>
        </div>
    );
}

export default observer(LoginForm);