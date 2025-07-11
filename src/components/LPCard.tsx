import { UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type LPCardProps = {
  title: string;
  description: string;
};

export function LPCard({ title, description }: LPCardProps) {
  return (
    <Card className="w-full max-w-xs flex flex-col rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex">
        <UserRound className="h-6 w-6 text-gray-400" />
        <CardTitle className="text-lg font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm leading-relaxed">{description || ""}</p>
      </CardContent>
    </Card>
  );
}
