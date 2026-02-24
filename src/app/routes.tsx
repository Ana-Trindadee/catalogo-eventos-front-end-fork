import React from "react";
import CitiesPageProps from "../pages/CitiesPage";
import type { Cidade } from "../domain";

export const AppRoutes: React.FC = () => {
  // se quiser, aqui entraria o BrowserRouter depois
  // return <DouradosEventosPage />;
  return (
    <CitiesPageProps cidades={[]} onNovaCidade={function (): void {
      throw new Error("Function not implemented.");
    } } onVerPontos={function (cidadeId: string): void {
      throw new Error("Function not implemented.");
    } } onEditarCidade={function (cidade: Cidade): void {
      throw new Error("Function not implemented.");
    } } onExcluirCidade={function (cidadeId: string): void {
      throw new Error("Function not implemented.");
    } } />
  );
};