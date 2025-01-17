import ImageList from "../../components/Image/ImageList";
import { loginState } from "../../recoil/atom";
import { useRecoilState } from "recoil";

export default function MyPhotos() {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const [USER_ID] = useRecoilState(loginState);

    return (
        <>
            <ImageList url={`${BASE_URL}/users/posts/21`} page={1} />
        </>
    );
}