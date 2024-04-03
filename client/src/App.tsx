import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {
	PublicLayout,
	NoPage,
	HomePage,
	LoginPage,
	AtHomePage,
	AtHospital,
	BlogPage,
	ContactPage,
} from "./pages/public";
import path from "@/utils/path";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Routes>
				<Route path={path.ALL} element={<NoPage />}></Route>
				<Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}>
					<Route path={path.HOME} element={<HomePage />}></Route>
					<Route path={path.HOME} element={<HomePage />}></Route>
					<Route path={path.AT_HOME} element={<AtHomePage />}></Route>
					<Route path={path.AT_HOSPITAL} element={<AtHospital />}></Route>
					<Route path={path.BLOGS} element={<BlogPage />}></Route>
					<Route path={path.CONTACT} element={<ContactPage />}></Route>
				</Route>
				{/* <Route path={path.ADMIN} element={<AdminLayout />}>
					<Route path={path.DASHBOARD} element={<Dashboard />}></Route>
				</Route> */}
				{/* <Route path={path.MEMBER} element={<MemberLayout />}>
					<Route path={path.PERSONAL} element={<Personal />}></Route>
				</Route> */}

				<Route path={path.LOGIN} element={<LoginPage />}></Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
