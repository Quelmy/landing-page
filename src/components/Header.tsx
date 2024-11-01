import Image from "next/image";

import { ItemsMenu } from "./ItemsMenu";
import { Search } from "./Search";

import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import { Container } from "./Container";

export function Header() {
    return (
        <header className=" relative flex items-center w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[-19%] h-full z-0"></div>
            <Container>
             <div className="flex flex-1 items-center justify-between">
                <div className="flex items-center gap-14">
                    <Image
                      src={Logo}
                      alt="Logo"
                    />
                    <ul className="flex items-center gap-14">
                        <li>
                            <ItemsMenu 
                               name="Para Você"  
                            />
                        </li>
                        <li>
                            <ItemsMenu 
                               name="Para Empresas"  
                            />
                        </li>
                        <li>
                            <ItemsMenu 
                               name="Serviços"  
                            />
                        </li>
                        <li>
                            <ItemsMenu 
                               name="Ajuda"  
                            />
                        </li>
                    </ul>  
                </div>
                < Search />
             </div>
             <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-20">
                <Image src={IconUser} alt="Icon user" />
                <span className="text-white font-bold">Acessar Conta</span>
             </button>
            </Container>
        </header>
    )
}