import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MySlideHeader from "./MySlideHeader";
import MySlideContainer from "./MySlideContainer";
import { CHANNEL_ID_POST, CHANNEL_ID_TIMECAPSULE, getUserPosts } from "../../apis/apis";
import { tokenService } from "../../utils/token";
import Loading from "../../components/Loading"; // 로딩 컴포넌트

interface PostType {
  _id: string;
  title: string;
  image?: string;
  channel?: {
    _id: string;
  };
  likes: Array<any>;
  comments: Array<any>;
  createdAt: string;
  updatedAt: string;
}
interface ParsedCapsule {
  title: string;
  content: string;
  closeAt: string;
  image: string[];
}
interface CapsuleItem {
  id: string;
  title: string;
  content: string;
  image?: string;
  closeAt: Date;
}

// 게시글 내용 가져오기 유틸 함수
const getContent = (jsonString: string) => {
  try {
    const parsedData = JSON.parse(jsonString);
    return parsedData.content ? parsedData.content.replace(/\\\\n/g, "\n").replace(/\\n/g, "\n") : jsonString;
  } catch (error) {
    return jsonString;
  }
};

function ProfileContainer() {
  const [selectedTab, setSelectedTab] = useState("capsules");
  const [postItems, setPostItems] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const handlePostClick = (postId: string) => {
    navigate(`/detail/${postId}`);
  };

  const user = tokenService.getUser();
  const userAuthorId = user._id;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getUserPosts(userAuthorId);
        setPostItems(Array.isArray(posts) ? posts : Object.values(posts));
      } catch (error) {
        console.error("포스트 불러오기 실패", error);
      } finally {
        setLoading(false); // 데이터 불러오기 완료 후 로딩 상태 종료
      }
    };
    fetchPosts();
  }, [userAuthorId]);

  const articleItems = postItems.filter((post) => post.channel?._id === CHANNEL_ID_POST);
  const capsuleItems = postItems.filter((post) => post.channel?._id === CHANNEL_ID_TIMECAPSULE);

  const categorizeCapsules = () => {
    const now = new Date();
    return capsuleItems.reduce<{ opened: CapsuleItem[]; waiting: CapsuleItem[] }>(
      (acc, item) => {
        try {
          const parsed: ParsedCapsule = JSON.parse(item.title);
          const closeAt = new Date(parsed.closeAt);
          const capsuleItem: CapsuleItem = {
            id: item._id,
            title: parsed.title,
            content: parsed.content?.replace(/\\n/g, "\n"),
            image: item.image ?? parsed.image[0],
            closeAt,
          };
          if (closeAt > now) {
            acc.waiting.push(capsuleItem);
          } else {
            acc.opened.push(capsuleItem);
          }
        } catch (error) {
          console.error("Error parsing capsule data:", error);
        }
        return acc;
      },
      { opened: [], waiting: [] },
    );
  };

  const handleShowAllClick = (type: "open" | "close", tabType: "capsules" | "alarms") => {
    const { opened, waiting } = categorizeCapsules();
    const items = type === "open" ? opened : waiting;
    navigate(tabType === "capsules" ? "/capsule-list" : "/alarm-list", {
      state: {
        title: type === "open" ? "공개 완료" : "공개 대기",
        items,
      },
    });
  };

  return (
    <div className="profile-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex mb-6 justify-evenly">
            {[
              {
                tab: "capsules",
                icon: (
                  <svg
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.81481 8.53828L9.36626 4.92394C11.2507 2.2545 14.9423 1.61812 17.6118 3.50256C20.2812 5.38699 20.9176 9.07864 19.0332 11.7481L16.3678 15.5238L6.81481 8.53828ZM5.94962 9.76388L3.50283 13.2299C1.6184 15.8994 2.25478 19.591 4.92422 21.4755C7.59367 23.3599 11.2853 22.7235 13.1698 20.0541L15.5026 16.7494L5.94962 9.76388ZM4.05916 22.7009C0.712933 20.3387 -0.0847873 15.7111 2.27741 12.3649L8.14084 4.05888C10.503 0.712654 15.1306 -0.0850623 18.4769 2.27713C21.8231 4.63933 22.6208 9.26692 20.2586 12.6131L14.3952 20.9191C12.033 24.2654 7.40539 25.0631 4.05916 22.7009Z"
                    />
                  </svg>
                ),
                label: "내 캡슐",
              },
              {
                tab: "articles",
                icon: (
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M19.7207 6.3335V19.8679C19.7217 20.0047 19.6957 20.1403 19.6442 20.2671C19.5927 20.3938 19.5168 20.5092 19.4208 20.6066C19.3247 20.704 19.2104 20.7815 19.0844 20.8348C18.9584 20.888 18.8231 20.9159 18.6863 20.9168H2.00508C1.73093 20.9168 1.46799 20.808 1.27403 20.6142C1.08008 20.4205 0.970979 20.1576 0.970703 19.8835V1.11683C0.970703 0.557455 1.43841 0.0834961 2.01445 0.0834961H13.4676L19.7207 6.3335ZM17.6374 7.37516H12.429V2.16683H3.05404V18.8335H17.6374V7.37516ZM6.17904 5.29183H9.30404V7.37516H6.17904V5.29183ZM6.17904 9.4585H14.5124V11.5418H6.17904V9.4585ZM6.17904 13.6252H14.5124V15.7085H6.17904V13.6252Z" />
                  </svg>
                ),
                label: "내 일반글",
              },
              {
                tab: "alarms",
                icon: (
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M21.763 18.8335H0.929688V16.7502H1.97135V9.49079C1.97135 4.29495 6.16927 0.0834961 11.3464 0.0834961C16.5234 0.0834961 20.7214 4.29495 20.7214 9.49079V16.7502H21.763V18.8335ZM4.05469 16.7502H18.638V9.49079C18.638 5.446 15.3734 2.16683 11.3464 2.16683C7.31927 2.16683 4.05469 5.446 4.05469 9.49079V16.7502ZM8.74219 19.8752H13.9505C13.9505 20.5658 13.6762 21.2282 13.1878 21.7166C12.6994 22.205 12.037 22.4793 11.3464 22.4793C10.6557 22.4793 9.99331 22.205 9.50493 21.7166C9.01655 21.2282 8.74219 20.5658 8.74219 19.8752V19.8752Z" />
                  </svg>
                ),
                label: "예약글",
              },
            ].map(({ tab, icon, label }) => (
              <div
                key={tab}
                className={`tab flex flex-col items-center cursor-pointer ${
                  selectedTab === tab ? "text-primary dark:text-secondary" : "text-black dark:text-white"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <div className="w-[25px] h-[25px] mb-2">{icon}</div>
                <span className="font-semibold font-pretendard">{label}</span>
              </div>
            ))}
          </div>
          <div className="px-[30px] mt-[20px] mb-[30px]">
            <hr className="border-t border-gray-200 dark:border-gray-400" />
          </div>
          <div className="tab-content">
            {selectedTab === "capsules" &&
              (() => {
                const { opened, waiting } = categorizeCapsules();
                return (
                  <>
                    <MySlideHeader
                      title="공개완료"
                      count={opened.length}
                      showAllText="전체보기"
                      onShowAllClick={() => handleShowAllClick("open", "capsules")}
                    />
                    <MySlideContainer
                      uniqueKey="open"
                      items={opened}
                      onItemClick={(item) => handlePostClick(item.id)}
                    />
                    <div className="mt-8 mb-8">
                      <MySlideHeader
                        title="공개대기"
                        count={waiting.length}
                        showAllText="전체보기"
                        onShowAllClick={() => handleShowAllClick("close", "capsules")}
                      />
                      <MySlideContainer uniqueKey="close" items={waiting} />
                    </div>
                  </>
                );
              })()}
            {selectedTab === "articles" && (
              <div className="px-[30px] h-[500px]">
                <h2 className="text-[16px] font-pretendard flex items-center mb-[10px] text-black dark:text-white">
                  <span className="font-semibold text-black dark:text-white">일반글</span>
                  <span className="ml-1 font-semibold">{articleItems.length}</span>
                </h2>
                <div className="grid grid-cols-3 gap-[10px] mb-[30px]">
                  {articleItems.map((item, index) => {
                    const parsed = JSON.parse(item.title);
                    const images = parsed.image;
                    const textContent = getContent(item.title);
                    return (
                      <div
                        key={item._id}
                        className="flex-col w-full cursor-pointer"
                        onClick={() => handlePostClick(item._id)}
                      >
                        {item.image ? (
                          <img
                            className="object-cover w-full aspect-[1] bg-black rounded-[10px] item-middle"
                            src={item.image}
                            alt={`일반 포스트 이미지 ${index}`}
                          />
                        ) : images && images.length > 0 ? (
                          <img
                            className="object-cover w-full aspect-[1] bg-black rounded-[10px] item-middle"
                            src={images[0]}
                            alt={`일반 포스트 이미지 ${index}`}
                          />
                        ) : (
                          <div className="w-full aspect-[1] bg-gray-100 rounded-[10px] flex items-start justify-start p-[10px] border border-gray-200">
                            <p className="text-black text-[14px] font-pretendard font-regular break-words">
                              {textContent}
                            </p>
                          </div>
                        )}
                        <div className="mt-2 font-pretendard font-regular text-left text-[14px]">
                          <p className="text-black dark:text-white">{parsed.title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {selectedTab === "alarms" && (
              <>
                <div className="mt-8 text-center text-gray-500 dark:text-gray-300 h-[500px]">
                  알람 기능은 준비 중입니다.
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileContainer;
