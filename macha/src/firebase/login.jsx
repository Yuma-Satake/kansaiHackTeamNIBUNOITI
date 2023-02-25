import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, provider } from "../util/firebase";

const Login = () => {
  const loginInWithGoogle = async () => {
    const newProvider = provider.addScope("https://mail.google.com/");
    await signInWithRedirect(auth, newProvider);
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={async () => await loginInWithGoogle()}>Googleでログイン</button>
    </div>
  );
};

export default Login;
