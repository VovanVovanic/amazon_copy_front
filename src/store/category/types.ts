export interface ICategory {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
}

export type ICreateCategory = Pick<ICategory, "name">;

export enum ByFeature {
  Id = "by_id",
  Slug = "by_slug",
}
