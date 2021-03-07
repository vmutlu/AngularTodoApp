import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiURL } from 'src/app/contants/apiURL';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { EntityRepositoryService } from 'src/app/services/entity-repository.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private alertifyService: ToastrService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private service: EntityRepositoryService<any>
  ) {}

  todoList: any;
  todoGetById: any;
  categoryList: any;
  todoForm: FormGroup = this.formBuilder.group({
    content: ['', Validators.required],
    reminMeDate: ['', Validators.required],
    dueDate: ['', Validators.required],
    isFavorite: [0, Validators.required],
    categoryId: [0, Validators.required],
  });

  categoryForm: FormGroup = this.formBuilder.group({
    categoryId: [0],
    name: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getAll();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

  getAll() {
    this.service.getAll(ApiURL.Api_TODO).subscribe((response: any) => {
      this.todoList = response.data;
    });

    this.service.getAll(ApiURL.Api_Add_Category).subscribe((response: any) => {
      this.categoryList = response.data;
      console.log(this.categoryList);
    });
  }

  remove(id: number) {
    this.service.delete(ApiURL.Api_Delete_TODO, id).subscribe((response) => {
      this.todoList = response.data;
    });
    this.getAll();
  }

  removeCategory(id: number) {
    this.service
      .delete(ApiURL.Api_Delete_Category, id)
      .subscribe((response) => {
        this.categoryList = response.data;
        alert(response.data.message);
      });
    this.getAll();
  }

  visible: boolean = false;
  updateValid: boolean = false;
  categoryVisible: boolean = false;

  addItem() {
    this.visible = !this.visible;
    this.updateValid = false;
    this.categoryVisible = false;
  }

  add() {
    var todoFormFormDto = Object.assign({}, this.todoForm.value);
    this.service
      .add(ApiURL.Api_Add_TODO, todoFormFormDto)
      .subscribe((response) => {
        this.todoList = response.data;
        this.alertifyService.success(response.message);
        alert(response.message);
      });
  }

  getCategoryVisible: boolean = false;
  GetCategoryList() {
    this.getCategoryVisible = true;
  }

  addCategory() {
    this.categoryVisible = !this.categoryVisible;
    this.updateValid = false;
    this.visible = false;
    debugger;
    var categoryFormDTO = Object.assign({}, this.categoryForm.value);
    this.service
      .add(ApiURL.Api_Add_CategoryDTO, categoryFormDTO)
      .subscribe((response) => {
        this.alertifyService.success(response.message);
        alert(response.message);
      });
  }

  getById(id: number) {
    this.service.get(ApiURL.Api_GetById_TODO, id).subscribe((response) => {
      this.todoForm = this.formBuilder.group({
        id: [response.data.id, Validators.required],
        content: [response.data.content, Validators.required],
        reminMeDate: [response.data.reminMeDate, Validators.required],
        dueDate: [response.data.dueDate, Validators.required],
        isFavorite: [response.data.isFavorite, Validators.required],
        categoryId: [response.data.categoryId, Validators.required],
      });

      console.log('data', this.todoForm);
    });

    this.updateValid = true;
    this.visible = false;
    this.categoryVisible = false;
  }

  updateCategory: boolean = false;
  getCategoryById(id: number) {
    this.updateCategory = true;
    this.service.get(ApiURL.Api_GetById_Category, id).subscribe((response) => {
      this.categoryForm = this.formBuilder.group({
        categoryId: [response.data.categoryId, Validators.required],
        name: [response.data.name, Validators.required],
      });

      console.log('data', this.categoryForm);
    });
  }

  update() {
    if (this.todoForm.valid) {
      var todoFormFormDto = Object.assign({}, this.todoForm.value);

      console.log('Güncellenecek', todoFormFormDto);

      this.service
        .update(ApiURL.Api_Update_TODO, todoFormFormDto)
        .subscribe((data) => {
          this.alertifyService.success(data.message);
          alert(data.message);
        });
    }
  }

  updateCategoryy() {
    var categoryFormDto = Object.assign({}, this.categoryForm.value);
    debugger;
    this.service
      .update(ApiURL.Api_Update_Category, categoryFormDto)
      .subscribe((data) => {
        this.alertifyService.success(data.message);
        alert(data.message);
      });
  }
}
