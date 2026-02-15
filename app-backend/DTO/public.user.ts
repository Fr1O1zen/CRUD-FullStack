// Public representation of a user returned by the API
// Expose `nickname` (friendly display name) and `email` only
type PublicUser = {
	nickname: string;
	email: string;
};

export type { PublicUser };