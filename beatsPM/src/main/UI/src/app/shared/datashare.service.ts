import { Injectable } from '@angular/core';
import { PostObject } from '../createpost/PostObject';

@Injectable({providedIn:'root'})
export class DataShareService {
    private posts: Array<PostObject> = [];

    setPosts(post:Array<PostObject>){
        this.posts = [];
        this.posts = post;
    }
    getPosts(): Array<PostObject>{
        return this.posts;
    }
}
