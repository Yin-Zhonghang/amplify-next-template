import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

// Importing our client component instead of direct Amplify import
// 导入我们的客户端组件而不是直接导入 Amplify
import ClientAuthenticator from "./components/ClientAuthenticator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientAuthenticator>
          {children}
        </ClientAuthenticator>
      </body>
    </html>
  );
}
