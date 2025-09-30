interface statsDataType {
  id: number;
  value: string;
  label: string;
}

const statsData: statsDataType[] = [
  {
    id: 3,
    value: '6+',
    label: 'Month Experience',
  },
  {
    id: 1,
    value: '15+',
    label: 'Projects Completed',
  },

  {
    id: 5,
    value: '20+',
    label: 'Commits',
  },
  {
    id: 4,
    value: '24',
    label: 'Support Hours',
  },
];

const AboutCards = () => {
  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center   bg-[#202022] border-[1px] border-[#383838] rounded-2xl p-7 bg-gradient-to-br from-[#2d2d2e40] to-[#1b1b1d00]">
      {statsData.map((data) => (
        <div
          key={data.id}
          className=" flex cursor-pointer flex-col hover:scale-105 duration-400 hover:shadow-2xl justify-center items-center p-5 uppercase border-[2px] border-[#383838] rounded-2xl shadow-lg bg-gradient-to-br from-[#404040] from-0% to-[#40404000] to-50%"
        >
          <h1 className=" text-4xl text-amber-200 font-medium">{data.value}</h1>
          <h1 className=" text-center text-[#d6d6d6] text-sm mt-3">
            {data.label}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default AboutCards;
