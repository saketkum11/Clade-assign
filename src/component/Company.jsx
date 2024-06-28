const Company = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <img src="Rectangle43.png" alt="" />
        <span className="text-xl font-medium">Atlassian</span>
      </div>
      <div className="flex max-w-3xl w-full gap-12">
        <ul className="flex-1 flex flex-col gap-4 items-start">
          <li className="text-start flex flex-col gap-2">
            <p className="text-utlitiyText-500 text-sm">Company size</p>
            <p className="text-base font-medium">1k - 2k Employees</p>
          </li>
          <li className="text-start flex flex-col gap-2">
            <p className="text-utlitiyText-500 text-sm">Sector</p>
            <p className="text-base font-medium">
              Information Technology, Infrastructure
            </p>
          </li>
          <li className="text-start flex flex-col gap-2">
            <p className="text-utlitiyText-500 text-sm">Founded In</p>
            <p className="text-base font-medium">2019</p>
          </li>
        </ul>
        <ul className="flex-1 flex flex-col gap-4 items-start">
          <li className="text-start flex flex-col gap-2">
            <p className="text-utlitiyText-500 text-sm">Type</p>
            <p className="text-base font-medium">Private</p>
          </li>
          <li className="text-start flex flex-col gap-2">
            <p className="text-utlitiyText-500 text-sm">Funding</p>
            <p className="text-base font-medium">Bootstrapped</p>
          </li>
          <li className="text-start flex flex-col gap-2">
            <p className="text-utlitiyText-500 text-sm">Founded By</p>
            <p className="text-base font-medium">
              Scott Farquhar, Mike Cannon-Brookes
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
