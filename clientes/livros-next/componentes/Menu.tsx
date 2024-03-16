import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                <a className="navbar-brand">Loja Next</a>
                </Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Página Inicial</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/livro-lista">
                            <a className="nav-link">Lista de Livros</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/livro-dados">
                            <a className="nav-link">Dados do Livro</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};