import {
  BookCheck,
  GraduationCap,
  History,
  MapPin,
  University,
} from "lucide-react";

interface EducationCardProps {
  time: string;
  name: string;
  location: string;
  grade: string;
}

const EducationCard = ({ time, name, location, grade }: EducationCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      {/** first row */}
      <div className="flex items-center gap-3">
        <div className="h-[1px] bg-black flex-grow" />
        <div className="p-1 bg-black rounded-full">
          <GraduationCap size={25} className="text-white" />
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
          <h2 className="font-bold text-lg">{name}</h2>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={25} />
          <p className="text-slate-500">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <BookCheck size={25} />
          <p className="text-slate-500">{grade}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
