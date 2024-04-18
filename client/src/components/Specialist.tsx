import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";
import clsx from "clsx";

interface ListContent {
	listContent: Array<{
		icon: string;
		name: string;
	}>;
	size?: string;
}

const Specialist: React.FC<ListContent> = ({ listContent, size }) => {
	return (
		<Carousel className="w-full">
			<CarouselContent className="-ml-1">
				{listContent.map((el, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Card className="px-4">
								<CardContent className="flex aspect-square items-center justify-center p-4 flex-col gap-4">
									<img
										src={el.icon}
										alt={el.name}
										className={clsx(size === "sm" ? "object-contain w-[70%]" : "object-contain")}
									/>
									<span className="text-lg font-semibold mt-2">{el.name}</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			{/* <CarouselPrevious /> */}
			<CarouselNext />
		</Carousel>
	);
};

export default Specialist;
