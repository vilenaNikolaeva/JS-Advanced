function solve() {
    const countViewrs = 0;
    class Post {
        constructor(title, content) {
            this.title = title,
                this.content = content
        }
        toString() {
            return `Post: ${this.title}\n` + 
                `Content: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.liked = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            return arr.push(comment);
        }
        toString() {
            let string = super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                string += "\nComments:";
                this.comments.forEach(c => string += `\n * ${c}`);
            }
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            return this.views++;
        }
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return{
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const slv=solve();
const a = new slv.Post('Post','SomeText');
console.log(a);
