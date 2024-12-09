import { useState } from "react";
import img_search from "../../assets/Search.svg";
import img_left from "../../assets/Left.svg";
import img_close from "../../assets/purple-close.svg";

type Tab1Props = {
  setIsFocused: (value: boolean) => void;
};

const Tab1 = ({ setIsFocused }: Tab1Props) => (
  <div className="h-[23px] rounded-[10px] bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] p-[1px]">
    <div className="flex items-center w-full h-full bg-white rounded-[10px] px-4 overflow-hidden">
      <img src={img_search} alt="검색" className="pr-2" />
      <input
        type="text"
        placeholder="열고 싶은 타임 캡슐을 검색하세요."
        className="w-full h-[14px] my-[4px] outline-none"
        onFocus={() => setIsFocused(true)}
      />
    </div>
  </div>
);

type Tab2Props = {
  setIsFocused: (value: boolean) => void;
};

const Tab2 = ({ setIsFocused }: Tab2Props) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      return;
    }
    console.log("검색어: ", searchInput);
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchInput.trim() === "") {
        return;
      }
      console.log("Enter 키로 입력: ", searchInput);
      setIsFocused(false);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget === null || e.relatedTarget.tagName === "BUTTON") {
      return;
    }
    setIsFocused(false);
  };

  const handleClose = () => {
    setSearchInput("");
    setIsFocused(false);
  };

  return (
    <div className="flex h-[23px] rounded-[10px]">
      <img src={img_left} alt="뒤로 가기" onClick={() => setIsFocused(false)} className="cursor-pointer" />
      <div className="w-full rounded-[10px] bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] p-[1px]">
        <div className="flex items-center w-full h-full bg-white rounded-[10px] px-4 overflow-hidden">
          <input
            type="text"
            id="search-input"
            name="search"
            className="w-full h-[14px] my-[4px] outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button className="bg-black w-[15px] h-[14px] rounded-[7px] mr-[4px]" onClick={handleClose}>
            <img src={img_close} alt="취소" />
          </button>
          <button onClick={handleSearch}>
            <img src={img_search} alt="검색" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function MainSearch() {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className="px-8 mt-2">
      {isFocused ? <Tab2 setIsFocused={setIsFocused} /> : <Tab1 setIsFocused={setIsFocused} />}
    </div>
  );
}
