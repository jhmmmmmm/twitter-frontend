import { get, post, put } from '@utils/request';

export const editUser = (userId, params) => put(`/api/profiles/${userId}`, params);

export const followUser = (userId) => post(`/api/friendships/${userId}/follow`);

export const unFollowUser = (userId) => post(`/api/friendships/${userId}/unfollow`);

export const getFollowers = (userId) => get(`/api/friendships/${userId}/followers`);

export const getFollowings = (userId) => get(`/api/friendships/${userId}/followings`);
