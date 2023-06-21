import { useSearchParams, Navigate, useNavigate } from "react-router-dom";

const Edit = () => {
  const Navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("who");
  console.log(id);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "mk" })}>QS 변경</button>
      <button
        onClick={() => {
          Navigate("/home");
        }}
      >
        홈으로
      </button>
      <button
        onClick={() => {
          Navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
