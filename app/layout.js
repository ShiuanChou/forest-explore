import { Noto_Serif_TC } from 'next/font/google';
import "../styles/main.scss";
import Navbar from "@/components/Navbar";

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
});

export const metadata = {
  title: "護國神殿",
  description: "護國神殿是一部關於生態環境的沉浸式實境片，我們讓觀賞者透過VR虛擬實境的方式進入森林。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={notoSerifTC.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
