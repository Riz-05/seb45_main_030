// import { useRecoilValue } from "recoil";
// import { loginState } from "../state/LoginState";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../button/Button.module.css";

const GET_URL = process.env.REACT_APP_BOOKMARK_GET_API_URL;
const PATCH_URL = process.env.REACT_APP_BOOKMARK_PATCH_API_URL;
const BOOKMARK_COLOR = "red";

function ButtonBookmark({ postId }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    // const isLoginNow = useRecoilValue(loginState);
    // useEffect(() => {
    //     if (isLoginNow) {
    //         getData();
    //     }
    // }, []);

    // 로그인이 된 상태이면, 서버에 요청해서 해당 게시글의 추천,북마크 여부를 받아온 뒤 버튼의 활성화 여부를 변경함
    // 로그인 안 된 상태이면, 버튼은 비활성화(빈 아이콘) 상태임. 이때 아이콘을 클릭하면 로그인을 유도한다.

    // 사용가 요소를 추천했는지 안했는지 서버에 상태 데이터를 요청한다

    // 1 추천하지 않은 상태면,
    // 버튼의 아이콘이 비어있다.
    // 버튼을 누르면 추천했음을 서버에 요청하고(PATCH) 아이콘이 채워지고

    // 2 기존에 추천한 요소면,
    // 버튼의 아이콘이 채워져있다.
    // 버튼을 누르면 추천을 취소했음을 서버에 요청하고(PATCH) 아이콘이 비워지고

    const getData = async () => {
        // const response = await axios.get(GET_URL);
        // const data = await response.data;
        // // response.data 가 {
        // //     "user_id" : 1,
        // //     "post_id" : 1,
        // // } 이렇게 응답이 올 경우,
        // if (postId === data.post_id) {
        //     setIsBookmarked(true);
        // } else {
        //     setIsBookmarked(false);
        // }
    };

    const patchData = async () => {
        try {
            // const response = await axios.patch(PATCH_URL, {
            //     post_id: postId,
            // });
            // // 서버에서 response가 있다면
            // // response를 받고 isRecommend 상태를 서버의 추천여부로 업데이트함
            // setIsBookmarked(response);
        } catch {}
    };

    const handleRecommend = () => {
        // patchData()
        setIsBookmarked(!isBookmarked);
    };

    // svg를 import할때 오류가 발생해 컴포넌트화 했습니다.
    const BookmarkIcon = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={isBookmarked ? BOOKMARK_COLOR : "none"}
                stroke={BOOKMARK_COLOR}
                strokeWidth="64"
                strokeLinecap="round"
            >
                <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
            </svg>
        );
    };

    return (
        <button className={styles.button} onClick={handleRecommend}>
            <BookmarkIcon />
        </button>
    );
}
export default ButtonBookmark;
