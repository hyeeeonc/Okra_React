import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "../../../node_modules/react-redux/es/exports";
import PostList from "../../components/post/PostList";
import { useSearchParams } from "react-router-dom";
import { listPosts } from "../../modules/posts";

const PostListContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading["posts/LIST_POSTS"],
  }));

  useEffect(() => {
    const size = 16;
    const page = parseInt(searchParams.get("page"), 10) || 1;
    // const boardId = null;

    dispatch(listPosts({ size, page }));
  }, [dispatch, searchParams]);

  // console.log(posts);

  useEffect(() => {
    if (error) {
      alert("오류가 발생했습니다. 다시 한번 시도해 주세요.");
    }
  }, [error]);

  return <PostList loading={loading} error={error} posts={posts} />;
};

export default PostListContainer;
