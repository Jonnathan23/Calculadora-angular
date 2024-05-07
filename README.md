Avance en la clase:
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post: any

  idComent: any
  postComents:any
  titleComent: any

  comment: boolean = false
  
  constructor(private postService: PostService){ }

  ngOnInit(){
    this.postService.getAllPost().subscribe(data => this.post = data)    
  }

  putComment(id:number, title:string, commentsData:string){
    this.idComent = id
    this.titleComent = title
    this.postComents = commentsData;
    
  }



}
