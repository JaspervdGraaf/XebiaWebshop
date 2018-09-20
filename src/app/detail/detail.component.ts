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
  toothpaste: Product;
  toothbrush: Product;


  constructor() {}

  ngOnInit(): void {
    this.toothpaste = new Product("../../assets/images/toothpaste.jpg", "Toothpaste", "Nice mint");
    this.toothbrush = new Product(
      "../../assets/images/toothbrush.jpg",
      "Toothbrush",
      "Brush for your teeth"
    );

    this.package = new Package(1, "image", "Great Starter Package", "25", [
      this.toothpaste,
      this.toothbrush
    ], "For just 25 euros per month you get everything a superman like you would need delivered to your home.");
  }
}
