import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";

function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/instagram-logo.svg" />
      </Head>
      <Header />
      <div className="grid place-items-center min-h-screen py-2 px-14 text-center">
        <img
          src="https://links.papareact.com/ocw"
          alt="Instagram logo"
          className="w-80"
        />
        <p className="font-xs italic -mt-36">
          This is not a Real app, it is built only for educational purposes
        </p>
        <div className="-mt-72">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white font-semibold"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
