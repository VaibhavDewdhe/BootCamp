# Day 2 Practical Assignment – HTML Fundamentals

This 3-hour practical session will reinforce your understanding of HTML structure, images, anchor tags, text formatting, lists, and tables.

---

## First Hour (0–1 hr) – Core Basics

### Task 1: HTML Boilerplate and Page Setup
- Create a new `.html` file with a proper HTML5 structure.
- Set `<title>` as "Day 2 Practical".
- Add a main heading (`<h1>`) for your name.

### Task 2: Text Formatting
In a section called “About Me”:
- Write 5–6 sentences about yourself using these tags:
  - `<b>`, `<i>`, `<u>`, `<strong>`, `<em>`, `<small>`, `<mark>`, `<del>`, `<ins>`.

### Task 3: Lists
- Create one ordered list: "My Daily Routine".
- Create one unordered list: "Technologies I Like".

---

## Second Hour (1–2 hr) – Images and Anchor Tags

### Task 4: Image Tag Practice
- Insert an image from your local folder using a **relative path**.
- Insert another image from a website using an **absolute path**.
- Use `alt`, `width`, and `height` attributes.
- Add a `<figcaption>` for at least one image using `<figure>`.

### Task 5: Anchor Tags (All Use Cases)

Create a section titled **Useful Links** and add the following:

1. **External Link**
   - Link to `https://www.google.com` and open it in a **new tab** using `target="_blank"`.

2. **Internal Link**
   - Link to another HTML file called `about.html`.

3. **In-Page (Section) Link**
   - Create two sections with `id="top"` and `id="bottom"`.
   - Add a link at the top that jumps to bottom and vice versa using `href="#bottom"` and `href="#top"`.

4. **Download Link**
   - Add a link to a file called `resume.pdf` that downloads on click:
     ```html
     <a href="resume.pdf" download>Download My Resume</a>
     ```

5. **Email Link**
   - Create a link that opens Gmail to send you an email:
     ```html
     <a href="mailto:youremail@example.com">Email Me</a>
     ```

6. **Phone Link**
   - Create a link to call your number (works on mobile):
     ```html
     <a href="tel:+911234567890">Call Me</a>
     ```

7. **Title Attribute**
   - Add tooltips using the `title` attribute for at least 2 links.

---

## Third Hour (2–3 hr) – Tables and Full Page Practice

### Task 6: Student Info Table

Create a table with the following structure:

| Roll No | Full Name     | Email                  | Course     |
|---------|---------------|------------------------|------------|
| 101     | Student One   | one@example.com        | HTML       |
| 102     | Student Two   | two@example.com        | JavaScript |
| 103     | Student Three | three@example.com      | CSS        |

Requirements:
- Use `<caption>`, `<thead>`, `<tbody>`, `<th>`, and `<td>`.
- Add `border`, `cellpadding`, and `cellspacing`.
- Align the table in the center using `align="center"`.

### Task 7: Personal Profile Web Page

Combine all concepts into one structured HTML page:
- Title: Your Name
- Header section with `<h1>` and an image
- Navigation menu with anchor tags
- About Me section with text formatting
- Lists for skills and hobbies
- A two-image gallery (absolute + relative)
- Student info table (from Task 6)
- Footer with your contact details and in-page links

---

## Bonus Challenges (For Fast Learners)

### Bonus 1: Anchor Navigation Page
Create a single-page portfolio layout with navigation links at the top that scroll to each section:
- About
- Skills
- Projects
- Contact  
Use section IDs and anchor links like:
```html
<a href="#skills">Go to Skills</a>
