import client from "./client";

export const readPost = (id) => {
  return client.get(`api/v1/posts_enabled/${id}`, {});
};

export const listPosts = ({ size, page, boardId }) => {
  return client.get("api/v1/posts_enabled", {
    params: { size, page, boardId },
  });
};

// export const listPostsThumb = () => {
//   return client.get("api/v1/thumbnails");
// };
