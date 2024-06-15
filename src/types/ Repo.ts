export interface Owner {
    login: string;
    avatar_url: string;
  }
  
  export interface Repo {
    full_name: string;
    name: string;
    description: string | null;
    html_url: string;
    owner: Owner;
    watchers_count: number;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
    homepage: string | null;
  }
  