import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { IssuesService } from './issues.service';
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { GitHubIssue, State } from '../interfaces';

describe('IssuesService', () => {
  let service: IssuesService;
  const queryClient = new QueryClient();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideTanStackQuery(queryClient),
      ],
    });
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load labels', async () => {
    const { data } = await service.labelsQuery.refetch();

    expect(data?.length).toBe(30);

    const [ label ] = data!;

    expect(typeof label.id).toBe('number');
    expect(typeof label.node_id).toBe('string');
    expect(typeof label.url).toBe('string');
    expect(typeof label.name).toBe('string');
    expect(typeof label.color).toBe('string');
    expect(typeof label.default).toBe('boolean');
    expect(typeof label.description).toBe('string');
  });

  it('should set selected state, OPEN, CLOSED & ALL', async () => {
    for (const state of Object.values(State)) {
      service.showIssuesByState(state as State);

      expect(service.selectedState()).toBe(state);

      const { data } = await service.issuesQuery.refetch();

      if (data) {
        data!.forEach((issue) => {
          if (state !== 'all') {
            expect(issue.state).toBe(state);
          } else {
            expect(issue.state).toMatch(/^(closed|open)$/);
          }
        });
      }

    }


    // service.showIssuesByState(State.Close);

    // expect(service.selectedState()).toBe(State.Close);

    // const { data } = await service.issuesQuery.refetch();

    // data!.forEach((issue) => {
    //   expect(issue.state).toBe(State.Close);
    // });

    // service.showIssuesByState(State.Open);


  });
});
