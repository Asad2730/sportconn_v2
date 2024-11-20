import { teams } from "@/app/temp/data";

export const CustomTeamCards = () => (
  <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
    {/* Card Header */}
    <div className="text-black font-bold text-xl mb-4 border-b-2  pb-2">
      Teams
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.flatMap((team) => (
        <div key={team.id} className=" rounded-lg shadow-sm flex flex-col">
          <img
            src={team.url}
            alt={team.name}
            className="w-full h-5/6 object-cover rounded-t-lg"
          />
          <div className="p-4 text-sm font-bold text-black">
            {team.name}
          </div>
        </div>
      ))}
    </div>
  </div>
);
