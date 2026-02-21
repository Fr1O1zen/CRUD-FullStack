interface Apiary {
  id: string;
  owner_user_id: string;
  name: string;
  is_deleted: boolean;
  created_at: Date;
}

export type { Apiary };