import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { hotDoctorContent } from "@/utils/contants";
const HotDoctor = () => {
	return (
		<Carousel className="w-full">
			<CarouselContent className="-ml-1 gap-2">
				{hotDoctorContent.map((el, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4 ">
						<div className="p-1">
							<Card className="px-10 border-none shadow-none bg-transparent">
								<CardContent className="flex aspect-square items-center justify-center p-4 flex-col gap-4">
									<img src={el.icon} alt={el.name} className="object-contain w-[220px] rounded-full" />
									<span className="text-lg font-medium mt-8">{el.name}</span>
									<span className="text-lg font-medium text-gray-500">{el.special}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default HotDoctor;
