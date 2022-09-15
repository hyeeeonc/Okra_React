import styled from 'styled-components'
import MainResponsive from '../common/MainResponsive'
import Responsive from '../common/Responsive'
import palette from '../../lib/styles/palette'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const PostListBlock = styled(Responsive)`
  // margin-top: 3rem;
  // padding-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: initial;
  background-color: #181818;
`

const ErrorBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15rem;
  padding-bottom: 7rem;

  .logo {
    font-size: 3.2rem;
    letter-spacing: -3px;

    .logof {
      font-weight: 900;
      text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
        1px 1px 0 #fff;
    }

    .logob {
      font-weight: 600;
      font-style: italic;
    }
  }
`

const PostItemThumbnail = styled.div`
  // position: relative;
  max-width: 320px;
  text-align: center;

  transition: 0.5s ease;

  :hover {
    filter: hue-rotate(20deg);
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 1320px) {
    max-width: 235px;
    margin: 0 47, 5px;
  }

  @media (max-width: 767px) {
    max-width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    max-width: calc(100vw - 60px);
  }
`

const PostItemBlock = styled.div`
  font-family: 'MICEGothic';


  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 320px;
    margin: 0 60px;

  @media (max-width: 1320px) {
    width: 235px;
    margin: 0 53.16px;
  }

  @media (max-width: 1024px) {
    margin: 0 74.5px;
  }

  @media (max-width: 767px) {
    width: 200px;
    margin: 0 calc((100vw - 400px) / 4);
  }

  @media (max-width: 500px) {
    width: calc(100vw - 60px);
    margin: 0 30px;
  }
  //   width: 150px;
  //   margin: 0 calc((100vw - 300px) / 4);
  // }

  // @media (max-width: 319px) {
  //   width: 200px;
  //   margin: 0 calc((100vw - 200px) / 2);
  // }

  a {
    text-decoration: none;
  }


  h6 {
    font-size: 1rem;
    color: #FBB03B;
    margin: 1.4rem 0 1.4rem 0;

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }

    @media (max-width: 500px) {
      0.6rem;
    }

  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    color: white;

    @media (max-width: 767px) {
      font-size: 1.6rem;
    }

    @media (max-width: 500px) {
      font-size: 1.6rem;
    }


    &: hoaver {
      color: ${palette.gray[6]};
    }
  }
`

const PostItem = ({ post }) => {
  const {
    postId,
    boardId,
    title,
    thumbnail,
    content,
    addedDate,
    status,
    selected,
    views,
  } = post

  let events

  const eventSetting = () => {
    if (boardId === 1) {
      events = 'Festival'
    }
    if (boardId === 2) {
      events = 'Concerts'
    }
    if (boardId === 3) {
      events = 'Party'
    }
    return events
  }
  eventSetting()

  // console.log(thumbnail);
  return (
    <PostItemBlock>
      <Link to={`/${postId}`}>
        <PostItemThumbnail
          dangerouslySetInnerHTML={{ __html: thumbnail }}
        ></PostItemThumbnail>
      </Link>
      <h6>{events}</h6>

      <Link to={`/${postId}`}>
        <h2>{title}</h2>
      </Link>

      {/* <div className="cont">{new Date(addedDate)}</div> */}
    </PostItemBlock>
  )
}

const PostList = ({ posts, loading, error }) => {
  const errChenck = () => {
    if (error) {
      if (error.response.status === 404) {
        return <ErrorBlock> 존재하지 않는 포스트입니다. </ErrorBlock>
      } else if (error.response.status === 401) {
        return <ErrorBlock> 권한이 없습니다. </ErrorBlock>
      } else {
        return <ErrorBlock> Error! </ErrorBlock>
      }
    }
  }
  useEffect(() => {
    errChenck()
  }, [])

  if (loading || !posts) {
    return (
      <MainResponsive>
        <ErrorBlock>
          <div to="/" className="logo">
            <span className="logof">OKRA</span>
            <span className="logob">SEOUL</span>
          </div>
        </ErrorBlock>
      </MainResponsive>
    )
  }

  return (
    <PostListBlock>
      {!loading && posts && (
        <>
          {posts.data.posts.map(post => (
            <PostItem post={post} key={post.postId} />
          ))}
        </>
      )}
    </PostListBlock>
  )
}

export default PostList
