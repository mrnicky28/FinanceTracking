export interface CurrentUserInterface {
    user: {
        accessToken: string;
        displayName: string | null;
        email: string;
    };
}
