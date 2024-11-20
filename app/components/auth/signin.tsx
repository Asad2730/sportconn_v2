import CustomForm from "./CustomForm";
import { Footer } from "./footer";
import { Header } from "./header";



interface SignInProp{
    onPress:()=>void
}

export default function SignIn({onPress}:SignInProp) {
  const style = "flex justify-end items-center space-x-2";
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Header
          title="Sign In"
          subTitle=" Enter your email and password to signip"
        />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <CustomForm style={style} buttonTitle="Sign in" email="" password=""  />
          <Footer title="Don't have an account?" navTitle="Sign Up" onNavigate={onPress} />
        </div>
      </div>
    </>
  );
}
