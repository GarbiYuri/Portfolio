'use client';
import { useState, useEffect } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BurgerMenu = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Menu 
      right 
      pageWrapId={"page-wrap"} 
      outerContainerId={"outer-container"}
    >
      {pathname === '/' && (
       <div className="flex flex-col w-full">
          <a className="menu-item py-4 text-white hover:text-blue-400" href="#sobre">Sobre</a>
          <a className="menu-item py-4 text-white hover:text-blue-400" href="#projetos">Projetos</a>
          <a className="menu-item py-4 text-white hover:text-blue-400" href="#contato">Contato</a>
          <Link className="menu-item py-4 text-blue-400 font-bold border-t border-zinc-700 mt-2" href="/arduino">
            Arduino
          </Link>
        </div>
      )}
      {pathname === '/arduino/' && (
        <div className="flex flex-col w-full">
          <a className="menu-item py-4 text-white hover:text-blue-400" href="#projetos">Projetos Arduino</a>
          <a className="menu-item py-4 text-white hover:text-blue-400" href="#contato">Contato</a>
          <Link className="menu-item py-4 text-blue-400 font-bold border-t border-zinc-700 mt-2" href="/">
            Home
          </Link>
        </div>
      )}
    </Menu>
  );
};

export default BurgerMenu;