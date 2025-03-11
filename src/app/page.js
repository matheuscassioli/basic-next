
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <h1>Bem-vindo à minha aplicação Next.js!</h1>
      <p>Isso é a página inicial.</p>
      <Link href="/contatos">Ir para a página Contatos</Link>
    </>
  );
}
