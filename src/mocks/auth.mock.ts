/* eslint-disable @typescript-eslint/no-empty-function */
import { Response } from 'express';
import { AuthPayload, IAuthDocument } from '@auth/interfaces/auth.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authMockRequest = (sessionData: IJWT, body: IAuthMock, currentUser?: AuthPayload | null, params?: any) => ({
  session: sessionData,
  body,
  params,
  currentUser
});

export const authMockResponse = (): Response => {
  const res: Response = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export interface IJWT {
  jwt?: string;
}

export interface IAuthMock {
  _id?: string;
  username?: string;
  email?: string;
  uId?: string;
  password?: string;
  avatarColor?: string;
  avatarImage?: string;
  createdAt?: Date | string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  quote?: string;
  work?: string;
  school?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  messages?: boolean;
  reactions?: boolean;
  comments?: boolean;
  follows?: boolean;
}

export const authUserPayload: AuthPayload = {
  userId: '64e3c2fdea8e49bb7358d33b',
  uId: '155374601869',
  username: 'Danny',
  email: 'danny@me.com',
  avatarColor: '#9c27b0',
  iat: 12345
};

export const authMock = {
  _id: '64e3c2fdea8e49bb7358d33b',
  uId: '155374601869',
  username: 'Danny',
  email: 'danny@me.com',
  avatarColor: '#9c27b0',
  createdAt: new Date(),
  save: () => {}
} as unknown as IAuthDocument;

export const signUpMockData = {
  _id: '64e3c2fdea8e49bb7358d33b',
  uId: '155374601869',
  username: 'danny',
  email: 'danny@test.com',
  avatarColor: '#ff9800',
  password: 'querty1',
  birthDay: { month: '', day: '' },
  postCount: 0,
  gender: '',
  quotes: '',
  about: '',
  relationship: '',
  blocked: [],
  blockedBy: [],
  bgImageVersion: '',
  bgImageId: '',
  work: [],
  school: [],
  placesLived: [],
  createdAt: new Date(),
  followersCount: 0,
  followingCount: 0,
  notifications: { messages: true, reactions: true, comments: true, follows: true },
  profilePicture: 'https://res.cloudinary.com/ratingapp/image/upload/64e3c2fdea8e49bb7358d33b'
};
