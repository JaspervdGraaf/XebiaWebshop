import { Component, OnInit } from "@angular/core";
import { Package } from "../model/Package";
import { Product } from "../model/Product";

@Component({
  selector: "app-superwoman",
  templateUrl: "./superwoman.component.html",
  styleUrls: ["./superwoman.component.css"]
})
export class SuperwomanComponent implements OnInit {
  package: Package;
  toothpaste: Product;
  toothbrush: Product;
  comb: Product;
  deodorant: Product;
  shampoo: Product;
  bodycream: Product;
  shavingcream: Product;
  shaver: Product;
  moist: Product;
  tampax: Product;
  powderfresh: Product;

  constructor() {}

  ngOnInit(): void {
    this.toothpaste = new Product(
      "../../assets/images/toothpastewoman.png",
      "Crest 3D White Brilliance Whitening Toothpaste",
      "Promotes a whiter, dazzling smile and helps polish away surface stains - 75ml"
    );
    this.toothbrush = new Product(
      "../../assets/images/toothbrushwoman.png",
      "Colgate XTRA Clean Toothbrush",
      "With bristles arranged to remove plaque and promote overall gum health, the Colgate Extra Clean Toothbrush gives an exceptional, affordable clean. "
    );
    this.comb = new Product(
      "../../assets/images/combwoman.png",
      "Comb",
      "Daily massage with this comb improves hair texture and stimulates hair growth "
    );
    this.bodycream = new Product(
      "../../assets/images/bodycreamwoman.png",
      "NIVEA Soft Bodycrème",
      "For face, body and hands - 192g"
    );
    this.deodorant = new Product(
      "../../assets/images/deowoman.png",
      "Old Spice Antiperspirant Deodorant",
      "So easy to use you might accidentally put it on and only later realize your man-nificence - 80ml"
    );
    this.shampoo = new Product(
      "../../assets/images/shampoowoman.png",
      "TRESemme Smooth and Shine Shampoo",
      "Designed to deliver optimized hydration for hair to help restore vibrancy, while providing you with touchably soft, salon-healthy hair - 400ml"
    );
    this.shavingcream = new Product(
      "../../assets/images/shavingcreamwoman.png",
      "Pure Silk Aloe Shaving Cream",
      "Moisturizing, smooth glide formula protects and nourishes, Paraben-free, No animal testing - 500ml"
    );
    this.shaver = new Product(
      "../../assets/images/shaverwoman.png",
      "Bic Miss Soleil Colour Disposable Razor",
      "Triple-blade shaver with three independent spring-mounted razor blades and feminine design"
    );
    this.moist = new Product(
      "../../assets/images/moistwoman.png",
      "Olay Complete All Day Moisturizer SPF 30",
      "Conditions skin surface with antioxidants vitamins E, B3 and C to maintain healthy-looking skin - 3 packs"
    );
    this.tampax = new Product(
      "../../assets/images/tampax.png",
      "Tampax Pearl Tampons with LeakGuard",
      "Smooth Removal Layer gives you amazing comfort, even on your lighter days - 34 tampons"
    );
    this.powderfresh = new Product(
      "../../assets/images/powderfresh.png",
      "Secret Solid Powder Fresh",
      "There's no question this Completely Clean scent keeps you feeling clean. Helps stop odor before it starts - 48g"
    );

    this.package = new Package(
      1,
      "image",
      "The Superwoman Kit",
      "25",
      [
        this.toothpaste,
        this.toothbrush,
        this.comb,
        this.deodorant,
        this.shampoo,
        this.bodycream,
        this.shavingcream,
        this.shaver,
        this.moist,
        this.tampax
      ],
      "For just 25 euros per month you get everything a superwoman like you would need delivered to your home."
    );
  }
}
