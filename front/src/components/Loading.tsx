const Loading = () => {
  return (
    <div className="absolute top-0 left-0 z-30 w-full bg-white abs h-dvh item-middle dark:bg-black">
      <svg width="76" height="75" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.7734 25.9453H42.7734V10.9453H37.7734V5.94531H42.7734L52.7734 5.94531V10.9453H47.7734V25.9453ZM57.7734 15.9453V10.9453H52.7734V15.9453H57.7734ZM57.7734 30.9453H62.7734V15.9453H57.7734V30.9453ZM52.7734 35.9453H57.7734V30.9453H52.7734V35.9453ZM37.7734 35.9453L37.7734 40.9453H52.7734V35.9453H37.7734ZM22.7734 30.9453V35.9453H32.7734H37.7734V30.9453H42.7734V25.9453H37.7734V30.9453H32.7734V15.9453H37.3307L37.1198 17.5225L34.0996 18.05L37.1474 18.5823L37.5972 21.9453L38.0468 18.5833L41.0996 18.0501L38.0765 17.5221L37.7734 15.2561L37.7734 10.9453H32.7734V15.9453H27.7734V30.9453H22.7734ZM17.7734 25.9453V30.9453H22.7734V25.9453H17.7734ZM17.7734 10.9453H12.7734V25.9453H17.7734V10.9453ZM22.7734 5.94531V0.945312H37.7734V5.94531H22.7734ZM22.7734 5.94531H17.7734V10.9453H22.7734V5.94531Z"
          className="fill-black dark:fill-white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.5166 69.574V69.9366H27.4056H26.2946H25.1836H24.0726H22.9616H21.8506H20.7395V68.8256V67.7146H21.8506H22.9616H24.0726H25.1836H26.2946V66.6036V65.4926H25.1836H24.0726H22.9616H21.8506H20.7395V64.3816V63.2706H21.8506H22.9616H24.0726H25.1836H26.2946V62.1596H27.4056H28.5166V63.2706V64.3816V65.4926V66.6036V67.631C28.5767 67.4408 28.651 67.2414 28.7394 67.033C29.0159 66.3615 29.4307 65.6603 29.9837 64.9295C30.4183 64.3765 30.9713 63.7741 31.6428 63.1223C32.3144 62.4705 33.0452 61.878 33.8352 61.3447C34.6252 60.7917 35.4153 60.3966 36.2053 60.1596C36.4226 60.1004 36.6497 60.0609 36.8868 60.0411C37.1238 60.0016 37.4102 59.9819 37.7459 59.9819C38.0619 59.9819 38.22 60.0214 38.22 60.1004C38.22 60.1991 38.0817 60.2781 37.8052 60.3374C37.5682 60.3966 37.2818 60.4954 36.946 60.6336C36.6102 60.7719 36.3041 60.92 36.0276 61.078C35.4548 61.3941 34.8524 61.8286 34.2203 62.3816C33.5883 62.9149 32.9662 63.5272 32.3539 64.2185C31.6823 64.969 31.1293 65.7097 30.6948 66.4405C30.2602 67.1515 29.9739 67.7441 29.8356 68.2181C29.7961 68.3761 29.7763 68.5143 29.7763 68.6329C29.7763 68.9094 29.885 69.0476 30.1022 69.0476C30.2405 69.0476 30.4281 68.9884 30.6651 68.8699C30.9022 68.7316 31.2083 68.5045 31.5836 68.1885C32.3341 67.5564 33.0847 66.8355 33.8352 66.0257C34.6055 65.2159 35.2968 64.3765 35.9091 63.5074C36.3831 62.8359 36.9361 62.1249 37.5682 61.3743C38.2002 60.604 38.8619 59.8633 39.5532 59.1523C40.2444 58.4215 40.916 57.7598 41.5678 57.1673C42.2393 56.5748 42.8417 56.1008 43.375 55.7452C43.9873 55.3305 44.4119 55.0934 44.6489 55.0342C44.9057 54.9749 45.123 54.9453 45.3007 54.9453C45.123 55.0836 44.7378 55.4391 44.1453 56.0119C43.5725 56.5649 42.8812 57.2661 42.0714 58.1154C41.2814 58.9647 40.4518 59.8831 39.5828 60.8707C38.7335 61.8582 37.9533 62.8458 37.2423 63.8333C36.6892 64.5839 36.1658 65.364 35.6721 66.1738C35.1783 66.9639 34.8524 67.5959 34.6944 68.0699C34.6351 68.228 34.5956 68.3662 34.5759 68.4847C34.5561 68.6032 34.5462 68.7119 34.5462 68.8106C34.5462 69.1266 34.6746 69.2846 34.9314 69.2846C35.1091 69.2846 35.3165 69.2155 35.5536 69.0773C35.8103 68.9192 36.0671 68.7415 36.3238 68.544C36.6596 68.2675 36.9855 67.9613 37.3015 67.6255C37.6373 67.2898 37.9336 66.9639 38.1903 66.6479C38.1944 66.6479 38.1984 66.648 38.2022 66.6483L38.2025 66.6478C38.5383 65.9762 38.9629 65.3146 39.4765 64.6628C39.99 63.9913 40.5134 63.3691 41.0467 62.7963C41.58 62.2038 42.0441 61.7199 42.4391 61.3446C42.6109 61.1729 42.7847 61.0218 42.9606 60.8914V59.9375H44.0716H45.1826H46.2936H47.4046H48.5156H49.6266H50.7376V61.0485V62.1595H49.6266H48.5156H47.4046H46.2936H45.1826V63.2705V64.3815V65.4925V66.6035V67.7145V68.8255V69.9365H44.0716H42.9606V68.8255V67.7145V67.491C42.296 68.2415 41.6877 68.8393 41.1356 69.2846C40.543 69.7586 39.8814 69.9956 39.1506 69.9956C38.6173 69.9956 38.242 69.8573 38.0248 69.5808C37.7877 69.2846 37.6692 68.9192 37.6692 68.4846C37.6692 68.228 37.7049 67.9635 37.7763 67.691C37.6141 67.8588 37.4361 68.0345 37.2423 68.2181C36.8868 68.5736 36.5312 68.8896 36.1757 69.1661C35.9189 69.3834 35.6227 69.571 35.2869 69.729C34.9511 69.887 34.6252 69.9661 34.3092 69.9661C33.855 69.9661 33.5291 69.8574 33.3315 69.6402C33.1538 69.4229 33.0649 69.1464 33.0649 68.8106C33.0649 68.4748 33.134 68.1094 33.2723 67.7144C33.4106 67.3194 33.5784 66.9343 33.7759 66.559C33.4402 66.9145 33.0748 67.2997 32.6798 67.7144C32.2847 68.1094 32.028 68.3563 31.9095 68.4551C31.4749 68.8501 31.0602 69.1958 30.6651 69.492C30.2701 69.7685 29.8553 69.9266 29.4208 69.9661C28.9958 69.989 28.6944 69.8584 28.5166 69.574ZM50.7376 62.1595H51.8486H52.9596V63.2705V64.3815V65.4925V66.6035V67.7145V68.8255V69.9365H51.8486H50.7376V68.8255V67.7145V66.6035V65.4925V64.3815V63.2705V62.1595ZM26.2946 62.1596V61.0486V59.9376H25.1836H24.0726H22.9616H21.8506H20.7395H19.6285H18.5175V61.0486V62.1596H19.6285H20.7395H21.8506H22.9616H24.0726H25.1836H26.2946ZM18.5733 65.4926C18.1057 64.708 17.4796 64.0819 16.6951 63.6142C15.8735 63.1244 14.9491 62.8795 13.922 62.8795C12.9108 62.8795 11.9864 63.1244 11.149 63.6142C10.3273 64.104 9.6716 64.7677 9.18177 65.6051C8.818 66.2478 8.59381 66.9509 8.5092 67.7145H7.77701H6.66601H5.55501H4.44401H3.333H2.222V66.6035V65.4925V64.3815V63.2705V62.1595V61.0485V59.9375V58.8265V57.7155V56.6045H1.111H0V57.7155V58.8265V59.9375V61.0485V62.1595V63.2705V64.3815V65.4925V66.6035V67.7145V68.8255V69.9365H1.111H2.222H3.333H4.44401H5.55501H6.66601H7.77701H8.66403C8.78232 70.3771 8.9549 70.7978 9.18177 71.1986C9.6716 72.0203 10.3273 72.676 11.149 73.1658C11.9864 73.6557 12.9108 73.9006 13.922 73.9006C14.9491 73.9006 15.8735 73.6557 16.6951 73.1658C17.5167 72.676 18.1646 72.0203 18.6386 71.1986C19.1284 70.3612 19.3734 69.4368 19.3734 68.4256C19.3734 68.183 19.3601 67.946 19.3336 67.7146H19.6285H20.7395V66.6036V65.4926H19.6285H18.5733ZM42.9606 66.9091V66.6035V65.4925V64.3815V63.2705V62.5215C42.3153 63.3195 41.6773 64.1617 41.0467 65.0479C40.9874 65.1269 40.8492 65.3245 40.6319 65.6405C40.4146 65.9565 40.1678 66.3219 39.8912 66.7367C39.6345 67.1514 39.4073 67.5563 39.2098 67.9514C39.0321 68.3464 38.9432 68.6624 38.9432 68.8994C38.9432 69.2747 39.1407 69.4623 39.5357 69.4623C39.832 69.4623 40.148 69.3537 40.4838 69.1364C40.8393 68.9192 41.1948 68.6525 41.5503 68.3365C41.9059 68.0205 42.2219 67.7143 42.4984 67.4181C42.6778 67.2267 42.8319 67.0571 42.9606 66.9091ZM58.5123 74.3805H59.6233H60.7343V73.2695V72.1585H61.8453H62.9563V71.0475V69.9365V68.8255V67.7145V66.6035V65.4925V64.3815V63.2705V62.1595V61.0485V59.9375H61.8453H60.7343H59.6233H58.5123H57.4013H56.2903V61.0485V62.1595H55.1793H54.0683V63.2705V64.3815H55.1793H56.2903V65.4925V66.6035H57.4013H58.5123H59.6233H60.7343V67.7145V68.8255V69.9365V71.0475V72.1585H59.6233H58.5123H57.4013H56.2903V71.0475V69.9365H55.1793H54.0683V71.0475V72.1585H55.1793H56.2903V73.2695V74.3805H57.4013H58.5123ZM56.2903 64.3815V63.2705V62.1595H57.4013H58.5123H59.6233H60.7343V63.2705V64.3815H59.6233H58.5123H57.4013H56.2903ZM73.3254 69.9365H74.4364H75.5474V68.8255V67.7145H74.4364H73.3254V68.8255V69.9365ZM71.1048 69.9365H69.9938V68.8255V67.7145H71.1048H72.2158V68.8255V69.9365H71.1048ZM66.6605 69.9365H67.7715H68.8825V68.8255V67.7145H67.7715H66.6605V68.8255V69.9365ZM13.922 73.3081C14.7753 73.3081 15.4626 73.0947 15.9841 72.6681C16.5055 72.2257 16.8847 71.6411 17.1217 70.9142C17.3587 70.1716 17.4772 69.342 17.4772 68.4256C17.4772 67.4775 17.3587 66.6322 17.1217 65.8895C16.8847 65.1469 16.5055 64.5623 15.9841 64.1356C15.4626 63.6932 14.7753 63.472 13.922 63.472C13.0688 63.472 12.3815 63.6932 11.86 64.1356C11.3386 64.5623 10.9594 65.1469 10.7224 65.8895C10.4853 66.6322 10.3668 67.4775 10.3668 68.4256C10.3668 69.342 10.4853 70.1716 10.7224 70.9142C10.9594 71.6411 11.3386 72.2257 11.86 72.6681C12.3815 73.0947 13.0688 73.3081 13.922 73.3081ZM44.987 58.3227C44.987 58.6387 45.1845 58.7967 45.5796 58.7967C45.8956 58.777 46.1918 58.6387 46.4684 58.3819C46.7449 58.1252 46.8831 57.8486 46.8831 57.5524C46.8831 57.2364 46.6955 57.0784 46.3202 57.0784C46.0832 57.0784 45.8363 57.1771 45.5796 57.3746C45.3426 57.5524 45.1747 57.7598 45.0759 57.9968C45.0167 58.1153 44.987 58.2239 44.987 58.3227Z"
          className="fill-black dark:fill-white"
        />
      </svg>
    </div>
  );
};

export default Loading;
