import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export function Signin() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const email = emailRef.current?.value;
    console.log(emailRef.current);
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/login", {
      email,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }
  return (
    <div className="absolute inset-0 min-h-screen dotted-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tl from-black via-neutral-950 to-transparent flex justify-center items-center">
        <div className="absolute bottom-56 right-[200px] w-36 h-[1000px] rotate-45 ">
          <div className="w-full h-full bg-gradient-to-t to-slate-600/20 via-slate-600/30 from-transparent rounded-tl-[800px] rounded-tr-[800px] blur-2xl " />
        </div>
        <div className="bg-black/20 border border-gray-400/20  rounded-lg shadow-xl p-6 w-96 max-w-[90vw] z-10  min-w-48 min-h-72">
          <div className="flex flex-col justify-center items-center">
            <Input reference={emailRef} placeholder="Email" />
            <Input reference={passwordRef} placeholder="Password" />
          </div>
          <div className="flex justify-center pt-4">
            <Button
              onClick={signin}
              loading={false}
              variant="primary"
              text="Signin"
              fullWidth={true}
            />
          </div>
          <Link to="/signup" ><p className="text-gray-500 mt-2">Don't have an account? <span className="hover:text-slate-700">Sign up</span></p></Link>
        </div>
      </div>
    </div>
  );
}
