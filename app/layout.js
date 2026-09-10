import './globals.css';

export const metadata = {
  title: 'سينما | اكتشف عالم الأفلام والمسلسلات',
  description: 'منصة عربية لاكتشاف الأفلام والمسلسلات والممثلين من TMDb.'
};

export default function RootLayout({ children }) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
