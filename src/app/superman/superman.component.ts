import { Component, OnInit } from "@angular/core";
import { Package } from "../model/Package";
import { Product } from "../model/Product";

@Component({
  selector: "app-superman",
  templateUrl: "./superman.component.html",
  styleUrls: ["./superman.component.css"]
})
export class SupermanComponent implements OnInit {
  package: Package;
  toothpaste: Product;
  toothbrush: Product;
  comb: Product;
  edge: Product;
  deodorant: Product;
  shampoo: Product;
  gillette: Product;
  oldspice: Product;

  constructor() {}

  ngOnInit(): void {
    this.toothpaste = new Product(
      "../../assets/images/toothpaste.jpg",
      "Colgate Total Toothpaste",
      "Whitens Teeth while Fighting Germs for 12 Hours - Complete Oral Care - 75ml"
    );
    this.toothbrush = new Product(
      "../../assets/images/toothbrush.jpg",
      "Colgate XTRA Clean Toothbrush",
      "Helps maintain healthy gum and for hard to reach places"
    );
    this.comb = new Product(
      "../../assets/images/comb.jpg",
      "Comb",
      "Daily massage with this comb improves hair texture and stimulates hair growth"
    );
    this.edge = new Product(
      "../../assets/images/edge.jpg",
      "Edge Shave Gel",
      "Contains Aloe and is formulated to be non-irritating on sensitive skin - 200ml"
    );
    this.deodorant = new Product(
      "../../assets/images/deodorant.jpg",
      "Old Spice Antiperspirant Deodorant",
      "So easy to use you might accidentally put it on and only later realize your man-nificence - 80ml"
    );
    this.shampoo = new Product(
      "../../assets/images/shampoo.jpg",
      "Head & Shoulders Shampoo",
      "pH balanced and gentle enough for everyday use, even on color or chemically treated hair - 700ml"
    );
    this.gillette = new Product(
      "../../assets/images/gillette.jpg",
      "Gillette Mach3 Disposable Razor",
      "For every stroke you take, it takes three. And fewer strokes means less irritation. Blades coated in Patented DLC"
    );
    this.oldspice = new Product(
      "../../assets/images/oldspice.jpg",
      "Old Spice Pure Sport Body Wash",
      "Pure Sport Plus scent makes you smell like a pure sportsman even more than Pure Sport - 700ml"
    );

    this.package = new Package(
      1,
      "image",
      "The Superman Kit",
      "25",
      [
        this.toothpaste,
        this.edge,
        this.shampoo,
        this.gillette,
        this.deodorant,
        this.comb,
        this.toothbrush,
        this.oldspice
      ],
      "For just 25 euros per month you get everything a superman like you would need delivered to your home."
    );
  }
}
