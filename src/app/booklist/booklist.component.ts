import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
  preserveWhitespaces: true
})
export class BooklistComponent implements OnInit {

  allBook: Book[];

  allLibBook: Book[];

  constructor(private _bookService: BookService, private _router:Router) { }

  ngOnInit(): void {
    this.getAllBooks()
    this.getAllLibBook()
  }

  getAllBooks() {
    this._bookService.getAllBooks().subscribe(res => {
      this.allBook = res
    })
  }

  getAllLibBook() {
    this._bookService.getAllLibBook().subscribe(res => {
      this.allLibBook = res
      console.log(res)
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('An error occurred ' + err.error.message)
      } else {
        console.log('Server Return Status Code - ' + err.status)
        console.log('Server Return Status Text - ' + err.statusText)
      }
    })
  }

  deleteBook(id:number){
    this._bookService.deleteBook(id).subscribe(res=>{
      console.log(res)
      this.getAllBooks()
    }, (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log('An error occurred ' + err.message)
      } else {
        console.log('Server return status code' + err.status)
        console.log('Server return status text' + err.statusText)
      }
    })
  }

}
