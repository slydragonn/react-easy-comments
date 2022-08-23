<h1 align='center'>Easy Comments - <i>Alpha</i></h1>

<p align='center'><img  alt='easy comments logo' src='./docs/Vector.png'/></p>

<h2 align='center'>Create comment sections easily</h2>
<br>

It's a simple library with that you can create a React Comment Sections Component.

<p align='center'><img  style='border-radius: 5px' alt='easy comments logo' src='./docs/capture_1.PNG'/></p>
<p align='center'><img style='border-radius: 5px' alt='easy comments logo' src='./docs/capture_3.PNG'/></p>
<div style='display: flex; justify-content: space-around'><p><img style='border-radius: 5px' width='350px' alt='easy comments logo' src='./docs/capture_2.PNG'/></p>
<p><img style='border-radius: 5px' width='350px' alt='easy comments logo' src='./docs/capture_4.PNG'/></p></div>

## To-do

* [ ] Implement the options props
* [ ] Show comments without being logged in
* [ ] More colors for Avatars
* [ ] Testing

### Install

```bash
npm i @slydragonn/react-easy-comments
```

### Getting started

```js
import { CommentsSection } from '@slydragonn/react-easy-comments'
```

* __CommentsSection__ accepts four props, but the last is optional.

#### Example

```tsx
import React from 'react'
import { CommentsSection, EasyComment } from '@slydragonn/react-easy-comments'
import { User, Comments, doSomething } from 'example'

export default function App {
  return (
    <main>
      <h1>My Comments Section</h1>
      <CommentsSection
        currentUser={{
          id: User.id,
          name: User.name,
          likes: User.likes,
          dislikes: user.dislikes,
          avatarUrl: User.image,
          profileLink: User.link
        }}
        initialComments={[
          Comments,
          (commentElement: any): EasyComment => ({
            commentId: commentElement.id,
            userId: commentElement.user.id,
            username: commentElement.user.name,
            comment: commentElement.text,
            creationDate: commentElement.date,
            likes: commentElement.info.likes,
            dislikes: commentElement.info.dislikes,
            avatarUrl: commentElement.user.image,
            profileLink: commentElement.user.link
          })
        ]}
        listeners={{
          onSubmit: (comment) => dosomething(comment),
          onUpdate: (comment) => dosomething(comment),
          onDelete: (comment) => dosomething(comment)
        }}
        options={{}}
      />
    </main>
  )
}

export default App

```

* __currentUser__: Accept an object with these properties. The dislikes and likes properties are arrays with the comment id that the current user like or disliked.

```ts
currentUser {
  id: string,
  name: string,
  likes?: string[],
  dislikes?: string[],
  avatarUrl?: string,
  linkProfile?: string 
}
```

* __initialComments__: It's an Array that accepts two elements. The first is the array that contains the comments for the section and the second element is a function that maps the list of comments of the first element and passes as param the array elements.

  ```ts
  initialComments: []

  comments: any[]
  (commentElement: any) => EasyComment

  ```

  * __EasyComment__: Is the type of object that should be returned by the function passed as the second element of the initialComments array.

    ```ts
    EasyComments {
      commentId: string
      userId: string
      username: string
      comment: string
      creationDate?: string | Date
      likes?: number
      dislikes?: number
      avatarUrl?: string
      profileLink?: string
      }
    ```

* __listeners__: It's an object with three properties and represents the different actions of the comments section. All functions are async, so you can pass instructions that are relational with APIs and Databases.

  ```ts
    listeners = {
      onSubmit: (comment) => void,
      onUpdate: (comment) => void,
      onDelete: (comment) => void
    } | {
      onSubmit: async (comment) => await dosomething(comment),
      onUpdate: async (comment) => await dosomething(comment),
      onDelete: async (comment) => await dosomething(comment)
    }
  ```

* __options__: It's an object with which you can personalize the comment section. All properties are optional and the next values are the default.

```js
{
  placeholder: 'Add a comment...',
  theme: 'default',
  editable: true,
  erasable: true,
  likes: 'default',
  maxLength: 500,
  creationDate: true,
  profileImage: true,
  totalComments: true,
  filter: [true, 'date']
}
```

* placeholder: It's a string that represents the placeholder of the form for adding a comment.

  ```ts
    placeholder?: string
  ```

* theme: It's the theme of the comments section. Values ​​are 'default' or 'dark'.

  ```ts
    theme?: 'default' | 'dark'
  ```

* editable: Whether the comment can be editable or not.

  ```ts
    editable?: boolean
  ```

* erasable: Whether the comment can be deleted or not.

  ```ts
    erasable?: boolean
  ```

* likes: It's a string that you set whether you want to display likes, dislikes, or nothing. This property only accepts 'default', 'only like', or 'dislike'

  ```ts
    likes?: 'deafult' | 'only-likes' | 'no-likes'
  ```

  * _deafault:_ Show likes and dislikes
  * _only-likes:_ Show only the likes
  * _no-likes:_ No show or omit the likes and dislikes of the comment.

* maxLength: It's the max length of characters that you can write in a comment.

  ```ts
    maxLength?: number
  ```

* creationDate: Show or not the creation date of a comment.

  ```ts
    creationDate?: boolean
  ```

* profileImage: Show or not the profile image of the user that created the comment.

  ```ts
    profileImage?: boolean
  ```

* totalComments: Show or not the counter of the comments.

  ```ts
    totalComments?: boolean
  ```

* filter: It's an array of two values, first is a boolean that represents if shows or not the filter, and the second is the initial state which is a string that represents how you want to sort the comments. By 'date' or 'likes'

  ```ts
    filter?: [boolean, 'date' | 'likes']
  ```
