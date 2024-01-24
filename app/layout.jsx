import NavBar from '../components/NavBar';
import { orbitron, exo2 } from './fonts';
import './globals.css';

export const metadata = {
    title: {
        default: 'Indie Gamer',
        template: '%s | Indie Gamer'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
            <body className="bg-teal-100 flex flex-col px-4 py-2 min-h-screen">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                    {children}
                </main>
                <footer className="border-t py-3 text-center  text-slate-500 text-xs">
                    This is the Footer of {' '}<a className="text-teal-800 hover:underline">Website</a>
                </footer>
            </body>
        </ html>
    )
}