import { environment as envi } from '../../../../environments/environment.development';
import { getIssueById } from './get-issue-by-id';

const issueNumber = '123';
const mockIssue = {
  id: 123,
  number: issueNumber,
  body: '# Hola mundo',
};

describe('GetIssueById action', () => {
  it('should fetch issue successfully', async () => {
    const requestURL = `${envi.baseUrl}issues/${issueNumber}`;
    const issueResponse = new Response(JSON.stringify(mockIssue), {
      status: 200,
      statusText: 'OK',
    });

    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    const issue = await getIssueById(issueNumber);

    expect(window.fetch).toHaveBeenCalledWith(requestURL, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}` },
    });
  });

  it('should fetch issue failing', async () => {
    const requestURL = `${envi.baseUrl}issues/${issueNumber}`;
    const issueResponse = new Response(null, {
      status: 404,
      statusText: 'Not found',
    });

    spyOn(window, 'fetch').and.resolveTo(issueResponse);

    try {
      const issue = await getIssueById(issueNumber);
      expect(true).toBeFalse();
    } catch (error){
      expect(error).toBe(`Can't load issue id ${issueNumber}`);
    }
  });
});
