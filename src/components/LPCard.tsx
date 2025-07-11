import { UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type LPCardProps = {
  title: string;
  description: string;
};

export function LPCard({ title, description }: LPCardProps) {
  return (
    <Card className="w-full max-w-sm transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl">
      <CardHeader className="flex">
        <UserRound className="h-6 w-6 text-gray-400" />
        <CardTitle className="text-lg font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black text-sm leading-relaxed">{description || ""}</p>
      </CardContent>
    </Card>
  );
}
