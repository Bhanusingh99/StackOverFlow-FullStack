import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <main className="flex justify-around">
    <div className="h-screen">
      <UserButton afterSignOutUrl="/"/>
    </div>
    <div className="h1-bold">Home</div>
    </main>
  )
}