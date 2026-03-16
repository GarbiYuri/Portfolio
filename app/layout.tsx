
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <title>Meu Portifolio</title>
      <link rel="shortcut icon" href="/eu.jpeg" type="image/x-icon" />
      <body>
        {children}
      </body>
    </html>
  );
}
