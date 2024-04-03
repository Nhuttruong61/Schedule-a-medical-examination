interface ContentRoundProps {
	img: string;
	title: string;
}
const ContentRound: React.FC<ContentRoundProps> = ({ img, title }) => {
	return (
		<div className="my-8">
			<div className="flex flex-col items-center gap-4 w-[220px]">
				<img src={img} alt={title} className="rounded-full" />
				<span>{title}</span>
			</div>
		</div>
	);
};

export default ContentRound;
