import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { specialistContent } from "@/utils/contants";
const Specialist = () => {
	return (
		<Carousel className="w-full">
			<CarouselContent className="-ml-1">
				{specialistContent.map((el, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Card className="px-10">
								<CardContent className="flex aspect-square items-center justify-center p-6 flex-col gap-4">
									<img src={el.icon} alt={el.name} className="w-[320px] object-contain" />
									<span className="text-lg font-semibold mt-8">{el.name}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default Specialist;
