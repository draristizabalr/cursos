import { Component, input } from '@angular/core';
import { GitHubIssue, GithubIssueComment } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  imports: [NgOptimizedImage, MarkdownModule],
  templateUrl: './issue-comment.component.html',
  styles: `
  @import 'tailwindcss';

  .comment {
    @apply bg-green-500/30;
  }
  `
})
export class IssueCommentComponent {
  issue = input.required<GitHubIssue | GithubIssueComment>();
  isComment = input(false, {
    transform: (value: string | boolean) => {
      if (value === undefined || value === null) return false;
      if (typeof value === 'boolean') return value;
      if (value === '') return true;
      if (value === 'true') return true;
      if (value === 'false') return false;
      return false;
    },
  });
}
