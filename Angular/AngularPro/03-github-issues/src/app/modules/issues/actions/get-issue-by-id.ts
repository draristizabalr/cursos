import { sleep } from '@helpers/sleep';
import { GitHubIssue } from '../interfaces';
import { environment as envi } from 'src/environments/environment';

export const getIssueById = async (issueId: string): Promise<GitHubIssue> => {
  sleep(1500);
  // `${envi.baseUrl}issues/${issueId}/comments
  const url = `${envi.baseUrl}issues/${issueId}`;

  try {
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}` },
    });

    if (!resp.ok) throw `Can't load issue id ${issueId}`;

    const issue = resp.json();

    return issue;

  } catch (error) {
    throw `Can't load issue id ${issueId}`;
  }
};
