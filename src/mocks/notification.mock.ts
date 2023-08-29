import { AuthPayload } from '@auth/interfaces/auth.interface';
import { INotificationDocument } from '@notification/interfaces/notification.interface';
import { Response } from 'express';
import { IJWT } from './auth.mock';

export const notificationMockRequest = (sessionData: IJWT, currentUser?: AuthPayload | null, params?: IParams) => ({
  session: sessionData,
  params,
  currentUser
});

export const notificationMockResponse = (): Response => {
  const res: Response = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export interface IParams {
  notificationId?: string;
}

export const notificationData = {
  _id: '64e63c75c973b4af4fc1751c',
  userTo: '64e3c2fdea8e49bb7358d33b',
  userFrom: '64e3c597ea8e49bb7358d355',
  message: 'Testing the microphone',
  notificationType: 'comments',
  entityId: '60263f14638fed5246e322d9',
  createdItemId: '60263f14748fed5246e322d9',
  comment: '',
  reaction: '',
  post: '',
  imgId: '',
  imgVersion: '',
  gifUrl: '',
  read: false,
  createdAt: new Date()
} as unknown as INotificationDocument;
