import { ServiceBlock, ContentRound, Banner, Specialist, HotDoctor } from "@/components";
import { Button } from "@/components/ui/button";
import { farCareContent, hospitalContent, serviceContent, specialistContent } from "@/utils/contants";
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
				<div className="flex justify-between">
					<h1 className="font-semibold mb-4 text-2xl">Chuyên khoa</h1>
					<Button>Xem thêm</Button>
				</div>
				<Specialist listContent={specialistContent} />
				<div className="flex justify-between mt-8">
					<h1 className="font-semibold mb-4 text-2xl">Cơ sở y tế</h1>
					<Button>Xem thêm</Button>
				</div>
				<Specialist listContent={hospitalContent} />
			</div>
			<div className="bg-[url('https://cdn.bookingcare.vn/fo/w1920/2023/11/01/140311-background5.png')] w-full">
				<div className="flex justify-between mt-8 mx-[120px] pt-4">
					<h1 className="font-semibold mb-4 text-2xl">Bác sĩ nổi bật</h1>
					<Button>Xem thêm</Button>
				</div>
				<HotDoctor />
			</div>
			<div className="mx-[120px] mt-[50px]">
				<div className="flex justify-between mt-8">
					<h1 className="font-semibold mb-4 text-2xl">Khám từ xa</h1>
					<Button>Xem thêm</Button>
				</div>
				<Specialist listContent={farCareContent} />
				<div className="mt-[50px]">
					<h1 className="font-semibold mb-4 text-2xl">Gợi ý của BookingCare</h1>
					<div className="flex justify-start items-center gap-20">
						<ContentRound title="Được quan tâm" img="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-3.png" />
						<ContentRound title="Y tế nổi bật" img="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-3.png" />
						<ContentRound title="Bài viết liên quan" img="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-3.png" />
					</div>
				</div>
			</div>
			<div className="bg-[url('https://cdn.bookingcare.vn/fo/w1920/2023/11/01/140308-background2.png')] w-full py-8">
				<div className="flex justify-between mt-8 mx-[120px] pt-4">
					<h1 className="font-semibold mb-4 text-2xl">Sức khỏe tinh thần</h1>
					<Button>Xem thêm</Button>
				</div>
				<div className="mx-[120px]">
					<Specialist listContent={hospitalContent} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
