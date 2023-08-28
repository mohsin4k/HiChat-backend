import { IUserDocument } from '@user/interfaces/user.interface';

export const mockExistingUser = {
  notifications: {
    messages: true,
    reactions: true,
    comments: true,
    follows: true
  },
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: ''
  },
  blocked: [],
  blockedBy: [],
  followersCount: 1,
  followingCount: 2,
  postsCount: 2,
  bgImageVersion: '',
  bgImageId: '',
  profilePicture: 'http://place-hold.it/500x500',
  _id: '64e3c2fdea8e49bb7358d33b',
  work: 'KickChat Inc.',
  school: 'University of Benin',
  location: 'Dusseldorf, Germany',
  quote: 'Sky is my limit',
  createdAt: new Date()
} as unknown as IUserDocument;

export const existingUser = {
  notifications: {
    messages: true,
    reactions: true,
    comments: true,
    follows: true
  },
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: ''
  },
  blocked: [],
  blockedBy: [],
  followersCount: 1,
  followingCount: 2,
  postsCount: 2,
  bgImageVersion: '',
  bgImageId: '',
  profilePicture: 'http://place-hold.it/500x500',
  _id: '64e3c2fdea8e49bb7358d33b',
  uId: '155374601869',
  username: 'Danny',
  email: 'danny@me.com',
  avatarColor: 'red',
  work: 'KickChat Inc.',
  school: 'University of Benin',
  location: 'Dusseldorf, Germany',
  quote: 'Sky is my limit',
  createdAt: new Date()
} as unknown as IUserDocument;

export const existingUserTwo = {
  notifications: {
    messages: false,
    reactions: true,
    comments: true,
    follows: false
  },
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: ''
  },
  blocked: [],
  blockedBy: [],
  followersCount: 1,
  followingCount: 2,
  postsCount: 2,
  bgImageVersion: '',
  bgImageId: '',
  profilePicture: 'http://place-hold.it/500x500',
  _id: '64e3c308ea8e49bb7358d342',
  uId: '549207788048',
  username: 'Manny',
  email: 'manny@me.com',
  avatarColor: '#9c27b1',
  work: 'KickChat Inc.',
  school: 'University of Benin',
  location: 'Dusseldorf, Germany',
  quote: 'Sky is my limit',
  createdAt: new Date()
} as unknown as IUserDocument;

export const mergedAuthAndUserData = {
  notifications: {
    messages: false,
    reactions: true,
    comments: true,
    follows: false
  },
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: ''
  },
  blocked: [],
  blockedBy: [],
  followersCount: 1,
  followingCount: 2,
  postsCount: 2,
  bgImageVersion: '',
  bgImageId: '',
  profilePicture: 'http://place-hold.it/500x500',
  _id: '64e3c308ea8e49bb7358d342',
  authId: '64e3c597ea8e49bb7358d354',
  uId: '549207788048',
  username: 'Manny',
  email: 'manny@me.com',
  avatarColor: '#9c27b0',
  work: 'KickChat Inc.',
  school: 'University of Benin',
  location: 'Dusseldorf, Germany',
  quote: 'Sky is my limit',
  createdAt: '2022-08-31T07:42:24.451Z'
} as unknown as IUserDocument;

export const searchedUserMock = {
  profilePicture: 'http://place-hold.it/500x500',
  _id: '64e3c597ea8e49bb7358d355',
  uId: '772532065955',
  username: 'Ganny',
  email: 'gen@me.com',
  avatarColor: '#9c27b1'
};

export const userJwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
