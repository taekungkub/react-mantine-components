import { useSelector } from "react-redux"
import CommentHtml from "../../../components/CommentsProduct"
import { useAppDispatch } from "../../../store/store"
import { commentSelector, fetchComments, getAllComments, getCommentStatus } from "../../../store/slices/commentSlice"
import { useEffect, useRef, useState } from "react"
import { Box, Text } from "@mantine/core"
import useMyPagination from "../../../hooks/useMyPagination"
import { CommentTy } from "../../../type"

function CommentTab() {
  const dispatch = useAppDispatch()

  const commentReducer = useSelector(commentSelector)
  const commentsList = useSelector(getAllComments)
  const commentStatus = useSelector(getCommentStatus)

  const { currentRecords, setCurrentPage, currentPage, totalPage } = useMyPagination({ data: commentsList, pageSize: 5 })
  const [comments, setComments] = useState<CommentTy[]>(currentRecords)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasMore, setHasMore] = useState<boolean>(true)

  useEffect(() => {
    dispatch(fetchComments())
  }, [])

  useEffect(() => {
    loadComments(currentPage)
  }, [commentsList])

  useEffect(() => {
    if (comments.length === commentsList.length) {
      return
    }
    loadComments(currentPage)
  }, [currentPage])

  const loadComments = (pageNum: number) => {
    setIsLoading(true)
    setTimeout(() => {
      setComments((prevComments) => [...prevComments, ...currentRecords])
      setIsLoading(false)
      if (pageNum === totalPage) {
        setHasMore(false)
      }
    }, 1000)
  }

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const Items = comments.map((comment, index) => (
    <Box mt={"md"} key={index}>
      <CommentHtml postedAt={`Post ${index + 1}`} body={comment.body} author={{ name: comment.user.username }} />
    </Box>
  ))

  return (
    <Box mt={12}>
      {Items}
      <Box mt={12}>
        <Text align="center">{isLoading && <div>Loading...</div>}</Text>
        <Text align="center"> {!isLoading && hasMore && <div>Scroll down to load more comments</div>}</Text>
        <Text align="center"> {!hasMore && <div>No more comments</div>}</Text>
      </Box>
    </Box>
  )
}

export default CommentTab
