import { Person } from 'entities/analytics';

export interface PersonsService  {
  getPersons: () => Promise<Person[]>;
}
