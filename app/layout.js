import "./globals.css";
import { Fraunces, DM_Sans } from "next/font/google";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = { title: "Tenda Rota do Sol | Lanchonete e Produtos Coloniais em Itati - RS", description: "Parada na RS-486 em Itati com lanches, refeições e produtos coloniais. Aberta todos os dias das 07h às 21h. Nota 4,7 em 270 avaliações. (51) 99680-3570." };

export default function RootLayout({ children }) {
  return <html lang="pt-BR" className={display.variable + " " + body.variable}><body>{children}</body></html>;
}
