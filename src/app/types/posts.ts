import { type Database } from '../types/database';

type PostType = Database['public']['Tables']['posts']['Row'];
type UserType = Database['public']['Tables']['users']['Row'];

export type Posts = PostType & {
    users: UserType
}