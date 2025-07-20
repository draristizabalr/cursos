import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from "../../components/issue-comment/issue-comment.component";

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueCommentComponent],
  templateUrl: './issue-page.component.html',
})
export default class IssuePageComponent {
  // Injects
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  // Signals
  issueId = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id') ?? ''),
      tap((id: string) => this.issueService.setIssueId(id)),
    ),
  );

  // Tanstack queris
  issueQuery = this.issueService.issueQuery;
  issueCommentsQuery = this.issueService.issueCommentQuery;
}
