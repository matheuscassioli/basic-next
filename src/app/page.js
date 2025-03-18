import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Home() {

  return (
    <>
      <h1>Bem-vindo ao sistema de Contatos!</h1>
      <Link
        href="/contatos">
          Ir para Contatos
      </Link>
      <Toaster
        position="top-right"
        reverseOrder={false} />
    </>
  );
}
