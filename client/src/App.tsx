import { Route, Routes } from "react-router-dom";

import PublicLayout from "./pages/public/PublicLayOut.tsx";
import NoPage from "./pages/public/NoPage.tsx";
import HomePage from "./pages/public/HomePage.tsx";
import LoginPage from "./pages/public/LoginPage.tsx";
function App() {
	return (
		<div>
			<Routes>
				<Route path="*" element={<NoPage />}></Route>
				<Route path="/" element={<PublicLayout />}>
					<Route path="" element={<HomePage />}></Route>
				</Route>
				{/* <Route path={path.ADMIN} element={<AdminLayout />}>
					<Route path={path.DASHBOARD} element={<Dashboard />}></Route>
				</Route> */}
				{/* <Route path={path.MEMBER} element={<MemberLayout />}>
					<Route path={path.PERSONAL} element={<Personal />}></Route>
				</Route> */}

				<Route path="/login" element={<LoginPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
