import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GitHubIssue, State } from '../../interfaces';
import { NgStyle } from '@angular/common';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, NgStyle],
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  // Inject
  issueService = inject(IssueService);

  // Input
  issue = input.required<GitHubIssue>();

  // Computed
  isOpen = computed(() => {
    console.log(this.issue().state);
    return this.issue().state === State.Open;
  });

  prefetchData() {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
