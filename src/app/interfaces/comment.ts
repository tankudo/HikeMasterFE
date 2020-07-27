import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export interface Comment {

  messageId?: number;
  text: string;
  date: Date;
  user: {
    userName: string
  };
  hikeRoute?:
    {
      hikeID: number,
      coordinate: string,
      tourLenght: number,
      levelRise: number,
      difficulty: string,
      view: string,
      distance: number,
      messages: [{
        userID: number,
        fullName: string,
        userName: string
        email: string,
        password: string,
        isDeactivated: boolean,
        notification: string
      }]
    };
}
