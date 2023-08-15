import { Response } from 'express';
import { AuthPayload } from '@auth/interfaces/auth.interface';
import { IReactionDocument, IReactions } from '@reaction/interfaces/reaction.interface';
import { IJWT } from './auth.mock';

export const reactionMockRequest = (sessionData: IJWT, body: IBody, currentUser?: AuthPayload | null, params?: IParams) => ({
  session: sessionData,
  body,
  params,
  currentUser
});

export const reactionMockResponse = (): Response => {
  const res: Response = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export interface IBody {
  postId?: string;
  comment?: string;
  profilePicture?: string;
  userTo?: string;
  type?: string;
  previousReaction?: string;
  postReactions?: IReactions;
}

export interface IParams {
  postId?: string;
  page?: string;
  commentId?: string;
  reactionId?: string;
  previousReaction?: string;
  username?: string;
  postReactions?: string;
}

export const reactionData: IReactionDocument = {
  _id: '6064861bc25eaa5a5d2f9bf4',
  username: 'Danny',
  postId: '64db5f49e52e07570c1ddd70',
  profilePicture: 'https://res.cloudinary.com/ratingapp/image/upload/64c39e675f5517f7faebb525',
  comment: 'This is a comment',
  createdAt: new Date(),
  userTo: '64c39e675f5517f7faebb525',
  type: 'love'
} as IReactionDocument;
