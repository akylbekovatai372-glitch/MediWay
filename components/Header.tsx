'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';
const links=[['Каталог','/catalog'],['Врачи','/doctors'],['Карта','/map'],['AI-навигатор','/navigator']];
export function Header(){const [open,setOpen]=useState(false);const [lang,setLang]=useState('RU');return <header className="header"><div className="nav wrap"><Link href="/" className="brand"><span className="brand-icon"><HeartPulse size={21}/></span><span>Medi<span className="teal">Way</span><small>МЕДИЦИНА РЯДОМ</small></span></Link><nav className={open?'navlinks show':'navlinks'}>{links.map(([t,u])=><Link key={u} href={u} onClick={()=>setOpen(false)}>{t}</Link>)}</nav><div className="nav-actions"><button className="lang" onClick={()=>setLang(lang==='RU'?'KG':'RU')}>{lang}⌄</button><Link className="login-link" href="/login">Войти</Link><Link className="button small" href="/register">Создать аккаунт</Link></div><button className="menu" onClick={()=>setOpen(!open)} aria-label="Открыть меню">{open?<X/>:<Menu/>}</button></div></header>}
