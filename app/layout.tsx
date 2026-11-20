import type {Metadata} from 'next';import './globals.css';import {Header} from '@/components/Header';import {Footer} from '@/components/Footer';
export const metadata:Metadata={title:{default:'MediWay — медицинская навигация Кыргызстана',template:'%s | MediWay'},description:'Находите клиники, врачей, аптеки и диагностические центры в Бишкеке. Демонстрационная версия MediWay.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body><Header/><main>{children}</main><Footer/></body></html>}
