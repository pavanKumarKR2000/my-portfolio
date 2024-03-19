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
    <div className="flex flex-col gap-3 md:w-[500px] gradient p-4 rounded-md">
      {/** first row */}
      <div className="flex items-center gap-3">
        <div className="h-[1px] bg-white flex-grow" />
        <div className="p-1 bg-white rounded-md">
          <GraduationCap size={25} className="text-black" />
        </div>
        <div className="h-[1px] bg-white flex-grow" />
      </div>
      {/** second row */}
      <div className="p-6 flex flex-col items-center md:items-start gap-4 relative text-white">
        <div className="flex items-center gap-2">
          <History size={25} className="text-slate-500" />
          <p>{time}</p>
        </div>
        <div className="flex items-center gap-2">
          <University size={25} className="text-slate-500" />
          <h2 className="truncate text-ellipsis">{name}</h2>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={25} className="text-slate-500" />
          <p className="truncate text-ellipsis">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <BookCheck size={25} className="text-slate-500" />
          <p>{grade}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
