import { ServiceBlock, ContentRound, Banner, Specialist } from "@/components";
import { serviceContent } from "@/utils/contants";
const HomePage = () => {
	return (
		<div>
			<div className="w-[1280px] mx-auto">
				<Banner />
			</div>
			<div className="mx-[120px] mt-[50px]">
				<h1 className="font-semibold mb-4 text-2xl">Dành cho bạn</h1>
				<div className="flex justify-start items-center gap-20">
					<ContentRound title="Bác sĩ" img="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png" />
					<ContentRound title="Bác sĩ" img="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png" />
					<ContentRound title="Bác sĩ" img="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png" />
				</div>
				<h1 className="font-semibold mb-4 text-2xl">Dịch vụ toàn diện</h1>
				<div className="grid gap-8 my-8 grid-cols-2">
					{serviceContent.map((el, index) => (
						<ServiceBlock icon={el.icon} name={el.name} key={index} />
					))}
				</div>
				<h1 className="font-semibold mb-4 text-2xl">Chuyên khoa</h1>
				<Specialist />
			</div>
		</div>
	);
};

export default HomePage;
