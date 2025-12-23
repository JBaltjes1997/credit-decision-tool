import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerData() {
    return (
        <Card className="border-l-4 border-l-primary bg-accent">
            <CardHeader className="pb-2">
            <CardTitle className="text-lg text-primary">Klantgegevens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi User name:</span>
                <span className="font-medium">A. Nonymous</span>
            </div>
            <div className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sevi Phone Number:</span>
                <span className="font-medium">+2541001001</span>
            </div>
            </CardContent>
        </Card>
    );
}