import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>Hello i am a header</header>

        {children}
        
        <footer>Hello i am a footer</footer>
        
      </body>
    </html>
  );
}
