import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { name: 'Julie', email: 'julie@gmail.com' },
      { name: 'Tom', email: 'tom@gmail.com' },
      { name: 'Jason', email: 'jason@gmail.com' },
      { name: 'Kristy', email: 'kristy@gmail.com' }
    ];
    return {users: {
      total: users.length,
      results: users
    }};
  }
}
