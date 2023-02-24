import { signInWithRedirect,getRedirectResult, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../util/firebase';


const Login = () => {

  const user = auth.currentUser;
  

  const loginInWithGoogle = async () => {
    await signInWithRedirect(auth, provider);
    await getRedirectResult(auth);
  }

  return (
      <div>
      <p>ログインして始める</p>
      <button onClick={async() => await loginInWithGoogle()}>Googleでログイン</button>
      {/* {console.log(user)} */}
      </div>
  );
}

export default Login;
