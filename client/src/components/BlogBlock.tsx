import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";

interface ListContent {
	listContent: Array<{
		img: string;
		name: string;
	}>;
}

const BlogBlock: React.FC<ListContent> = ({ listContent }) => {
	return (
		<Carousel className="w-full">
			<CarouselContent className="-ml-1 gap-2">
				{listContent.map((el, index) => (
					<CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
						<div className="p-1">
							<Card className="px-4 border-none shadow-none bg-transparent">
								<CardContent className="flex aspect-square items-center justify-center p-4 flex-col">
									<img src={el.img} alt={el.name} className="object-cover w-full rounded-md border h-[142px]" />
									<span className="text-lg font-semibold mt-2 w-full line-clamp-2">{el.name}</span>
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

export default BlogBlock;
