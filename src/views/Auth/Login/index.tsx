import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./Login.module.scss"

const LoginViews= () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push("/product")
    }

    return (
        <div className={styles.navbar}>
            <h1 className="text-xl text-black">Login</h1>
            <button onClick={() => handleLogin()}>
                Login Again
            </button>
            <Link href="/auth/register">
                <span className="text-2xl text-yellow-500">Register</span>
            </Link>
        </div>
    );
}
export default LoginViews;