import local from 'next/font/local';

import "@/styles/globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';

import NavMenu from '@/components/NavMenu';
import Footer from '@/components/Footer';

const aeroFont = local({
  src: '../public/POIAeronautTrial-Regular.otf',
  variable: '--app-font', 
  display: 'swap'
});

export const metadata = {
  title: "AcadPapa | Your On-Demand AI Tutoring Service",
  description: "AcadPapa offers on-demand AI tutoring services, providing personalized and effective learning experiences anytime, anywhere."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={aeroFont.className}>
      <body>
        <NavMenu />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
