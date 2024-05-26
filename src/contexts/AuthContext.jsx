import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribe();
    };
  });

  const logIn = async () => {
    if (!loginEmail || !loginPassword) {
      setAuthError("Please fill in all fields");
      return false;
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setCurrentUser(user);
      toast.success("Logged in successfully");
      return true;
    } catch (error) {
      setAuthError(error.message);
      return false;
    }
  };

  const logInDemo = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        "demo@gmail.com",
        "password"
      );
      setCurrentUser(user);
      toast.success("Logged in successfully as demo user");
      return true;
    } catch (error) {
      setAuthError(error.message);
      return false;
    }
  };
  const signUp = async () => {
    setAuthError("");
    if (!email || !password || !confirmPassword) {
      setAuthError("Please fill in all fields");
      return false;
    }
    if (password !== confirmPassword) {
      setAuthError("Passwords do not match");
      return false;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(user);
      toast.success("Signed up successfully");
      return true;
    } catch (error) {
      setAuthError(error.message);
      return false;
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setCurrentUser(null);
    toast("Logged out");
    emptyState();
  };

  const emptyState = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLoginEmail("");
    setLoginPassword("");
    setAuthError("");
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        loginEmail,
        setLoginEmail,
        loginPassword,
        setLoginPassword,
        authError,
        signUp,
        emptyState,
        logIn,
        currentUser,
        logOut,
        logInDemo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { useAuth, AuthProvider };
