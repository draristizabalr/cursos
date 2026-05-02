import { Component, input, inject } from '@angular/core';
import { GitHubLabel } from '../../interfaces';
import { NgStyle } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'issues-labels-selector',
  imports: [NgStyle],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  // Injects
  issuesService = inject(IssuesService);

  // Inputs
  labels = input.required<GitHubLabel[]>();

  isSelected(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }
}
