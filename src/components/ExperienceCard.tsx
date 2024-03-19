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
    <div className="flex flex-col gap-3 bg-black rounded-md p-4 flex-1 w-full md:w-[500px] gradient">
      {/** first row */}
      <div className="flex items-center gap-3">
        <div className="h-[1px] bg-white flex-grow" />
        <div className="p-1 bg-white rounded-md">
          <Settings size={25} className="text-black" />
        </div>
        <div className="h-[1px] bg-white flex-grow" />
      </div>
      {/** second row */}
      <div className="p-6 flex flex-col items-center md:items-start  gap-4 relative text-white">
        <div className="flex items-center gap-3">
          <History size={25} className="text-slate-500" />
          <p>{time}</p>
        </div>
        <div className="flex items-center gap-3">
          <University size={25} className="text-slate-500" />
          <h2>{name}</h2>
        </div>
        <div className="flex items-center gap-3">
          <UserCog size={25} className="text-slate-500" />
          <h2>{role}</h2>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={25} className="text-slate-500" />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
