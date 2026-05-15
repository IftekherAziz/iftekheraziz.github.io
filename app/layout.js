import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Iftekher Aziz - Fullstack Developer",
    description: "Iftekher Aziz is a fullstack developer based in Vienna, Austria. I am a self-taught developer with several years of experience as a freelancer and currently pursuing Master's degree in Computer Science at the University of Vienna.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning
                className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white"
            >
                {children}
            </body>
        </html>
    );
}
