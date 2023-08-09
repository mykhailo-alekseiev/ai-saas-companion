import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ClerkProvider} from '@clerk/nextjs';
import {ModalProvider} from "@/components/modal-provider";
import {FC, PropsWithChildren} from "react";
import {ToasterProvider} from "@/components/toaster-provider";
import {CrispProvider} from "@/components/crisp-provider";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Genius',
    description: 'AI Platform'
};

const RootLayout: FC<PropsWithChildren> = ({children}) => (
    <ClerkProvider>
        <html lang='en'>
        <CrispProvider/>
        <body className={inter.className}>
        <ModalProvider/>
        <ToasterProvider/>
        {children}
        </body>
        </html>
    </ClerkProvider>
);

export default RootLayout
