import Link from "next/link";
import {useRouter} from "next/router";

const RegisterPage = () => {
    return (
        <div>
        <h1>Register</h1>
        <Link href="/auth/login">
            <span>Login Here</span>
        </Link>
        </div>
    );
}

export default RegisterPage;