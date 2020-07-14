import { InMemoryDbService } from 'angular-In-Memory-Web-Api';
import { Book } from './book';

export class BookApi implements InMemoryDbService {
    createDb() {        
        let bookList: Book[] = [
            { id: 1, name: 'Angular 9', category: 'Angular', year: '2020' },
            { id: 2, name: 'React js', category: 'ReactJS', year: '2015' },
            { id: 3, name: 'TypeScript', category: 'TypeScript', year: '2010' },
            { id: 4, name: 'JavaScript', category: 'JavaScript', year: '1990' }
        ]
        return { book: bookList }
    }
}