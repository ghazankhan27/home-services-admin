import Head from "next/head";
import { InputField } from "../components/InputField";
import { LoginButton } from "../components/LoginButton";
import { useLogin } from "../hooks/useLogin";

export default function login() {
  const { loading, setUser } = useLogin();

  if (loading) return <></>;

  return (
    <>
      <Head>
        <title>Login | Home Services</title>
      </Head>
      <div className="grid place-items-center mt-10">
        <p className="font-bold text-xl">Login</p>
        <form
          className="grid gap-y-2 my-6"
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem("user", "true");
            setUser(true);
          }}
        >
          <InputField
            label="Username"
            options={{
              required: true,
              type: "text",
            }}
          />
          <InputField
            label="Password"
            options={{
              required: true,
              type: "password",
            }}
          />
          <LoginButton />
        </form>
      </div>
    </>
  );
}
