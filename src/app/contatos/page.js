
import React from 'react';
import Link from 'next/link';

async function fetchContatos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}

const Contatos = async () => {
    const contatos = await fetchContatos();

    return (
        <div>
            <h2>Lista de Contatos</h2>
            <ul>
                {contatos.length > 0 ? contatos.map(contato => (
                    <li key={contato.id}>
                        {contato.name} - {contato.email}
                    </li>
                )) : <div style={{ color: 'red' }}>Carregando...</div>}
            </ul>

            <Link href="/">Ir para a página Home</Link>
        </div>
    );
};

export default Contatos;
