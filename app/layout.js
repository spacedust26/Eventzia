import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const pd = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Eventzia - Make your events memorable!",
  description: "Be it your big wedding day, birthday party, anniversary dates, office party or retirement - we transform life milestones into unforgettable memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 ${pd.className}`}>
        <AuthProvider>
          <div className="div md:min-h-screen">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
