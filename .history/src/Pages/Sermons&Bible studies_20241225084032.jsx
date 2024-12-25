import { useState, useEffect } from "react";
import SermonCard
import { BibleStudiesCard } from "../Components/BibleStudiesCard";

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [bibleStudies, setBibleStudies] = useState([]);

  useEffect(() => {
    fetch("public/sermon.json")
      .then((res) => res.json())
      .then((data) => setSermons(data))
      .catch((err) => console.error("Error fetching sermons:", err));

    fetch("public/bibleStudies.json")
      .then((res) => res.json())
      .then((data) => setBibleStudies(data))
      .catch((err) => console.error("Error fetching Bible studies:", err));
  }, []);

  return (
    <>
      <div className="introductionSection bg-[url('/announcement.png')] bg-cover mt-20 bg-center h-screen flex justify-center items-center text-white"></div>

      <div className="container mx-auto my-8 pt-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Sermons & Bible Studies
        </h1>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
            Sermons
          </h2>
          {sermons.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Loading sermons...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {sermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center ">
            Weekly Bible Studies
          </h2>
          {bibleStudies.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              Loading Bible studies...
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {bibleStudies.map((study) => (
                <BibleStudiesCard key={study.week} bibleStudies={study} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sermons;