import { useState } from "react";
import Header from "../features/eventos/componentes/Header";
import { Button } from "../shared/ui";
import type { Evento } from "../domain";
import { EventCard } from "../features/eventos/componentes/EventCard";

interface EventPageProps {
    eventos: Evento[];
    onNewEvent: () => void;
    onEditEvent: (evento: Evento) => void;
    onDeleteEvent: (id: string) => void;
    onDetails: (evento: Evento) => void;
}

const EventPage: React.FC<EventPageProps> = ({
    eventos,
    onNewEvent,
    onEditEvent,
    onDeleteEvent,
    onDetails,
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
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#9fb0c8] flex flex-col gap-3">
                    <span>Nenhum evento encontrado com os filtros atuais.</span>
                    <Button variant="primary" size="sm" onClick={onNewEvent}>
                        + Cadastrar primeiro evento
                    </Button>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-end">
                        <Button variant="primary" size="sm" onClick={onNewEvent}>
                            + Novo evento
                        </Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {eventos.map((ev) => (
                            <EventCard
                                key={ev.id}
                                evento={ev}
                                onEdit={onEditEvent}
                                onDelete={onDeleteEvent}
                                onDetails={onDetails}
                            />
                        ))}
                    </div>
                </div>

            </main >

            <footer className="border-t border-white/10 py-6 text-center text-xs text-[#9fb0c8]">
                Dourados+ • Projeto Inovador • Turma 2024.45.253 • Senac-MS.
            </footer>
        </div >
    );
};

export default EventPage;
