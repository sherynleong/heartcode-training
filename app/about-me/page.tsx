import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Thumbs from "@/app/assets/thumbs.jpg";

export default function AboutMe() {
  return (
    <div className="p-5">
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am sheryn
                </CardTitle>
                <CardDescription>
                    I like to watch drama
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image src={Thumbs} alt="1"/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Sheryn
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to watch drama</div>
            </CardContent>
        </Card>
    </div>
  );
}