
# Redux toolkit example
Example from vite-template-redux

## References
- [Project main page](https://github.com/IDriuk/playground)

## Notes
- use ```docker compose up```, open [localhost](http://localhost:3000/) 

## Working log
- ```npx degit reduxjs/redux-templates/packages/vite-template-redux my-app``` to create redux toolkit project
- ```docker run -it --rm -p 5173:5173 -v ${PWD}:/app --name server node bash -c "cd /app && npm install && npm run dev -- --host"```
- ```ifconfig | grep inet``` to find ip address adress of wifi
- open ```http://192.168.1.5:5173/``` on phone




# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
