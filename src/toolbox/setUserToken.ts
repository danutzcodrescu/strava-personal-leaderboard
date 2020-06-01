export interface LoginTokens {
  access_token: string;
  external_id: number;
  expires_at: number;
}

export function setUserInfo(resp: LoginTokens) {
  localStorage.setItem('user', resp.external_id.toString());
  localStorage.setItem('access_token', resp.access_token);
}
