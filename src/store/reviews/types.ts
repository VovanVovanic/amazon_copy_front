import { IUser } from "./../user/types";
export interface IReview {
  id: string;
  user: IUser;
  createdAt: string;
  text: string;
  rating: string;
  product: { name: string; id: string };
}

export interface IReviewField {
  rating: number;
  text: string;
}
