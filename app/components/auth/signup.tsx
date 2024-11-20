import CustomForm from "./CustomForm";
import { Footer } from "./footer";
import { Header } from "./header";


interface SignUpProp{
  onPress:()=>void
}

export default function SignUp({onPress}:SignUpProp) {
  const style = 'flex justify-end items-center space-x-2'
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Header title="Sign Up" subTitle=" Enter your email and password to signup"/>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <CustomForm style={style} buttonTitle="Sign up"
           email="" password="" confirmPassword="" />
          <Footer title="Already have an account?" navTitle="Sign in" onNavigate={onPress}/>
        </div>
      </div>
    </>
  );
}

