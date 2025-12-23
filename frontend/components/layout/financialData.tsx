import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function financialData() {
return (

<Card className="border-l-4 border-l-primary bg-accent">
<CardHeader className="pb-2">
    <CardTitle className="text-lg text-primary">Financiële Data</CardTitle>
</CardHeader>
<CardContent className="space-y-4">
    {/* Income Section */}
    <div className="space-y-2">
    <h4 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide">Inkomen</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">estimatedIncome:</span>
        <span className="font-medium">123.456.789</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">salaryIn:</span>
        <span className="font-medium">567.789</span>
    </div>
    </div>

    {/* Volume Section */}
    <div className="space-y-2 pt-2 border-t border-border">
    <h4 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide">Volume</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">totalVolumeIn:</span>
        <span className="font-medium">250.000.000</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">totalVolumeOut:</span>
        <span className="font-medium">245.000.000</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">wholesaleAvgOut:</span>
        <span className="font-medium">112.223.445</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">wholesaleMaxOut:</span>
        <span className="font-medium">22.334.455</span>
    </div>
    </div>

    {/* Credit Section */}
    <div className="space-y-2 pt-2 border-t border-border">
    <h4 className="text-sm font-semibold text-accent-foreground uppercase tracking-wide">Krediet</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">creditIn:</span>
        <span className="font-medium">50.000.000</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">creditOut:</span>
        <span className="font-medium">48.500.000</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">fuliza:</span>
        <span className="font-medium">15.000</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">overdraft:</span>
        <span className="font-medium">25.000</span>
    </div>
    </div>

    {/* Risk Indicators */}
    <div className="space-y-2 pt-2 border-t border-border">
    <h4 className="text-sm font-semibold text-destructive uppercase tracking-wide">Risico-indicatoren</h4>
    <div className="flex justify-between">
        <span className="text-muted-foreground">liquorOut:</span>
        <span className="font-medium">100</span>
    </div>
    <div className="flex justify-between">
        <span className="text-muted-foreground">gamblingOut:</span>
        <span className="font-medium text-destructive">2.000</span>
    </div>
    </div>
</CardContent>
</Card>
);
}