import styled from 'styled-components'
import palette from '../../lib/styles/palette'
import Responsive from '../common/Responsive'
import { useEffect } from 'react'
import '../../../node_modules/quill/dist/quill.snow.css'

const PostViewerBlock = styled.div`
  width: calc;
  margin: 2rem auto;
  padding: 0 20px;

  @media (max-width: 1320px) {
    width: 1024px;
  }

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;

    width: calc(100vw - 2rem);
  }
`

const PostHead = styled.div`
  border-bottom: 5px solid ${palette.gray[2]};
  padding: 3rem 0;
  margin-bottom: 3rem;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-family: 'MICEGothic';

    font-size: 3rem;
    line-height: 1.5;
    margin: 0;

    @media (max-width: 767px) {
      font-size: 2rem;
    }

    @media (max-width: 500px) {
      font-size: 1.4rem;
    }
  }
`

const PostHeadThumbContainer = styled.div`
  margin: 0 30px;

  @media (max-width: 500px) {
    margin: 0;
  }

  img {
    width: 200px;

    @media (max-width: 767px) {
      width: 150px;
    }
  }
`

const PostContainer = styled.div`
  font-size: 1rem;
  padding-right: 20px;
  color: ${palette.gray[8]};
  img {
    max-width: 100%;
  }
`
const PostViewer = ({ post, error, postId, loading, actionButtons }) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      if (error.response.status === 404) {
        return <PostViewerBlock> 존재하지 않는 포스트입니다. </PostViewerBlock>
      } else if (error.response.status === 401) {
        return <PostViewerBlock> 권한이 없습니다. </PostViewerBlock>
      } else {
        return <PostViewerBlock> Error! </PostViewerBlock>
      }
    }
  }, [])

  if (loading || !post) {
    return null
  }

  const { title, thumbnail, content } = post.data

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <PostHeadThumbContainer
          dangerouslySetInnerHTML={{ __html: thumbnail }}
        />
      </PostHead>
      {actionButtons}
      <PostContainer
        className="view ql-editor"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PostViewerBlock>
  )
}

export default PostViewer
