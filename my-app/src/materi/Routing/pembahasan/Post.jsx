import { useNavigate, useParams } from "react-router";

const Post = () => {
  let { id } = useParams();
  //   dynamic router biasanya digunakan untuk loopiing
  //   useHistory sudah tidak digunakan lagi diganti dengan usenavigate
  const back = useNavigate();

  return (
    <div>
      <h3>Post ke - {id}</h3>
      <p>Ini post ke 1</p>
      <button type="submit" onClick={() => back("/")}>
        kembali{" "}
      </button>
    </div>
  );
};

export default Post;
