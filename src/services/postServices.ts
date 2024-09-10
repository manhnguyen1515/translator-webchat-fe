
import { ITestPostData } from "../constants/types";
import {http} from "../http-common";

const getAll = () => {
  return http.get<Array<ITestPostData>>("/posts");
};

const get = (id: any) => {
  return http.get<ITestPostData>(`/posts/${id}`);
};

const create = (data: ITestPostData) => {
  return http.post<ITestPostData>("/posts", data);
};

const update = (id: any, data: ITestPostData) => {
  return http.put<any>(`/posts/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/posts/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/posts`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITestPostData>>(`/posts?title=${title}`);
};

const findWithLimit = (limit: number) => {
    return http.get<Array<ITestPostData>>(`/11posts?_limit=${limit}`);
  };

const PostService
 = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  findWithLimit
};

export default PostService;