
import "./globals.css"; 

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: ' 100vh',
        justifyContent: 'center',
        fontSize: '24px',
      }}> 
          {children} 
      </body>
    </html>
  );
}
