Each container has an associated `.css` file for styling.

---

## 📦 Container Descriptions

| Container Name       | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| **MainContainer**    | Wraps the main content area; handles padding and max-width.   |
| **SectionContainer** | Wrapper for sections like About, Services, etc.               |
| **HeroContainer**    | Full-width top banner (headline + CTA area).                  |
| **CardContainer**    | Grid/flex wrapper for service or blog cards.                  |
| **FormContainer**    | Stylish wrapper for forms like contact or newsletter signups. |
| **CTAContainer**     | Emphasized Call-To-Action block for user engagement.          |

---

## 🧩 Common Props

Most containers accept the following props for flexibility:

- `children` – Elements inside the container.
- `className` – Add custom styling overrides.
- `fluid` _(MainContainer only)_ – Full-width layout.
- `id` – Optional anchor ID for navigation links.
- `style` – Inline style overrides.

---

Each container has an associated `.css` file for styling.

---

## 📦 Container Descriptions & Usage

### 1️⃣ **MainContainer**

- **Purpose**: Wraps the main content area with padding and max-width.
- **Props**: `children`, `className`, `fluid`, `style`, `id`, `layout`
- **Optional Layout**: Can be used for sidebar layouts via `layout="sidebar"`

#### ✅ Example:

```jsx
<MainContainer>
  <h1>Welcome to Our Site</h1>
  <p>This is the main content area.</p>
</MainContainer>
```

### 2️⃣ **SectionContainer**

- **Purpose**: Clean wrapper for different sections like About, Services, etc.
- **Props**: `children`, `className`, `id`, `style`

#### ✅ Example:

```jsx
<SectionContainer id="services">
  <h2>Our Services</h2>
  <p>We offer full-stack digital solutions.</p>
</SectionContainer>
```

### 3️⃣ **HeroContainer**

- **Purpose**: Top-level hero/banner section with bold messaging.
- **Props**: `children`, `className`, `id`, `style`

#### ✅ Example:

```jsx
<HeroContainer>
  <h1>Ascendant Digital Solutions</h1>
  <p>Transforming yesterday, ascending digital solutions.</p>
  <button className="cta-button">Get Started</button>
</HeroContainer>
```

### 4️⃣ **CardContainer**

- **Purpose**: Used to layout cards in grids or flex (services, blogs, team members, etc.).
- **Props**: `children`, `className`, `id`, `style`

#### ✅ Example:

```jsx
<CardContainer>
  <ServiceCard title="Web Development" />
  <ServiceCard title="UI/UX Design" />
  <ServiceCard title="SEO Optimization" />
</CardContainer>
```

### 5️⃣ **FormContainer**

- **Purpose**: Stylish wrapper for contact forms, newsletter forms, etc.
- **Props**: `children`, `className`, `id`, `style`

#### ✅ Example:

```jsx
<FormContainer id="contact-form">
  <h2>Contact Us</h2>
  <ContactForm />
</FormContainer>
```

### 6️⃣ **CTAContainer**

- **Purpose**: Emphasized call-to-action block to engage users.
- **Props**: `children`, `className`, `id`, `style`

#### ✅ Example:

```jsx
<CTAContainer>
  <h2>Ready to start your project?</h2>
  <button className="cta-button">Contact Us</button>
</CTAContainer>
```
