import { useState } from "react";
import Header from "../features/eventos/componentes/Header";
import { Button, Card } from "../shared/ui";
import type { Cidade } from "../domain";

interface CitiesPageProps {
  cidades: Cidade[];
  onNovaCidade: () => void;
  onVerPontos: (cidadeId: string) => void;
  onEditarCidade: (cidade: Cidade) => void;
  onExcluirCidade: (cidadeId: string) => void;
}

const CitiesPage: React.FC<CitiesPageProps> = ({
  cidades,
  onNovaCidade,
  onVerPontos,
  onEditarCidade,
  onExcluirCidade,
}) => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const handleSideMenuOpen = () => {
        setIsSideMenuOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen text-[#e9f2ff] bg-slate-950">
            <a
                href="#conteudo-principal"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-slate-900 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
            >
                Ir para o conteúdo
            </a>
            {/* overlay do menu lateral */}
            {isSideMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={handleSideMenuOpen}
                />
            )}

            <Header
                open={isSideMenuOpen}
                handleSideMenuOpen={handleSideMenuOpen}
            />
            <main
                id="conteudo-principal"
                className="max-w-5xl mx-auto px-4 pb-16 pt-8"
            >
                <section aria-label="Cidades da região" className="mt-4">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-sm font-semibold text-[#cfe0fb]">
                            Cidades cadastradas
                        </h2>
                        <Button variant="primary" size="sm" onClick={onNovaCidade}>
                            + Nova cidade
                        </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {cidades.map((c) => (
                            <Card key={c.id} className="p-4 flex flex-col gap-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 font-semibold">
                                        {c.uf}
                                    </span>
                                    <span className="text-[#9fb0c8]">{c.pontos.length} ponto(s)</span>
                                </div>
                                <h3 className="text-base font-extrabold">{c.nome}</h3>
                                <p className="text-xs text-[#9fb0c8] flex-1">{c.desc || ""}</p>

                                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                    <Button size="sm" onClick={() => onVerPontos(c.id)}>
                                        Ver pontos
                                    </Button>
                                    <Button size="sm" onClick={() => onEditarCidade(c)}>
                                        Editar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => onExcluirCidade(c.id)}
                                    >
                                        Excluir
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

            </main>

            <footer className="border-t border-white/10 py-6 text-center text-xs text-[#9fb0c8]">
                Dourados+ • Projeto Inovador • Turma 2024.45.253 • Senac-MS.
            </footer>
        </div>
    );
};

export default CitiesPage;
