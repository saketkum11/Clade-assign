const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center pl-10 pr-6 py-4">
          <div className="">
            <div className="py-[1rem] bg-secondary px-7 text-primary ">
              <span className="font-bold text-xl ">Logo</span>
            </div>
          </div>
          <div className="text-quaternary  max-w-lg w-full flex justify-between gap-16  p-2 border rounded-[3rem] items-center">
            <div className="bg-primary inline-flex gap rounded-[3rem] items-start border-2 cursor-pointer border-tretiary p-4">
              <span className="flex gap-3 items-center">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 21.5V7.5C8 6.57003 8 6.10504 8.10222 5.72354C8.37962 4.68827 9.18827 3.87962 10.2235 3.60222C10.605 3.5 11.07 3.5 12 3.5C12.93 3.5 13.395 3.5 13.7765 3.60222C14.8117 3.87962 15.6204 4.68827 15.8978 5.72354C16 6.10504 16 6.57003 16 7.5V21.5M5.2 21.5H18.8C19.9201 21.5 20.4802 21.5 20.908 21.282C21.2843 21.0903 21.5903 20.7843 21.782 20.408C22 19.9802 22 19.4201 22 18.3V10.7C22 9.57989 22 9.01984 21.782 8.59202C21.5903 8.21569 21.2843 7.90973 20.908 7.71799C20.4802 7.5 19.9201 7.5 18.8 7.5H5.2C4.07989 7.5 3.51984 7.5 3.09202 7.71799C2.71569 7.90973 2.40973 8.21569 2.21799 8.59202C2 9.01984 2 9.57989 2 10.7V18.3C2 19.4201 2 19.9802 2.21799 20.408C2.40973 20.7843 2.71569 21.0903 3.09202 21.282C3.51984 21.5 4.0799 21.5 5.2 21.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-xl text-white">Jobs</span>
              </span>
            </div>
            <div>
              <div className="flex gap-2 cursor-pointer">
                <div className="relative">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.3C1 4.61984 1 3.77976 1.32698 3.13803C1.6146 2.57354 2.07354 2.1146 2.63803 1.82698C3.27976 1.5 4.11984 1.5 5.8 1.5H14.2C15.8802 1.5 16.7202 1.5 17.362 1.82698C17.9265 2.1146 18.3854 2.57354 18.673 3.13803C19 3.77976 19 4.61984 19 6.3V11.7C19 13.3802 19 14.2202 18.673 14.862C18.3854 15.4265 17.9265 15.8854 17.362 16.173C16.7202 16.5 15.8802 16.5 14.2 16.5H7.68375C7.0597 16.5 6.74767 16.5 6.44921 16.5613C6.18443 16.6156 5.9282 16.7055 5.68749 16.8285C5.41617 16.9671 5.17252 17.162 4.68521 17.5518L2.29976 19.4602C1.88367 19.7931 1.67563 19.9595 1.50054 19.9597C1.34827 19.9599 1.20422 19.8906 1.10923 19.7716C1 19.6348 1 19.3684 1 18.8355V6.3Z"
                      stroke="#B0B0B0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute -top-1 -right-1 h-[6px] w-[6px] rounded-full bg-primary"></div>
                </div>
                <span>Messages</span>
              </div>
            </div>
            <div>
              <span className="flex gap-2 pr-6 cursor-pointer">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5295 7.85186C11.9571 8.25995 11.2566 8.5 10.5 8.5C8.567 8.5 7 6.933 7 5C7 3.067 8.567 1.5 10.5 1.5C11.753 1.5 12.8522 2.15842 13.4705 3.14814M5 19.5872H7.61029C7.95063 19.5872 8.28888 19.6277 8.61881 19.7086L11.3769 20.3789C11.9753 20.5247 12.5988 20.5388 13.2035 20.4214L16.253 19.8281C17.0585 19.6712 17.7996 19.2854 18.3803 18.7205L20.5379 16.6217C21.154 16.0234 21.154 15.0524 20.5379 14.4531C19.9832 13.9134 19.1047 13.8527 18.4771 14.3103L15.9626 16.1449C15.6025 16.4081 15.1643 16.5498 14.7137 16.5498H12.2855L13.8311 16.5498C14.7022 16.5498 15.4079 15.8633 15.4079 15.0159V14.7091C15.4079 14.0055 14.9156 13.392 14.2141 13.2219L11.8286 12.6417C11.4404 12.5476 11.0428 12.5 10.6431 12.5C9.67833 12.5 7.93189 13.2988 7.93189 13.2988L5 14.5249M19 6C19 7.933 17.433 9.5 15.5 9.5C13.567 9.5 12 7.933 12 6C12 4.067 13.567 2.5 15.5 2.5C17.433 2.5 19 4.067 19 6ZM1 14.1L1 19.9C1 20.4601 1 20.7401 1.10899 20.954C1.20487 21.1422 1.35785 21.2951 1.54601 21.391C1.75992 21.5 2.03995 21.5 2.6 21.5H3.4C3.96005 21.5 4.24008 21.5 4.45399 21.391C4.64215 21.2951 4.79513 21.1422 4.89101 20.954C5 20.7401 5 20.4601 5 19.9V14.1C5 13.5399 5 13.2599 4.89101 13.046C4.79513 12.8578 4.64215 12.7049 4.45399 12.609C4.24008 12.5 3.96005 12.5 3.4 12.5L2.6 12.5C2.03995 12.5 1.75992 12.5 1.54601 12.609C1.35785 12.7049 1.20487 12.8578 1.10899 13.046C1 13.2599 1 13.5399 1 14.1Z"
                    stroke="#B0B0B0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl">Payments</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div>
              <span className="relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6666 28H13.3333M23.9999 10.6667C23.9999 8.54496 23.1571 6.51012 21.6568 5.00983C20.1565 3.50954 18.1217 2.66669 15.9999 2.66669C13.8782 2.66669 11.8434 3.50954 10.3431 5.00983C8.8428 6.51012 7.99994 8.54496 7.99994 10.6667C7.99994 14.7869 6.96057 17.608 5.7995 19.4739C4.82011 21.0479 4.33042 21.8348 4.34838 22.0544C4.36826 22.2975 4.41976 22.3902 4.61564 22.5355C4.79256 22.6667 5.59006 22.6667 7.18508 22.6667H24.8148C26.4098 22.6667 27.2073 22.6667 27.3842 22.5355C27.5801 22.3902 27.6316 22.2975 27.6515 22.0544C27.6695 21.8348 27.1798 21.0479 26.2004 19.4739C25.0393 17.608 23.9999 14.7869 23.9999 10.6667Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="h-[6px] w-[6px] bg-primary rounded-full absolute top-0 right-0"></div>
              </span>
            </div>
            <div className="flex gap-2">
              <span>
                <img src="Rectangle5.png" alt="" />
              </span>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
