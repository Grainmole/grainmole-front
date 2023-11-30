import { Component, OnInit } from '@angular/core';
import { GrainsectionService } from "../../shared/services/grainsection/grainsection.service";
import { ActivatedRoute } from "@angular/router";
import { TermoSection } from "../../shared/interfaces/models/TermoSection";

@Component({
  selector: 'app-grainsection-details',
  templateUrl: './grainsection-details.component.html',
  styleUrls: ['./grainsection-details.component.scss']
})
export class GrainsectionDetailsComponent implements OnInit {
  public grainsectionInfo: Array<TermoSection[]> = [
    [
      {
        id: 2,
        heightLevel: 1,
        temperature: 20,
        time: "2023-11-24T00:00",
        grainSectionId: 1
      },
      {
        id: 3,
        heightLevel: 1,
        temperature: 20,
        time: "2023-11-24T12:00",
        grainSectionId: 1
      },
      {
        id: 4,
        heightLevel: 1,
        temperature: 20,
        time: "2023-11-25T00:00",
        grainSectionId: 1
      },
      {
        id: 5,
        heightLevel: 1,
        temperature: 21,
        time: "2023-11-25T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 22,
        time: "2023-11-26T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 22,
        time: "2023-11-26T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 21,
        time: "2023-11-27T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 20,
        time: "2023-11-27T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 21,
        time: "2023-11-28T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 22,
        time: "2023-11-28T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 21,
        time: "2023-11-29T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 22,
        time: "2023-11-29T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 21,
        time: "2023-11-30T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 1,
        temperature: 24,
        time: "2023-11-30T12:00",
        grainSectionId: 1
      }
    ],
    [
      {
        id: 2,
        heightLevel: 2,
        temperature: 20,
        time: "2023-11-24T00:00",
        grainSectionId: 1
      },
      {
        id: 3,
        heightLevel: 2,
        temperature: 20,
        time: "2023-11-24T12:00",
        grainSectionId: 1
      },
      {
        id: 4,
        heightLevel: 2,
        temperature: 20,
        time: "2023-11-25T00:00",
        grainSectionId: 1
      },
      {
        id: 5,
        heightLevel: 2,
        temperature: 21,
        time: "2023-11-25T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 22,
        time: "2023-11-26T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 22,
        time: "2023-11-26T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 21,
        time: "2023-11-27T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 20,
        time: "2023-11-27T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 21,
        time: "2023-11-28T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 23,
        time: "2023-11-28T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 22,
        time: "2023-11-29T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 21,
        time: "2023-11-29T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 23,
        time: "2023-11-30T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 2,
        temperature: 24,
        time: "2023-11-30T12:00",
        grainSectionId: 1
      }
    ],
    [
      {
        id: 2,
        heightLevel: 3,
        temperature: 20,
        time: "2023-11-24T00:00",
        grainSectionId: 1
      },
      {
        id: 3,
        heightLevel: 3,
        temperature: 20,
        time: "2023-11-24T12:00",
        grainSectionId: 1
      },
      {
        id: 4,
        heightLevel: 3,
        temperature: 20,
        time: "2023-11-25T00:00",
        grainSectionId: 1
      },
      {
        id: 5,
        heightLevel: 3,
        temperature: 21,
        time: "2023-11-25T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 22,
        time: "2023-11-26T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 22,
        time: "2023-11-26T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 23,
        time: "2023-11-27T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 24,
        time: "2023-11-27T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 24,
        time: "2023-11-28T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 23,
        time: "2023-11-28T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 22,
        time: "2023-11-29T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 23,
        time: "2023-11-29T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 24,
        time: "2023-11-30T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 3,
        temperature: 26,
        time: "2023-11-30T12:00",
        grainSectionId: 1
      }
    ],
    [
      {
        id: 2,
        heightLevel: 4,
        temperature: 20,
        time: "2023-11-24T00:00",
        grainSectionId: 1
      },
      {
        id: 3,
        heightLevel: 4,
        temperature: 20,
        time: "2023-11-24T12:00",
        grainSectionId: 1
      },
      {
        id: 4,
        heightLevel: 4,
        temperature: 23,
        time: "2023-11-25T00:00",
        grainSectionId: 1
      },
      {
        id: 5,
        heightLevel: 4,
        temperature: 23,
        time: "2023-11-25T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 25,
        time: "2023-11-26T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 23,
        time: "2023-11-26T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 25,
        time: "2023-11-27T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 26,
        time: "2023-11-27T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 26,
        time: "2023-11-28T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 27,
        time: "2023-11-28T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 27,
        time: "2023-11-29T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 28,
        time: "2023-11-29T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 28,
        time: "2023-11-30T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 4,
        temperature: 30,
        time: "2023-11-30T12:00",
        grainSectionId: 1
      }
    ],
    [
      {
        id: 2,
        heightLevel: 5,
        temperature: 20,
        time: "2023-11-24T00:00",
        grainSectionId: 1
      },
      {
        id: 3,
        heightLevel: 5,
        temperature: 21,
        time: "2023-11-24T12:00",
        grainSectionId: 1
      },
      {
        id: 4,
        heightLevel: 5,
        temperature: 19,
        time: "2023-11-25T00:00",
        grainSectionId: 1
      },
      {
        id: 5,
        heightLevel: 5,
        temperature: 21,
        time: "2023-11-25T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 22,
        time: "2023-11-26T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 24,
        time: "2023-11-26T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 24,
        time: "2023-11-27T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 26,
        time: "2023-11-27T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 26,
        time: "2023-11-28T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 27,
        time: "2023-11-28T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 28,
        time: "2023-11-29T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 28,
        time: "2023-11-29T12:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 29,
        time: "2023-11-30T00:00",
        grainSectionId: 1
      },
      {
        id: 6,
        heightLevel: 5,
        temperature: 30,
        time: "2023-11-30T12:00",
        grainSectionId: 1
      }
    ]
  ];
  public temperatureBounds = [10, 25];
  private grainsectionId: number | undefined = undefined;

  constructor(private grainsectionService: GrainsectionService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.grainsectionId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.grainsectionService.getGrainSectionInfo(this.grainsectionId).subscribe((res) => {
      // this.grainsectionInfo = res;
    });
  }

}
