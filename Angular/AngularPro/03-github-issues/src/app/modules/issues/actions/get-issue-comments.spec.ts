import { environment as envi } from "src/environments/environment";
import { getIssueComments } from "./get-issue-comments";


const issueNumber = '123';
const mockComments = [
  { id: 1, body: 'First comment', user: { login: 'user1'}},
  { id: 2, body: 'Second comment', user: { login: 'user2'}}
];

describe('getIssueComments', () => {
  it('should fetch issue comments succesfully', async () => {
    const requestURL = `${envi.baseUrl}issues/${issueNumber}/comments`;
    const commentResponse = new Response(JSON.stringify(mockComments), {
      status: 200,
      statusText: 'OK'
    });

    spyOn(window, 'fetch').and.resolveTo(commentResponse);

    const comments = await getIssueComments(issueNumber);

    expect(window.fetch).toHaveBeenCalledWith(requestURL, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}`}
    });
  });

  it('should throw an error if the response is not ok', async () => {
    const requestURL = `${envi.baseUrl}issues/${issueNumber}/comments`;
    const commentResponse = new Response(null, {
      status: 404,
      statusText: 'Not found'
    });

    spyOn(window, 'fetch').and.resolveTo(commentResponse);

    try {
      const comments = await getIssueComments(issueNumber);
      expect(true).toBeFalse();
    } catch (error) {
      expect(error).toBe(`Can't load comments from issue id ${issueNumber}`)
    }

    expect(window.fetch).toHaveBeenCalledWith(requestURL, {
      headers: { Authorization: `Bearer ${envi.gitHubToken}`}
    });
  });
});
