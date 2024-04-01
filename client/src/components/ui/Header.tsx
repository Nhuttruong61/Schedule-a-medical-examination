import { Button } from "@/components/ui";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu";
import { MenuIcon, ShirtIcon } from "lucide-react";
import { Link } from "react-router-dom";
import path from "@/utils/path";
import { ModeToggle } from "../ModeToggle";
const Header = () => {
	return (
		<div>
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button className="lg:hidden" size="icon" variant="outline">
								<MenuIcon className="h-6 w-6" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<Link to={path.HOME}>
								<ShirtIcon className="h-6 w-6" />
								<span className="sr-only">ShadCN</span>
							</Link>
							<div className="grid gap-2 py-6">
								<Link className="flex w-full items-center py-2 text-lg font-semibold" to={path.HOME}>
									Tất cả
								</Link>
								<Link className="flex w-full items-center py-2 text-lg font-semibold" to={path.AT_HOME}>
									Tại nhà
								</Link>
								<Link className="flex w-full items-center py-2 text-lg font-semibold" to={path.AT_HOSPITAL}>
									Tại viện
								</Link>
								<Link className="flex w-full items-center py-2 text-lg font-semibold" to={path.BLOGS}>
									Sống khỏe
								</Link>
								<Link className="flex w-full items-center py-2 text-lg font-semibold" to={path.CONTACT}>
									Liên hệ
								</Link>
							</div>
						</SheetContent>
					</Sheet>
					<Link className="mr-6 hidden lg:flex" to="#">
						<ShirtIcon className="h-6 w-6" />
						<span className="sr-only">ShadCN</span>
					</Link>
					<NavigationMenu className="hidden lg:flex">
						<NavigationMenuList>
							<NavigationMenuLink asChild>
								<Link
									className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
									to={path.HOME}
								>
									Tất cả
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink asChild>
								<Link
									className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
									to={path.AT_HOME}
								>
									Tại nhà
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink asChild>
								<Link
									className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
									to={path.AT_HOSPITAL}
								>
									Tại viện
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink asChild>
								<Link
									className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
									to={path.BLOGS}
								>
									Sống khỏe
								</Link>
							</NavigationMenuLink>
							<NavigationMenuLink asChild>
								<Link
									className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
									to={path.CONTACT}
								>
									Liên hệ
								</Link>
							</NavigationMenuLink>
						</NavigationMenuList>
					</NavigationMenu>
					<div className="ml-auto flex gap-2">
						<div>test</div>
						<Button variant="outline">
							<Link to={path.LOGIN}>Đăng nhập</Link>
						</Button>
						<Button>Đăng ký</Button>
						<ModeToggle />
					</div>
				</header>
			</div>
		</div>
	);
};

export default Header;
