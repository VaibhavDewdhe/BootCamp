# Day 2 - HTML Essentials

---

## 1. HTML Page Structure (Boilerplate)

Every HTML file should start with a basic structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <!-- Content goes here... -->
  </body>
</html>
```

---

## 2. Image Tag – `<img>`

### Syntax:
```html
<img src="path" alt="Description" width="200" height="150">
```

### Types of Paths:
- **Relative Path:** Image is in your project folder  
  Example:  
  ```html
  <img src="images/pic.jpg" alt="My Photo">
  ```

- **Absolute Path:** Full URL from the internet  
  Example:  
  ```html
  <img src="https://example.com/image.jpg" alt="Online Image">
  ```

> Always include `alt` attribute for accessibility and SEO.

---

## 3. Anchor Tag – `<a>`

### Syntax:
```html
<a href="URL">Link Text</a>
```

### Anchor Tag Use Cases:

1. **External Link**
```html
<a href="https://www.google.com" target="_blank">Google</a>
```

2. **Internal Page Link**
```html
<a href="about.html">About Page</a>
```

3. **In-Page (Section) Link**
```html
<a href="#section2">Jump to Section 2</a>

<!-- Later in the same page -->
<h2 id="section2">Section 2</h2>
```

4. **Download Link**
```html
<a href="resume.pdf" download>Download Resume</a>
```

5. **Email Link**
```html
<a href="mailto:someone@example.com">Send Email</a>
```

6. **Phone Link**
```html
<a href="tel:+911234567890">Call Me</a>
```

7. **With Title (Tooltip)**
```html
<a href="https://example.com" title="Visit Example">Visit</a>
```

---

## 4. List Tags

### Ordered List (`<ol>`)
```html
<ol>
  <li>Wake up</li>
  <li>Brush</li>
  <li>Study</li>
</ol>
```

### Unordered List (`<ul>`)
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### Nested List
```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>
```

---

## 5. Table Tag

### Basic Structure:
```html
<table border="1" cellpadding="5" cellspacing="0" align="center">
  <caption>Student Info</caption>
  <thead>
    <tr>
      <th>Roll No</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>101</td>
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

### Table Attributes:
- `border`: Adds border to table.
- `cellpadding`: Adds space **inside** cells.
- `cellspacing`: Adds space **between** cells.
- `align="center"`: Aligns table to center (deprecated in HTML5, but still works).

---

## 6. Common Text Formatting Tags

| Tag        | Description             |
|------------|-------------------------|
| `<b>`      | Bold                    |
| `<strong>` | Bold with importance    |
| `<i>`      | Italic                  |
| `<em>`     | Emphasized (italic)     |
| `<u>`      | Underline               |
| `<mark>`   | Highlight text          |
| `<small>`  | Smaller text            |
| `<del>`    | Deleted text (strikethrough) |
| `<ins>`    | Inserted/underlined text |
| `<br>`     | Line break (self-closing) |
| `<hr>`     | Horizontal line (self-closing) |

---

## 7. Bonus Knowledge

### Figure and Figcaption
Used to group an image and its caption together.

```html
<figure>
  <img src="image.jpg" alt="Sample Image">
  <figcaption>This is the image caption</figcaption>
</figure>
```

---

## Summary of Concepts Covered

- HTML Boilerplate  
- `img` tag with absolute vs relative paths  
- All variations of `<a>` tag (internal, external, download, mail, phone, tooltip, section)  
- Ordered and unordered lists  
- Tables with advanced structure  
- Basic and semantic text tags  
- Attributes: `href`, `src`, `alt`, `title`, `target`, `download`, `align`, `id`

---

## Practice Tip

Try creating a full webpage using everything you’ve learned so far — use proper structure, meaningful sections, and experiment with links and tables.
