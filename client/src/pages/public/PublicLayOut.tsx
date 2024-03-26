import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/ui";

const PublicLayout = () => {
	return (
		<div>
			<Header />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default PublicLayout;
