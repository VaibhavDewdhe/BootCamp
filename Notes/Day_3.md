# Semantic tags

## Why we use semantic tags
- To provide a structure to our code and logically separate it different sections.
- Semantic tags help search engine bots to crawl and get meaningful information from the code which can eventually help in SEO (Search Engine Optimization).
- Semantic tags can also be helpful to provide accessibility features i.e. features available for blind and other specially able people to navigate and access webpage content

## Most commonly used semantic tags
- ```<header>```
- ```<main>```
- ```<footer>```
- ```<nav>```
- ```<aside>```
- ```<article>```
- ```<section>```

## Basic structure to build a site using these tags
```
<header>
    <!-- Company logo -->
    <!-- Company Name -->
    <nav>
        <!-- Navbar -->
    </nav>
</header>
<main>
    <aside>
        <!-- sidebar | & advertisements -->
    </aside>
    <section>
        <article></article>
    </section>
</main>
```

### Note :
- There should be only one header, main and footer section.


# Form
- As we know in the IT industry each and everything is all about data.
- Sometimes user data is need to be sent to the servers for processing, storing or any other activities, for that purpose we need form.

## input tags

- In the form tag we can have input tags AKA input fields of various types.

- Basic syntax of the input field
```<input type="text" name="username">```

- Input tags is a self closing tag and it's an inline element
- Input tag have multiple types and they are mentioned using type attribute. e.g. 
```type = "password"```
- Most commonly used input types : 
```text```
```email```
```password```
```checkbox```
```radio```
```button```
```submit```

- more attributes
    ```required```
    ```readonly```

## select tag with option tags
- select tag is a tag used to select one option among many.

- basic syntax of the select tag
```
<select name="streams">
    <option "Mech">Mech</option>
    <option "CSE">CSE</option>
    <option "civil">Civil</option>
    <option "AI/ML">AI/ML</option>
</select>
```