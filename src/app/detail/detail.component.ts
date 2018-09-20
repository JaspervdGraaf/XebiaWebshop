import { Component, OnInit } from "@angular/core";
import { Package } from "../model/Package";
import { Product } from "../model/Product";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  package: Package;
  soap: Product;
  toothbrush: Product;

  constructor() {}

  ngOnInit(): void {
    this.soap = new Product("image", "Soapy", "Soapy soap");
    this.toothbrush = new Product(
      "image",
      "Toothbrush",
      "Brush for your teeth"
    );

    this.package = new Package(1, "image", "Sexy Package", "$300", [
      this.soap,
      this.toothbrush
    ]);
  }
}
