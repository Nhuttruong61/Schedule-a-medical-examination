// import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";

// import {
// 	Command,
// 	CommandEmpty,
// 	CommandGroup,
// 	CommandInput,
// 	CommandItem,
// 	CommandList,
// 	CommandSeparator,
// 	CommandShortcut,
// } from "@/components/ui/command";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
const InputSearch = () => {
	return (
		<Command className="rounded-lg border shadow-md max-h-[36px]">
			<CommandInput placeholder="Tìm kiếm..." />
			<CommandList>
				{/* <CommandEmpty>No results found.</CommandEmpty> */}
				{/* <CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon className="mr-2 h-4 w-4" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<FaceIcon className="mr-2 h-4 w-4" />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<RocketIcon className="mr-2 h-4 w-4" />
						<span>Launch</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<PersonIcon className="mr-2 h-4 w-4" />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<EnvelopeClosedIcon className="mr-2 h-4 w-4" />
						<span>Mail</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<GearIcon className="mr-2 h-4 w-4" />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup> */}
			</CommandList>
		</Command>
	);
};

export default InputSearch;
