const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100 pt-24 p-5 h-dvh">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about the Church of Pentecost and our journey in faith.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">History of the Church</h2>
          <p className="text-gray-700 leading-relaxed">
            The Church of Pentecost began its mission in [YEAR], spreading the
            gospel and impacting communities across the globe. Over the years,
            it has grown into a dynamic movement with a rich history of faith,
            service, and dedication to the teachings of Christ.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Milestones include [important event 1], [important event 2], and the
            establishment of [key achievement].
          </p>
        </section>

        {/* Leadership Team */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Leader 1 */}
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader1.jpg"
                alt="Pastor Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Pastor John Doe</h3>
              <p className="text-sm text-gray-600">Senior Pastor</p>
              <p className="mt-2 text-gray-700">
                Pastor John has been leading the church since [YEAR], with a
                focus on [specific focus or ministry].
              </p>
            </div>

            {/* Leader 2 */}
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader2.jpg"
                alt="Elder Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Elder Jane Smith</h3>
              <p className="text-sm text-gray-600">Elder</p>
              <p className="mt-2 text-gray-700">
                Elder Jane brings a wealth of experience in [specific area],
                serving the church faithfully since [YEAR].
              </p>
            </div>

            {/* Leader 3 */}
            <div className="bg-white shadow-md p-4 rounded-lg text-center">
              <img
                src="leader3.jpg"
                alt="Leader Name"
                className="w-24 h-24 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-bold">Deacon Peter Brown</h3>
              <p className="text-sm text-gray-600">Deacon</p>
              <p className="mt-2 text-gray-700">
                Deacon Peter oversees [responsibility], ensuring smooth
                operations and member engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Core Beliefs and Doctrines */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Core Beliefs and Doctrines
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li className="mb-2">
              We believe in the triune God: the Father, the Son, and the Holy
              Spirit.
            </li>
            <li className="mb-2">
              We uphold the Bible as the inspired and infallible Word of God.
            </li>
            <li className="mb-2">
              Salvation is through faith in Jesus Christ, by grace, and not by
              works.
            </li>
            <li className="mb-2">
              The Church is called to evangelize the world and demonstrate the
              love of Christ.
            </li>
            <li className="mb-2">
              We value prayer, worship, and fellowship as essential elements of
              the Christian life.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Statistics
          </h2>
          <div className="flex justify-center gap-8">
            {[
              { label: "Current Members", count: 500 },
              { label: "True Members", count: 350 },
              { label: "Visitors", count: 150 },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-24 h-24 bg-blue-500 text-white rounded-full shadow-lg"
              >
                <span className="text-2xl font-bold">{stat.count}</span>
                <span className="text-sm text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Meet Our Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alice Brown",
                role: "Choir Member",
                image: "member1.jpg",
              },
              {
                name: "David Green",
                role: "Youth Leader",
                image: "member2.jpg",
              },
              {
                name: "Sophia Lee",
                role: "Sunday School Teacher",
                image: "member3.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;