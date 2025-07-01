# Introduction to HTML

## History

- **HTML (HyperText Markup Language)** is a markup language developed by **Sir Tim Berners-Lee**, a researcher at CERN, for his personal use.
- Before HTML, he used to share his research and related documents via email. He wondered, *"Why can't we create a web page and publish documents online?"*
- This idea led him to develop a simple language to create web pages, initially consisting of just **18 tags**.
- As time passed, he made improvements and added more tags, eventually expanding to **over 100**.
- HTML quickly gained popularity and became the foundation of the **World Wide Web**.

## More About HTML

- First and most important point to note: **HTML is not a programming language.**
- It's a **markup language** that provides the basic structure for the actual content we are working on.
- HTML is a language **without beauty and brain**.
- **Beauty** will be provided by **CSS** and **brain** by **JavaScript**. We will learn about these in the future.

## How HTML Works?

- Everything inside HTML is an **element**.

### Now what is this "element"? (⭐ Important)

- An **HTML element** is the smallest component of HTML. Using these elements, we create the basic structure of a web page.
- These elements consist of **tags**, **attributes**, and the **actual content**.

#### Tags

There are two types of tags:

1. **Normal Tags**
    - These tags have an **opening tag** and a **closing tag**.
    - The **content** lies between these two tags.
    - Example:  
      ```html
      <h1>Heading</h1>  
      <p>I am a paragraph</p>
      ```

2. **Self-Closing Tags**
    - These tags don’t have any content to enclose.
    - Example:  
      ```html
      <br>  
      <hr>  
      <img>
      ```

#### Attributes

- **Attributes** provide more information to the element — we can say it’s a kind of metadata.
- They are **optional** in some elements but **essential** in others.
- Example with `a` tag:
  ```html
  <a href="URL">Link Text</a>