import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit {

  bookDetail: Book;

  editBookForm;

  constructor(private _activatedRoute: ActivatedRoute, private _bookService: BookService, private _fb: FormBuilder, private _router:Router) {
    this._activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getBookById(this._activatedRoute.snapshot.params.id)
    this.bookDetailModel()
  }

  bookDetailModel() {
    this.editBookForm = this._fb.group({
      id: [''],
      name: [''],
      category: [''],
      year: ['']
    })
  }

  getBookById(id: number) {
    return this._bookService.getBookById(id).subscribe(res => {
      console.log(res)
      this.bookDetail = res
      
        this.editBookForm.setValue(
          this.bookDetail
        )     
    
    })
  }

  updateBook(){
    //console.log(this.editBookForm.value)
    this._bookService.updateBook(this.editBookForm.value).subscribe(res=>{
      console.log(res)
      this._router.navigate([''])
    })
  }

  
}
