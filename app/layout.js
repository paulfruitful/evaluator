import { Inter } from "next/font/google";
import "./globals.css";
import { Josefin_Sans,Mulish } from "next/font/google";
import Nav from "./_components/Nav";
const inter = Inter({ subsets: ["latin"] });
const josefin=Josefin_Sans({subsets:['latin'],weight:['100','200','300','400','500','600']})
const mulish=Mulish({subsets:['latin'],weight:['200','300','400','500','600']})
export const metadata = {
  title: "Evaluator",
  description: "Rate your instructors,teachers, staffs and get recommendations",
};
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`bg-[#4F46E5] ${inter.className}`}>
      <Nav josefin={josefin} mulish={mulish}/>  
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

/*

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-indigo-600 ${inter.className}`}>
        <Nav josefin={josefin} mulish={mulish}/>
        {children}
        </body>
    </html>
  );
}
*/