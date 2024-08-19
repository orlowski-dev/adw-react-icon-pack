# Adwaita icon pack for React

## Usage
```typescript
import { AdwCatSleepingSymbolic } from "adw-react-icon-pack";

const App = () => {
    return <>
        <AdwCatSleepingSymbolic/>
    </>
}

export default App;
```

## Component Props

| name            | type                    | optional | description                                                       |
|-----------------|-------------------------|----------|-------------------------------------------------------------------|
| title           | string                  | true     | Add title tag as child to the svg tag.                            |
| size            | number                  | true     | Set svg width and height. The given number is converted into rem. |
| wrapper         | "div" \| "span"         | true     | Add a wrapper for the svg tag.                                    |
| wrapperProps    | HTMLAttributes<wrapper> | true     | Set wrapper props.                                                |
| iconNameAsTitle | boolean                 | true     | If true, the svg's title tag will have value of iconName.          |
