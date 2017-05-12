import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let tickets = [{
      id: 1,
      date: '04-28-2017',
      client: 'Booker',
      ticketNo: 'https://captora.atlassian.net/browse/CRT-880',
      status: 'Done',
      link: '',
      description: 'Extending the space of subtitle',
      feature: ''
    },
      {
        id: 2,
        date: '04-28-2017',
        client: 'MongoDB',
        ticketNo: 'Pooja',
        status: 'Done',
        link: '',
        description: 'Problem with new template and footer icons',
        feature: ''
      },
      {
        id: 3,
        date: '04-28-2017',
        client: 'Prontoforms',
        ticketNo: 'https://captora.atlassian.net/browse/CRT-873',
        status: 'Done',
        link: '',
        description: 'Template creation',
        feature: ''
      }
    ];
    return {tickets};
  }
}
