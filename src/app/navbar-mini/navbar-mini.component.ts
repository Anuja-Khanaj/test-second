import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-mini',
  templateUrl: './navbar-mini.component.html',
  styleUrls: ['./navbar-mini.component.css']
})
export class NavbarMiniComponent {
 isdisplay:boolean = false
 isPage:boolean  = false
 isHome: boolean = false
 isShop:boolean  = false
 isProduct:boolean = false
 blog(){
  this.isdisplay = !this.isdisplay
 }
  home(){
 this.isHome = !this.isHome
}

Shop(){
  this.isShop  = !this.isShop
}

 Page(){
  this.isPage = !this.isPage
 }

 Product(){
  this.isProduct = !this.isProduct
 }
 shopItems = [
  { title: 'Shop Layout', listItems: ['Filter left sidebar', 'Filter right sidebar', 'Canvas sidebar', 'Dropdown sidebar', 'Grid 2 columns', 'Grid 3 columns'] },
  { title: 'Shop Page', listItems: ['Collection list', 'Collection list 2', 'Pagination page', 'Load more button', 'Infinite scrolling'] }
];

picItems = [
  { title: 'Underwear' },
  { title: 'Underwear' }
];


firstRowItems = [
  { title: 'Main Demo' },
  { title: 'Simple Decor' },
  { title: 'Simple Modern' },
  { title: 'Gym Fitness' },
  { title: 'SwimWears' }
];

secondRowItems = [
  { title: 'Home Decor' },
  { title: 'Skin Care' },
  { title: 'Organic Food' },
  { title: 'Tiktok Fashion' },
  { title: 'Mega Store' }
];

productsNac = [
  { title: 'Shop Layout', listItems: ['Filter left sidebar', 'Filter right sidebar', 'Canvas sidebar', 'Dropdown sidebar', 'Grid 2 columns', 'Grid 3 columns'] },
  { title: 'Shop Page', listItems: ['Collection list', 'Collection list 2', 'Pagination page', 'Load more button', 'Infinite scrolling'] }
]

blogItems = [
  "Grid 2 columns",
  "Grid 3 columns",
  "Grid 4 columns",
  "Post left right sidebar",
  "Post list view",
  "Single post",
  "Pagination loadmore",
  "Pagination infinite scrolling"
]
pageItems = [
  "About us",
  "Out stires",
  "Faq's",
  "Brands",
  "Careers",
  "Conatct us",
  "Store location",
  "Timeline",
  "Portfolio",
  "Compare",
  "My account",
  "Page 404",
  "Recently Viewed Produts "
]
}
