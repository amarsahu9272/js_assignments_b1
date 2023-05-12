
class Post {
    constructor(title, content, author, dateCreated) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.dateCreated = dateCreated;
        this.likes = 0;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    deleteComment(comment) {
        const index = this.comments.indexOf(comment);
        if (index !== -1) {
            this.comments.splice(index, 1);
        }
    }
}
class Photo extends Post {
    constructor(title, content, author, dateCreated, image, caption) {
        super(title, content, author, dateCreated);
        this.image = image;
        this.caption = caption;
    }
}


class Video extends Post {
    constructor(title, content, author, dateCreated, videoUrl, thumbnail) {
        super(title, content, author, dateCreated);
        this.videoUrl = videoUrl;
        this.thumbnail = thumbnail;
    }
}