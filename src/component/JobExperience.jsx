const JobExperience = () => {
  return (
    <div className="max-w-4xl w-full">
      <table className="flex ">
        <tr className="flex flex-1 flex-col items-start gap-2">
          <th className="font-normal"> Skills Required</th>
          <td className="text-xs flex gap-1 border px-1 py-[0.375rem] rounded-md">
            <img src="image1.png" alt="" />
            <span>Figma</span>
          </td>
          <td className="text-xs flex gap-1 border px-1 py-[0.375rem] rounded-md">
            <img src="image2.png" alt="" />
            <span>Adobe Illustrator</span>
          </td>
          <td className="text-xs flex gap-1 border px-1 py-[0.375rem] rounded-md">
            <img src="image6.png" alt="" />
            <span> Adobe XD</span>
          </td>
        </tr>
        <tr className="flex flex-1  flex-col items-start gap-2 ">
          <th className="font-normal"> Preferred Language</th>
          <td className="text-base font-semibold">English</td>
        </tr>
        <tr className="flex-1 flex flex-col items-start  gap-2">
          <th className="font-normal"> Type</th>
          <td className="text-base font-semibold">Full Time</td>
        </tr>
        <tr className="flex-1 flex flex-col items-start  gap-2">
          {" "}
          <th className="font-normal"> Years of Experience</th>
          <td className="text-base font-semibold">3+ Years of Experience</td>
        </tr>
      </table>
    </div>
  );
};

export default JobExperience;
