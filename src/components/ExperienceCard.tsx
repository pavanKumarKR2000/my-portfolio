import { History, MapPin, Settings, University, UserCog } from "lucide-react";

interface ExperienceCardProps {
  time: string;
  name: string;
  location: string;
  role: string;
}

const ExperienceCard = ({
  time,
  name,
  location,
  role,
}: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      {/** first row */}
      <div className="flex items-center gap-3">
        <div className="h-[1px] bg-black flex-grow" />
        <div className="p-1 bg-black rounded-full">
          <Settings size={25} className="text-white" />
        </div>
        <div className="h-[1px] bg-black flex-grow" />
      </div>
      {/** second row */}
      <div className="p-6 flex flex-col items-center gap-4 relative">
        <div className="flex items-center gap-2">
          <History size={25} />
          <p className="text-slate-500">{time}</p>
        </div>
        <div className="flex items-center gap-2">
          <University size={25} />
          <h2 className="text-slate-500">{name}</h2>
        </div>
        <div className="flex items-center gap-2">
          <UserCog size={25} />
          <h2 className="font-bold text-lg">{role}</h2>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={25} />
          <p className="text-slate-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
