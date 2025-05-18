import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-red-600 w-full h-16 px-72 flex items-center">
            <Image
                src="/london-bis.svg"
                alt="Logo"
                width={100}
                height={50}
                className="hover:opacity-85 transition-opacity duration-100 hover:cursor-pointer"
            />
            <NavigationMenu className="flex-1 flex justify-center pl-10">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white px-4 py-2">
                            Tickets
                        </NavigationMenuTrigger>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" passHref>
                            <NavigationMenuLink>
                                About Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog" passHref>
                            <NavigationMenuLink>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-white px-4 py-2">
                            Help
                        </NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Button variant="secondary" className="hover:bg-orange-100 ml-auto">
                Book Now
            </Button>
        </nav>
    );
};

export default Navbar;