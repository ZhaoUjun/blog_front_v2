import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service'

@Component({
  selector: 'admin-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleContent="";

  constructor(
    private articleService:ArticleService
  ) { }

  ngOnInit() {
  }

  handleArticleChange(event:string){
    this.articleContent=event
  }

}
