import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mochamad Mufid Abiyyu | UI/UX Designer & Front End Developer",
  description: "A passionate UI/UX Designer & Front End Developer with 2 years of experience crafting user-centered digital experiences that are not only visually appealing but also functional and intuitive. Proficient in Figma, Adobe XD, and front-end technologies such as ReactJS, HTML5, CSS3, and JavaScript. Experienced in collaborating with cross-functional teams to deliver products that meet business goals and delight users",
  keywords: "UI/UX Designer, Front End Developer, Figma, Miro, Maze, HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Chakra UI, Ant Design, Material UI, GitHub, GitLab, Bitbucket, Web Design, User Experience, User Interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-1BQ5W21NGE"/>
      <Script id="hotjar-init" strategy="afterInteractive"
      dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6476913,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `
        }}/>
    </html>
  );
}
