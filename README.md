# Scrolling Arts

Infinite scroll artwork gallery with curated pieces

<img width="1000" height="500" alt="Image" src="https://github.com/user-attachments/assets/d289004b-69e5-441a-89c4-12ba7a5e5002" />

# Installation

- Install [pnpm 11](https://pnpm.io/installation) then run

```
pnpm i
```

# Env

Create `.env.local` file with these settings

```
ARTSY_ACCESS_TOKEN=
ARTSY_USER_ID=
```

**How to get these credentials:**

1. Go to [artsy.net](https://artsy.net) and sign up.
2. Open Developer Console (`Cmd+Option+J` on Mac).
3. Type `sd.CURRENT_USER.accessToken` to get the Token.
4. Type `sd.CURRENT_USER.id` to get the ID.

# GraphQL

Introspection Artsy API is **disabled** by default, that's why file `_schemaV2.graphql` is added into the project.

# Run

To start the app run

```
pnpm dev
```

# Scripts

`pnpm codegen`: Generates GraphQL types

# Test (unit & integration)

Unit and integration tests (using Jest and React Testing Library) can be found in **tests**.

```
pnpm test
```

# Test (end to end)

End to end tests can be found in `__e2e__`

```
pnpm test:e2e
```

# Decisions

I've decided to use the **Artsy GraphQL API** for this project to showcase beautiful artwork.\
I've generated typescript definitions using codegen.

# Architecture

Initial load is on the server passed then to the store.\
A Suspense fallback shows a loading while promise is being resolved.\
A gallery carousel is then displayed with sections and artworks.

# Architecture scroll

A sentinel `<div>` is appended at the bottom of the screen.\
`<main>` tag is tracked for scroll instead of the `window` object, this is to prevent scroll drifting on mobile.\
When sentinel div in view, new content is loaded, and sentinel div is pushed down again, out of view.

# Architecture sections

Sections stay fixed on screen and are in columns on desktop.\
On mobile, they stack on top of each other, by playing with grid's `col-start-1` and `row-start-1` and opacity.\
Sections are transitioned to the next one when section bot hits viewport top.

<img width="500" height="800" alt="Image" src="https://github.com/user-attachments/assets/01ad3616-7ea2-4981-93a9-5ac28abb74e5" />

Commit `3aef8b97a5e56fed77c0b027f778abb0a31488d8` illustrates the above sketch with wireframes.

# Tech stack

- Frontend: `React`, `Next.js`.
- Data layer: Apollo Client (GraphQL).
- Animations: `Framer Motion`.
- State management: `Zustand`.
- Unit testing: `Jest`.
- End-to-end testing: `Playwright`.
- Styling: `Tailwind v4`.
