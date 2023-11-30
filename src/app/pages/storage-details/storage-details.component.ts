import { Component, OnInit } from '@angular/core';
import { GrainSection } from "../../shared/interfaces/models/GrainSection";
import { StorageDetailsService } from "../../shared/services/storage-details/storage-details.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { GrainsectionModalComponent } from "./components/grainsection-modal/grainsection-modal.component";
import { LoaderService } from "../../shared/services/loader/loader.service";

@Component({
  selector: 'app-storage-details',
  templateUrl: './storage-details.component.html',
  styleUrls: ['./storage-details.component.scss']
})
export class StorageDetailsComponent implements OnInit{
  public grainSections: GrainSection[] = [];
  private storageId: number | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private storageDetailsService: StorageDetailsService,
              private matDialog: MatDialog, private router: Router, private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.storageId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loaderService.isLoading.next(true);
    this.storageDetailsService.getAllStorageGrainSections(this.storageId).subscribe((res) => {
      this.loaderService.isLoading.next(false);
      this.storageDetailsService.grainSectionList.next(res);
      this.grainSections = this.storageDetailsService.grainSectionList.getValue();
    });
  }

  public openModal() {
    this.matDialog.open(GrainsectionModalComponent, {
      data: { storageId: this.storageId }
    });
  }

  public viewGrainsectionDetails(id: number) {
    this.router.navigateByUrl(`grainsection-details/${id}`)
  }
}
