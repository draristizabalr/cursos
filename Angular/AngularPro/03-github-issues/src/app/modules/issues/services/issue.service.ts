import { inject, Injectable, signal } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getIssueById, getIssueComments } from '../actions';
import { GitHubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueId = signal<string | null>(null);
  private queryClient = inject(QueryClient);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueId()],
    queryFn: () => getIssueById(this.issueId()!),
    enabled: this.issueId() !== null,
    staleTime: 1000 * 60 * 5,
  }));

  issueCommentQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueId(), 'comments'],
    queryFn: () => getIssueComments(this.issueId()!),
    enabled: this.issueId() !== null,
  }));

  setIssueId(issueId: string) {
    this.issueId.set(issueId);
  }

  prefetchIssue(issueId: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueId],
      queryFn: () => getIssueById(issueId),
      staleTime: 1000 * 60 * 5,
    });
  }

  setIssueData(issue: GitHubIssue) {
    this.queryClient.setQueryData(['issue', issue.number.toString()], issue, {
      updatedAt: Date.now() + 1000 * 60
    });
  }
}
