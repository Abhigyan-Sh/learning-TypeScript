## TypeScript

### How to Follow
- fundamentals
- live-server
- classes

### Before you even start
- After the global install, you can use TS as it gives you `tsc` command to compile or transpile your code into JS, now if I write tsc filename.ts, then it compiles my TS code into JS
- what all you can expect with TS, or where and what you need to define (like custom dataTypes and built-in ones)
- you can compile your TS code into JS and even if there were errors in your TS code, now after compilation to JS it might still work but it would show you errors in terminal
- you can make your tsconfig.json with typescript site by choosing from options and it generates your tsconfig.json file (so its a TOOL there on their site)
- typescript is all about typeSafety, though they say its a superset to JS but don't get it wrong, don't visualize it in wrong context, it doesn't provide you anything on top of JS except the typeSafety for variables or parameters, and thus its installed as a dev dependency in our projects.

### Types
> 9 types from JS + 3 from TS ?
> answer : ??

### 
- `any` (for getting away of defining 'type' for a particular variable, its not a type rather a flag for turning off type checking for a particular variable)
- `noImplicitAny` (for defining that `any` shouldn't be placed in a file)

### live-server folder
- tsc --init (-- means options)
- define output directory in tsconfig.json
- but is index.html reading it up from the dist ? make it read from dist now.
- tsc -w (with this 
  - it detects for live changes and 
  - also the index.js file gets created in the dist folder as defined by the tsconfig.json)
