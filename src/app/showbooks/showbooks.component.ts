import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { BookModel } from '../books-crud/books-crud.model';

@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.css']
})
export class ShowbooksComponent implements OnInit {

  formValue !: FormGroup; 
  BooksModelObj : BookModel = new BookModel();
  bookData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      bookname : [''],
      bookCategory : [''],
      price : [''],
    })
    this.getAllBooks();
  }

  clickAddBook(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postBooksDetails(){
      this.BooksModelObj.bookname = this.formValue.value.bookname;
      this.BooksModelObj.bookCategory = this.formValue.value.bookCategory;
      this.BooksModelObj.price = this.formValue.value.price;

     this.api.postBooks(this.BooksModelObj)
     .subscribe(res=>{
        console.log(res);
        alert("Books Added Sucessfully")
        let ref = document.getElementById('cancle')
        ref?.click();
        this.formValue.reset();
        this.getAllBooks();
      
      }
      
      
      )
    }

  getAllBooks(){
    this.api.getBooks()
    .subscribe(res=>{
      this.bookData = res;
    })
  }
  deleteBook(row : any){
    this.api.deleteBooks(row.id)
    .subscribe(res=>{
      alert("Book Deleted Successfully")
      this.getAllBooks();
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.BooksModelObj.id = row.id;
    this.formValue.controls['bookname'].setValue(row.bookname);
    this.formValue.controls['bookCategory'].setValue(row.bookCatergory);
    this.formValue.controls['price'].setValue(row.price);
  
  }
  updateBooksDetails(){
    this.BooksModelObj.bookname = this.formValue.value.bookname;
    this.BooksModelObj.bookCategory = this.formValue.value.bookCategory;
    this.BooksModelObj.price = this.formValue.value.price;

    this.api.updateBooks(this.BooksModelObj,this.BooksModelObj.id)
    .subscribe(res=>{
      alert("Updated Record Sucessfully");
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
      this.getAllBooks();
    })
  }
}

