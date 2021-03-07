import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MyToastrService {
  constructor(private toastr: ToastrService) {}

  success(message: string) {
    this.toastr.success(
      "<span class='tim-icons icon-check-2' [data-notify]='icon'></span>" +
        message,
      '',
      {
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-success alert-with-icon',
      }
    );
  }

  error(message: string) {
    this.toastr.error(
      "<span class='tim-icons icon-simple-remove' [data-notify]='icon'></span>" +
        message,
      '',
      {
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-error alert-with-icon',
      }
    );
  }

  warning(message: string) {
    this.toastr.error(
      "<span class='tim-icons icon-bell-55' [data-notify]='icon'></span>" +
        message,
      '',
      {
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-warning alert-with-icon',
      }
    );
  }

  info(message: string) {
    this.toastr.error(
      "<span class='tim-icons icon-bulb-63' [data-notify]='icon'></span>" +
        message,
      '',
      {
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
      }
    );
  }

  show(message: string) {
    this.toastr.error(
      "<span class='tim-icons icon-bell-55' [data-notify]='icon'></span>" +
        message,
      '',
      {
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-primary alert-with-icon',
      }
    );
  }
}
