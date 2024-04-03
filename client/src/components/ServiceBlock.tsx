import React from "react";

interface ServiceBlockProps {
	name: string;
	icon: string;
}
const ServiceBlock: React.FC<ServiceBlockProps> = ({ name, icon }) => {
	return (
		<div className="flex justify-start gap-5 bg-[url('https://bookingcare.vn/_next/static/media/ic_background_grid_item.b108f491.png')] items-center border p-5 rounded-3xl">
			<img src={icon} alt={name} className="w-[56px] h-[56px] object-contain mr-14" />
			<span className="font-bold text-2xl">{name}</span>
		</div>
	);
};

export default ServiceBlock;
