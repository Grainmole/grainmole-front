import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { StorageDetailsService } from "../../../../shared/services/storage-details/storage-details.service";
import { GrainSectionRequest } from "../../../../shared/types/GrainSectionRequest";
import { LoaderService } from "../../../../shared/services/loader/loader.service";

@Component({
  selector: 'app-grainsection-modal',
  templateUrl: './grainsection-modal.component.html',
  styleUrls: ['./grainsection-modal.component.scss']
})
export class GrainsectionModalComponent {
  grainSectionForm = new FormGroup({
    id: new FormControl('', Validators.required)
  });

  constructor(private storageDetailsService: StorageDetailsService, private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) private data: any, private loaderService: LoaderService) {}

  public addGrainSection(): void {
    if (this.grainSectionForm.valid) {
      const grainSection: GrainSectionRequest = {id: +this.grainSectionForm.controls.id.value!, storageId: this.data.storageId!};
      this.loaderService.isLoading.next(true);
      this.storageDetailsService.addGrainSection(grainSection).subscribe((res) => {
        this.loaderService.isLoading.next(false);
        this.matDialog.closeAll();
      });
    }
  }
}
