import { Component, OnInit } from '@angular/core';
import { StorageService } from "../../shared/services/storage/storage.service";
import { Storage } from "../../shared/interfaces/models/Storage";
import { MatDialog } from "@angular/material/dialog";
import { StorageModalComponent } from "./components/storage-modal/storage-modal.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit{
  public storages: Storage[] = [];

  constructor(private storageService: StorageService, private matDialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.storageService.getAllUserStorages().subscribe((res) => {
      this.storages = res;
    });
  }

  public openModal() {
    this.matDialog.open(StorageModalComponent);
  }

  public viewStorageDetails(id: number) {
    this.router.navigateByUrl(`/storage-details/${id}`)
  }
}
