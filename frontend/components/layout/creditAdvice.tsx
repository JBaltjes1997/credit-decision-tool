import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CreditAdvice() {
    return (
<Card className="border-l-4 border-l-accent-foreground bg-accent">
    <CardHeader className="pb-2">
    <CardTitle className="text-lg text-accent-foreground">Kredietadvies</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
    {/* Limits */}
    <div className="grid grid-cols-2 gap-2 pb-4 border-b border-border">
        <div className="space-y-2">
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Proposed limit:</span>
            <span className="font-bold text-primary">9.500</span>
        </div>
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Predicted limit:</span>
            <span className="font-bold text-primary">15.000</span>
        </div>
        </div>
        <div className="space-y-2">
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Expected limit:</span>
            <span className="font-bold text-primary">7.000</span>
        </div>
        <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Advise:</span>
            <span className="font-bold text-accent-foreground">7.000</span>
        </div>
        </div>
    </div>

    {/* Advice Explanation */}
    <div>
        <p className="font-medium text-foreground mb-2">Het advies is gebaseerd op:</p>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
        <li>The customer has a low average volume</li>
        <li>The customer&apos;s probability of default score is very high: 0.5.</li>
        <li>Customer&apos;s average gambling is above average:</li>
        <li>Customer&apos;s average liquor consumption is: average</li>
        <li>The customer has a high CRB score of JJ.</li>
        <li>The customer has a low credit score of</li>
        </ul>
    </div>
    </CardContent>
</Card> 
    );
}