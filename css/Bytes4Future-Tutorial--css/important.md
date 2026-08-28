
## Explain
CSS Variables (Custom Properties) are reusable values that can be stored and used throughout your CSS:

- Must start with `--` (double hyphen)
- Case-sensitive naming
- Created with `--name: value`
- Used with `var(--name)`
- Support fallback values

## Example
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    --text-color: #1f2937;
    --spacing: 20px;
}

.button {
    background-color: var(--primary-color);
    color: var(--text-color);
    padding: var(--spacing);
}
```


**Task:** Create a navigation bar using flexbox with:
- Logo on the left
- Navigation links in the center
- Action button on the right
- Even spacing between links
- Time: 12 minutes
- Hint: Use `justify-content: space-between` for the main layout

<details>
<summary>Solution</summary>

```html
<nav class="navbar">
    <div class="logo">MyBrand</div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <button class="action-btn">Sign Up</button>
</nav>
```

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #2563eb;
    color: white;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.action-btn {
    background: white;
    color: #2563eb;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
}
```
</details>



## Challenge
**Task:** Create a responsive table with:
- Alternating row colors
- Hover effects on rows
- Header with gradient background
- Responsive scrolling on mobile
- Time: 12 minutes
- Hint: Use `overflow-x: auto` for responsiveness

<details>
<summary>Solution</summary>

```html
<div class="table-container">
    <table class="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Admin</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>User</td>
            </tr>
        </tbody>
    </table>
</div>
```

```css
.table-container {
    overflow-x: auto;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.styled-table th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    text-align: left;
}

.styled-table td {
    padding: 15px;
    border-bottom: 1px solid #e5e7eb;
}

.styled-table tr:nth-child(even) {
    background: #f9f9f9;
}

.styled-table tr:hover {
    background: #f3f4f6;
}
```

</details>


## Explain
Pseudo-classes target elements based on state or position:

- **User Action**: `:hover`, `:active`, `:focus`
- **Structural**: `:first-child`, `:last-child`, `:nth-child()`
- **Form**: `:checked`, `:disabled`, `:required`
- **Link**: `:link`, `:visited`
- **Negation**: `:not()`
