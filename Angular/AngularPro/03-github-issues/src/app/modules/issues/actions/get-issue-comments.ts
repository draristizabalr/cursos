
import { sleep } from "@helpers/sleep"
import { environment as envi } from "src/environments/environment";
import { GithubIssueComment } from "../interfaces";

export const getIssueComments = async (issueId: string): Promise<GithubIssueComment[]> => {
  sleep(1500);

  const url = `${envi.baseUrl}issues/${issueId}/comments`;

  try {
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}`}
    });

    if(!resp.ok) throw `Can't load comments from issue id ${issueId}`;

    const comments = resp.json();

    return comments;
  } catch (error) {
    console.log(error);
    throw `Can't load comments from issue id ${issueId}`;
  }
}
