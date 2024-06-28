const JobTitle = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <p className="text-4xl font-semibold text-[#3D3D3D]">
          Senior Product Manager
        </p>
        <div className="flex items-center gap-3">
          <div className="bg-grayDot h-1 w-1 rounded-full"></div>
          <span className="text-normalText">posted 2 days ago</span>
          <div className="flex items-center gap-3 px-[8px] py-[2px] bg-utilitySuccess-50 border-utilitySuccess-200 border-2 rounded-3xl">
            <div className="bg-utilitySuccess-300 h-[6px] w-[6px] rounded-full"></div>
            <span className="text-xs leading-[18px] font-normal text-utilitySuccess-700">
              Open
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-[#3D3D3D]">
        <div className="flex gap-2 items-center">
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z"
                stroke="#5D5D5D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22.5C16 18.5 20 14.9183 20 10.5C20 6.08172 16.4183 2.5 12 2.5C7.58172 2.5 4 6.08172 4 10.5C4 14.9183 8 18.5 12 22.5Z"
                stroke="#5D5D5D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Delaware, USA</span>
        </div>
        <div className="bg-grayDot h-1 w-1 rounded-full"></div>
        <div className="flex items-center gap-3">
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5.5C13 6.60457 10.5376 7.5 7.5 7.5C4.46243 7.5 2 6.60457 2 5.5M13 5.5C13 4.39543 10.5376 3.5 7.5 3.5C4.46243 3.5 2 4.39543 2 5.5M13 5.5V7M2 5.5V17.5C2 18.6046 4.46243 19.5 7.5 19.5M7.5 11.5C7.33145 11.5 7.16468 11.4972 7 11.4918C4.19675 11.4 2 10.5433 2 9.5M7.5 15.5C4.46243 15.5 2 14.6046 2 13.5M22 12C22 13.1046 19.5376 14 16.5 14C13.4624 14 11 13.1046 11 12M22 12C22 10.8954 19.5376 10 16.5 10C13.4624 10 11 10.8954 11 12M22 12V19.5C22 20.6046 19.5376 21.5 16.5 21.5C13.4624 21.5 11 20.6046 11 19.5V12M22 15.75C22 16.8546 19.5376 17.75 16.5 17.75C13.4624 17.75 11 16.8546 11 15.75"
                stroke="#5D5D5D"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>$300k-$400k</span>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
