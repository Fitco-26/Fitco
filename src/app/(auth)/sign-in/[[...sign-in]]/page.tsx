import { SignIn } from "@clerk/nextjs"; // Fixed import

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
};

export default SignInPage; // Fixed export