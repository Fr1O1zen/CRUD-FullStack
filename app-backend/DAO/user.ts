interface User {
  // store UUIDs as strings for portability and easier comparisons across layers
  id: string;
  username: string;
  email: string;
  password_hash: string;
  is_deleted: boolean;
  created_at: Date;
}

export type { User };