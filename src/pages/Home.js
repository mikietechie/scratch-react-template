import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
    <div>
        <h1>Home { user ? 'Hello' : ''}</h1>
        <p>Some content</p>
    </div>
    );
}