import { sleep } from '@helpers/sleep';
import { GitHubIssue, State } from '../interfaces';
import { environment as envi } from 'src/environments/environment';

export const getIssues = async (state: State = State.All, selectedLabels: string[]): Promise<GitHubIssue[]> => {

  const params = new URLSearchParams();
  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  const url = `${envi.baseUrl}issues?${params}`;

  try {
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}` },
    });
    if (!resp.ok) throw "Can't load issues";

    const issues = await resp.json();

    return issues;
  } catch (error) {
    throw "Can't load issues";
  }
};
