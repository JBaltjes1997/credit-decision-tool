'use client';
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { get } from "https";
import { api } from "@/lib/api-client";
import { Account } from "@/lib/types/account";
import { apiSelect } from "@/lib/apiSelect";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-muted p-6">
      <div className="w-[1200px] mx-auto space-y-4">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-foreground">Krediet Beoordeling Dashboard</h1>
        {apiSelect()}

        {/* CRB Section */}
        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-destructive">CRB Score</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className="bg-destructive text-destructive-foreground px-4 py-2 text-sm font-bold mb-2">
              CRB: JJ
            </Badge>
            <p className="text-sm text-muted-foreground">
              Account has score: JJ.<br />
              This means the customer has been very unreliable in the past. This will be of severe negative influence on his/her credit limit.
            </p>
            <ul className="text-sm text-muted-foreground mt-2 list-disc list-inside space-y-1">
              <li>Low activity for assessment low</li>
              <li>High level of recent credit enquiry activity</li>
              <li>Recent delinquency on accounts</li>
              <li>High installment delinquency in the last 24 hours</li>
            </ul>
          </CardContent>
        </Card>

        {/* User Info Card */}
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

        {/* Financial Data Card */}
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

        {/* Advice Section with Limits */}
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
      </div>
    </div>
  );
};


