import {SortOrder} from "../constants/sortOrder";
import {ViewUserModel} from "../features/users/models/ViewUserModel";
import {mockBlogModel, mockCommentModel, mockPostModel, mockUserModel} from "../constants/blanks";
import {CommentViewModel} from "../features/comments/models/CommentViewModel";

export type BlogType = {
  id: string,
  name: string
  description: string
  websiteUrl: string
  createdAt: string
  isMembership: boolean
}

export type BlogsType = {
  pagesCount: number,
  page: number,
  pageSize: number,
  totalCount: number,
  items: Array<BlogType>
}

export type CommentatorInfoType = {
  userId: string,
  userLogin: string
}

export enum CommentStatus {
  None = 'None',
  Like = 'Like',
  Dislike = 'Dislike'
}

export type UserCommentLikesType = {
  commentId: string,
  myStatus: CommentStatus
}

export type CommentLikesInfoType = {
  likesCount: number,
  dislikesCount: number
}

export type CommentLikesViewType = {
  likesCount: number,
  dislikesCount: number,
  myStatus: CommentStatus
}

export type CommentType = {
  id: string,
  content: string
  postId: string
  commentatorInfo: CommentatorInfoType
  likesInfo: CommentLikesInfoType
  createdAt: string
}

export type RefreshTokenDeviceType = {
  id: string,
  ip: string,
  title: string
  lastActiveDate: Date
  expirationDate: Date
  deviceId: string
  userId: string
}

export type RefreshTokenDeviceViewType = {
  ip: string,
  title: string
  lastActiveDate: Date
  deviceId: string
}

export type CommentsType = {
  pagesCount: number,
  page: number,
  pageSize: number,
  totalCount: number,
  items: Array<CommentViewModel>
}

export type APIRequestsCountType = {
  ip: string,
  URL: string
  date: Date
}

export type PostType = {
  id: string
  title: string
  shortDescription: string
  content: string
  blogId: string
  createdAt: string
  blogName: string
}

export type AccountDataType = {
  login: string
  email: string
  passwordHash: string
  createdAt: string
}

export type EmailConfirmationType = {
  confirmationCode: string,
  expirationDate: Date,
  isConfirmed: boolean
}

export type UserType = {
  id: string
  accountData: AccountDataType
  emailConfirmation: EmailConfirmationType
  commentsLikes: Array<UserCommentLikesType>
}

export type PostsType = {
  pagesCount: number,
  page: number,
  pageSize: number,
  totalCount: number,
  items: Array<PostType>
}

export type UsersType = {
  pagesCount: number,
  page: number,
  pageSize: number,
  totalCount: number,
  items: Array<ViewUserModel>
}

export type SortConditionsType = {
  pageNumber: string,
  pageSize: string,
  sortBy: keyof BlogType | keyof PostType | keyof ViewUserModel | keyof CommentViewModel,
  model: typeof mockBlogModel | typeof mockPostModel | typeof mockUserModel | typeof mockCommentModel
  sortDirection: SortOrder.asc | SortOrder.desc,
}