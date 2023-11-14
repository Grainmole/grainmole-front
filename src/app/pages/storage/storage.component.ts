import { Component, OnInit } from '@angular/core';
import { StorageService } from "../../shared/services/storage/storage.service";
import { Storage} from "../../shared/interfaces/Storage";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit{
  public storages: Storage[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.getAllUserStorages().subscribe((res) => {
      this.storages = res;
    });
  }
}