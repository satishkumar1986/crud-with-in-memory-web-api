import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addboook',
  templateUrl: './addboook.component.html',
  styleUrls: ['./addboook.component.scss']
})
export class AddboookComponent implements OnInit {

  bookForm;
  //bookForm: FormGroup

  bookListLenght:number;

  bookListLenght2:number = 5;


  constructor(private _fb: FormBuilder, private _bookService:BookService, private _router:Router) { }

  ngOnInit(): void {    
    this.getAllBooks()
    this.bookModel()
  }

  bookModel() {
    this.bookForm = this._fb.group({
      id: [''],
      name: [''],
      category: [''],
      year: ['']
    })
  }

  bookDetail(){
    this._bookService.createBook(this.bookForm.value).subscribe(res=>{
      console.log(res)
      this._router.navigate([''])
    }, (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log('An error occurred ' + err.message)
      } else {
        console.log('Server return status code ' + err.status)
        console.log('Server return satatu text' + err.statusText)
      }
    })
  }

  getAllBooks(){
    this._bookService.getAllBooks().subscribe(res=>{      
      this.bookListLenght =res.length+1
      console.log(this.bookListLenght)
      this.bookForm.patchValue({
        id:this.bookListLenght
      })
    })
  }

}
