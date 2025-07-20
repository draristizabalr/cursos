import { sleep } from '@helpers/sleep';
import { GitHubLabel } from '../interfaces';
import { environment as envi } from 'src/environments/environment';

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);

  const url = `${envi.baseUrl}labels`;

  try {
    const resp = await fetch(url, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}` },
    });
    if (!resp.ok) throw "Can't load labels";

    const labels = await resp.json();

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
