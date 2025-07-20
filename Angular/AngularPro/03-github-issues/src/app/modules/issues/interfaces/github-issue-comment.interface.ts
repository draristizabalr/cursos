import { Reactions, User } from "./github-issues.interface";

export interface GithubIssueComment {
  url:                      string;
  html_url:                 string;
  issue_url:                string;
  id:                       number;
  node_id:                  string;
  user:                     User;
  created_at:               Date;
  updated_at:               Date;
  author_association:       string;
  body:                     string;
  reactions:                Reactions;
  performed_via_github_app: null;
}
