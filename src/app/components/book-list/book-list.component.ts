import { Component } from '@angular/core';
import { Book, BooksService } from '../../service/books.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BooksService) {}
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
    });
  }
}
