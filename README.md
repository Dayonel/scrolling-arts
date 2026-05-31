# Scrolling Arts

Infinite scroll artwork gallery with curated pieces

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

1. Go to [staging.artsy.net](https://staging.artsy.net) and sign up.
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

# Test (unit)

Unit tests can be found in `__tests__`

```
pnpn test
```

# Test (end to end)

End to end tests can be found in `__e2e__`

```
pnpm test:e2e
```
