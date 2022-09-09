import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "../../../node_modules/react-redux/es/exports";
import { useParams } from "react-router";
import { readPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import { useNavigate } from "react-router-dom";

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
  }));

  useEffect(() => {
    if (postId != "board.html") {
      dispatch(readPost(postId));
    }
  }, [dispatch, postId]);

  useEffect(() => {
    if (error) {
      alert("오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }, [error]);

  return (
    <PostViewer post={post} loading={loading} error={error} postId={postId} />
  );
};

export default PostViewerContainer;
