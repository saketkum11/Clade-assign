import Company from "./Company";
import Details from "./Details";
import JobExperience from "./JobExperience";
import JobTitle from "./JobTitle";

const Description = () => {
  return (
    <div>
      <div className="flex pl-[6.25rem] pt-9 pb-8 border-b-2">
        <JobTitle />
      </div>
      <div className="flex pl-[6.25rem] py-8   border-b-2">
        <JobExperience />
      </div>
      <div className="flex pl-[6.25rem] py-8 border-b-2">
        <Details />
      </div>
      <div className="flex pl-[6.25rem] py-8 border-b-2">
        <Company />
      </div>
    </div>
  );
};

export default Description;
