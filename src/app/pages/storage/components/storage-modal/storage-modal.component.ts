import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "../../../../shared/services/storage/storage.service";
import { StorageRequest } from "../../../../shared/types/StorageRequest";
import { MatDialog } from "@angular/material/dialog";
import { LoaderService } from "../../../../shared/services/loader/loader.service";

@Component({
  selector: 'app-storage-modal',
  templateUrl: './storage-modal.component.html',
  styleUrls: ['./storage-modal.component.scss']
})
export class StorageModalComponent {
  storageForm = new FormGroup({
    storageName: new FormControl('', Validators.required),
    seedTypeName: new FormControl('')
  });

  constructor(private storageService: StorageService, private matDialog: MatDialog, private loaderService: LoaderService) {}

  public addStorage(): void {
    if (this.storageForm.valid) {
      const storage: StorageRequest = {name: this.storageForm.controls.storageName.value!, seedTypesName: this.storageForm.controls.seedTypeName.value!};
      this.loaderService.isLoading.next(true);
      this.storageService.addStorage(storage).subscribe((res) => {
        this.loaderService.isLoading.next(false);
        this.matDialog.closeAll();
      });
    }
  }
}
