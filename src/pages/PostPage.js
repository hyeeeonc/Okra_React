import PostViewerContainer from "../containers/post/PostViewerContainer";
import styled from "styled-components";
import MainResponsive from "../components/common/MainResponsive";

const Spacer = styled.div`
  height: 1rem;
`;

const PostPage = () => {
  return (
    <>
      <MainResponsive>
        <Spacer />
        <PostViewerContainer />
      </MainResponsive>
    </>
  );
};

export default PostPage;
