import { useContext } from "react";
import { GeneralContext } from "../Context/ChurchContext";

export const Announcement = () => {
  const { monthlyAnnouncements, weeklyAnnouncements } =
    useContext(GeneralContext);

  console.log(monthlyAnnouncements);

  return (
    <div>
      <div className="w-full max-w-full h-screen relative overflow-hidden  mt-24 px-10 py-10">
        <img
          src="/announcement.png"
          alt="Cop welcome image"
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>

      {/* Weekly Announcements */}
      <div className="weeklyAnnouncement p-6 flex flex-col gap-10 bg-gradient-to-br from-blue-100 to-blue-300">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-800 shadow-lg">
          Weekly Announcements
        </h2>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          {weeklyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {announcement.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2 italic">
                {announcement.date}
              </p>
              <p className="text-gray-700 text-center">
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Announcements */}
      <div className="monthlyAnnouncement flex flex-col gap-10 items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-700">
          Monthly Announcements
        </h2>
        <div className="flex gap-10 items-center justify-center">
          {monthlyAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white drop-shadow-2xl rounded-lg p-4 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-2">{announcement.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
              <p className="text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};