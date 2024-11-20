import RenderAuth from "@/app/components/auth/RenderAuth";



export default function Auth() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-row h-full w-full z-0 items-center justify-center bg-[url('/company.png')]">
        <div className="flex flex-col z-30 p-10  m-10">

          <div className="w-full flex flex-col items-center justify-center text-white mb-4">
             <h1 className=" font-bold text-4xl ">SPORTCONN</h1>
             <p className=" font-bold text-sm flex justify-center">Your Sports Network</p>
          </div>
           
          
          <div className="w-full  mb-4">
              <img src="/03.jpg" alt="logo" className="w-full max-h-32 bg-transparent"/>
          </div>

          <div className="w-full font-bold flex items-center justify-center text-white mb-4">
            Connect With the World
          </div>

          <div className="w-full font-bold text-white">
            It is a long established fact that a reader will be
          </div>

          <div className="w-full font-bold flex items-center justify-center text-white">
            distracted by the readable content.
          </div>
        </div>

        <div className="flex h-full z-30 p-10 bg-black m-10 text-white">
            <RenderAuth/>
        </div>
      </div>
    </div>
  );
}
