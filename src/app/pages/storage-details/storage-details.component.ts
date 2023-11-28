import { Component, OnInit } from '@angular/core';
import { GrainSection } from "../../shared/interfaces/models/GrainSection";
import { StorageDetailsService } from "../../shared/services/storage-details/storage-details.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { GrainsectionModalComponent } from "./components/grainsection-modal/grainsection-modal.component";

@Component({
  selector: 'app-storage-details',
  templateUrl: './storage-details.component.html',
  styleUrls: ['./storage-details.component.scss']
})
export class StorageDetailsComponent implements OnInit{
  public grainSections: GrainSection[] = [];
  private storageId: number | undefined = undefined;

  constructor(private activatedRoute: ActivatedRoute, private storageDetailsService: StorageDetailsService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.storageId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.storageDetailsService.getAllStorageGrainSections(this.storageId).subscribe((res) => {
      this.grainSections = res;
      console.log(this.grainSections)
    });
  }

  public openModal() {
    this.matDialog.open(GrainsectionModalComponent, {
      data: { storageId: this.storageId }
    });
  }
}
