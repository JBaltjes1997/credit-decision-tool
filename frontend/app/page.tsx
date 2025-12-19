import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  // return (
  //   <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  //     <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
  //       <Image
  //         className="dark:invert"
  //         src="/next.svg"
  //         alt="Next.js logo"
  //         width={100}
  //         height={20}
  //         priority
  //       />
  //       <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
  //         <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
  //           To get started, edit the page.tsx file. 
  //         </h1>
  //         <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
  //           Looking for a starting point or more instructions? Head over to{" "}
  //           <a
  //             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //             className="font-medium text-zinc-950 dark:text-zinc-50"
  //           >
  //             Templates
  //           </a>{" "}
  //           or the{" "}
  //           <a
  //             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //             className="font-medium text-zinc-950 dark:text-zinc-50"
  //           >
  //             Learning
  //           </a>{" "}
  //           center.
  //         </p>
  //       </div>
  //       <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
  //         <a
  //           className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <Image
  //             className="dark:invert"
  //             src="/vercel.svg"
  //             alt="Vercel logomark"
  //             width={16}
  //             height={16}
  //           />
  //           Deploy Now
  //         </a>
  //         <a
  //           className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Documentation
  //         </a>
  //       </div>
  //     </main>
  //   </div>
  // );
  // const data = await getHello();

  return (
    // <div>
    //   <h1>Next.js + Nest.js appels</h1>
    //   <h1>Next.js + Nest.js pears</h1>
      
    //   {/* <p>{data.message}</p> */}
    // </div>
    <div className="min-h-screen bg-muted p-6">
      <div className="w-[1200px] mx-auto space-y-4">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-foreground">Krediet Beoordeling Dashboard</h1>

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


// async function getHello() {
//   const res = await fetch("http://localhost:8000/");
//   return res.json();
// }

// export default async function Home() {
//   const data = await getHello();

//   return (
//     <div>
//       <h1>Next.js + Nest.js</h1>
//       <p>{data.message}</p>
//     </div>
//   );
// }


