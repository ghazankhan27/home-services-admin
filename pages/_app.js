import { AuthWrapper } from "../components/AuthWrapper";
import { NavBar } from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthWrapper>
      <NavBar />
      <Component {...pageProps} />
    </AuthWrapper>
  );
}
