const About = () => {
  return (
    <div className="text-start">
      <h4 className="mb-2 text-utlitiyText-500 font-medium text-sm">
        About the job
      </h4>
      <div className="flex flex-col gap-2">
        <p>1. Handle the UI/UX research design </p>
        <p>
          2. Work on researching on latest web applications designs & trends
        </p>
        <p>3. Work on conceptualizing and visualizing</p>
        <p>
          4. Work on creating graphics content and other graphic related works
        </p>
        <p>Benefits:</p>
        <div className="pl-3 flex items-center gap-3">
          <div className="bg-black  h-1 w-1 rounded-full"></div>
          <p>Health insurance</p>
        </div>
        <div className="pl-3 flex items-center gap-3">
          <div className="bg-black  h-1 w-1 rounded-full"></div>
          <p>Provident Fund</p>
        </div>
        <p>Schedule:</p>
        <div className="pl-3 flex items-center gap-3">
          <div className="bg-black  h-1 w-1 rounded-full"></div>
          <p>Day shift</p>
        </div>
        <p>Supplemental pay types:</p>
        <div className="pl-3 flex items-center gap-3">
          <div className="bg-black  h-1 w-1 rounded-full"></div>
          <p>Performance bonus</p>
        </div>
        <div className="pl-3 flex items-center gap-3">
          <div className="bg-black  h-1 w-1 rounded-full"></div>
          <p>Yearly bonus</p>
        </div>
        <p> Work Location: In person</p>
      </div>
    </div>
  );
};

export default About;
