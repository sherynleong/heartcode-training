import { FlipWords } from "@/components/ui/flip-words";
export default function Home() {
  const words: string[] = ["physcial issues!", "mental issues", "social issues?"];
  return(
      <div className="">
        <div className="flex flex-col justify-center h-dvh">  
        <div className="flex flex-col justify-center items-center h-screen bg-purple-100 bg-cover bg-center" style={{ backgroundImage: "url('https://www.fajarmag.com/wp-content/uploads/2018/06/drug-abuse-causes-effects-solutions.jpg')" }}>
          <h1 className="font-bold text-5xl text-center">
            Why do drugs! When it leads to 
            <FlipWords words={words}/>
          </h1> <br/>
          <p className="text-sm text-center animate-bounce"> Don't do drugs! </p>
        </div>
      </div>
    </div>
  );
}

