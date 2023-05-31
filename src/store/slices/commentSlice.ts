import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { CommentTy, FetchStatusTy } from "@/type"
import DummyServices from "../../services/DummyServices"

interface SliceState {
  comments: CommentTy[]
  ccommentsStatus: FetchStatusTy
}

const initialState: SliceState = {
  comments: [],
  ccommentsStatus: "idle",
}

export const fetchComments = createAsyncThunk("comments/fetchComments", async (keyword: string) => {
  const response = await DummyServices.searchProduct(keyword)
  return response.data.products
})

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.ccommentsStatus = "loading"
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload
        state.ccommentsStatus = "succeeded"
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.ccommentsStatus = "failed"
      })
  },
})
export const {} = commentSlice.actions

export const searchSelector = (store: RootState) => store.comment

export const getAllComments = (state: RootState) => state.comment.comments

export const getCommentStatus = (state: RootState) => state.comment.ccommentsStatus

export default commentSlice.reducer
