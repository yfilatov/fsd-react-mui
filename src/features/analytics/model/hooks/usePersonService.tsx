import { PersonsService } from '../../api/PersonsService';
import { Person } from 'entities/analytics';
import { persons } from '../data/PersonsData';

export const usePersonService = () : PersonsService => {

  const getPersons = async () : Promise<Person[]> => {
    return Promise.resolve(persons)
  }

  return { getPersons };
}
