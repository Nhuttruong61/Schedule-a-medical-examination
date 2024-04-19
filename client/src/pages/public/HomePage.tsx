import { ServiceBlock, ContentRound, Banner, Specialist, HotDoctor, BlogBlock } from "@/components";
import { Button } from "@/components/ui/button";
import video from "@/assets/video/CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN.mp4";
import {
	doctorQuestion,
	farCareContent,
	hospitalContent,
	serviceContent,
	specialistContent,
	entertainmentIcon,
	tipsForUser,
} from "@/utils/contants";
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

				<Specialist listContent={hospitalContent} size="sm" />
			</div>
			<div className="bg-[url('https://cdn.bookingcare.vn/fo/w1920/2023/11/01/140311-background5.png')] w-full">
				<div className="flex justify-between mt-8 mx-[120px] pt-4">
					<h1 className="font-semibold mb-4 text-2xl">Bác sĩ nổi bật</h1>
					<Button>Xem thêm</Button>
				</div>
				<div className="mx-[120px]">
					<HotDoctor />
				</div>
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
			<div className="flex justify-between mt-8 mx-[120px] pt-4">
				<h1 className="font-semibold mb-4 text-2xl">Bác sĩ hỏi đáp</h1>
			</div>
			<div className="mx-[120px]">
				<Specialist listContent={doctorQuestion} />
			</div>
			<div className="flex justify-between mt-8 mx-[120px] pt-4">
				<h1 className="font-semibold mb-4 text-2xl">Cẩm nang</h1>
				<Button>Xem thêm</Button>
			</div>
			<div className="mx-[120px]">
				<BlogBlock listContent={tipsForUser} />
			</div>
			<div className="flex justify-between mt-8 mx-[120px] pt-4">
				<h1 className="font-semibold mb-4 text-2xl">Sống khỏe suốt đời</h1>
				<Button>Xem thêm</Button>
			</div>
			<div className="mx-[120px]">
				<BlogBlock listContent={tipsForUser} />
			</div>
			<div className="bg-[url('https://cdn.bookingcare.vn/fo/2023/11/01/140309-background3.png')] w-full pb-8 pt-1">
				<div className="flex justify-between mt-2 mx-[120px] pt-4">
					<h1 className="font-semibold mb-4 text-3xl text-center w-full">Truyền thông nói về BookingCare</h1>
				</div>
				<div className="mx-[120px] flex gap-4">
					<div className="flex-1 border-none mr-4">
						<video src={video} loop autoPlay controls className="rounded-lg border-none"></video>
					</div>
					<div className="grid grid-cols-2 gap-2 flex-1">
						{entertainmentIcon.map((el, index) => (
							<div key={index} className="bg-white flex items-center rounded-md w-[274px] mb-4">
								<img src={el.icon} alt="vtv1" className="object-contain w-full h-[38px]" />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-between mt-8 mx-[120px] pt-4">
				<h1 className="font-semibold mb-4 text-2xl">Dành cho bác sĩ và cơ sở y tế</h1>
				<Button>Xem thêm</Button>
			</div>
			<div className="mx-[120px]">
				<BlogBlock listContent={tipsForUser} />
			</div>
		</div>
	);
};

export default HomePage;
