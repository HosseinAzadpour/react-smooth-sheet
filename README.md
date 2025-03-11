![TimePicker Demo](https://github.com/HosseinAzadpour/react-smooth-sheet/blob/main/Demo.gif)

# 🎛️ BottomSheet

A fully responsive and highly customizable bottom sheet component for React applications, designed to provide smooth interactions, seamless animations, and an intuitive user experience. Easily adaptable to various use cases, it supports gesture-based controls, dynamic styling, and effortless integration into any project. 

##  Table of Contents

- [🎛️ BottomSheet](#️-bottomsheet)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Introduction](#introduction)
  - [Features](#features)
  - [What's New](#whats-new)
    - [v0.1.7](#v017)
    - [v0.1.8](#v018)
  - [Example](#example)
  - [props](#props)
  - [API](#api)
  - [Tips and Tricks](#tips-and-tricks)
  - [FAQ](#faq)
  - [Contributing](#contributing)
  - [Contact Information](#contact-information)
  - [License](#license)
  - [Links](#links)

## Installation

You can install the package using npm or yarn:

```bash
npm install react-smooth-sheet
```

or

```bash
yarn add react-smooth-sheet
```

## Introduction

BottomSheet is a highly versatile and intuitive React component built to deliver a seamless and interactive bottom sheet experience. Designed with flexibility in mind, it offers extensive customization options, smooth animations, and gesture-based interactions. Whether used for modals, action sheets, or additional UI elements, BottomSheet ensures effortless integration while maintaining optimal performance and responsiveness across all devices. 


**Key Features:**

- Responsive Design: Adapts to various screen sizes and devices.
- Customizable Colors: Easily change the color scheme to match your app.
- Smooth Animations: Enjoy smooth transitions and animations.


## Features

- Toggle visibility with a parent state.
- Customize overlay opacity and blur.
- Change the background color of the sheet.
- Accept custom content as children.


## What's New

### v0.1.7

- Reduce package size.
- Cleaned up unused code .
- Remove Webpack 

### v0.1.8

- Created Custom Hooks.
- Component-Based Refactoring.
- Organized Files & Directories

For more details, see [CHANGELOG.md](./CHANGELOG.md).


## Example

```jsx
import React, { useState } from "react";
import BottomSheet from "react-smooth-sheet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setIsOpen(true)}>Open BottomSheet</button>
      <BottomSheet
        isOpen={isOpen}
        sendDataToParent={(open) => setIsOpen(open)}
        overlayDark={1}
        overlayBlur={2}
        backgroundColor={"lightGray"}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Your content </div>
        </div>
      </BottomSheet>
    </div>
  );
}

export default App;

```


## props

| Prop               | Type       | Default     | Description                                         |
| ------------------ | ---------- | ----------- | --------------------------------------------------- |
| `sendDataToParent` | `function` | false       | Function to send the state to the parent component. |
| `isOpen`           | `boolean`  | false       | Determines if the bottom sheet is open or closed.   |
| `overlayDark`      | `number`   | 0           | Sets the opacity of the overlay.                    |
| `overlayBlur`      | `number`   | 2           | Sets the blur effect for the overlay.               |
| `backgroundColor`  | `string`   | "lightGray" | Sets the background color of the bottom sheet.      |


## API

**Functions**
<br/>

- BottomSheetShow()`: Shows the BottomSheet`.
- BottomSheetHide()`: Hides the BottomSheet`.

**Events**
<br/>

- onTouchStart`: Detects the touch start event`.
- onTouchMove`: Detects the touch move event`.
- onTouchEnd`: Detects the touch end event`.


## Tips and Tricks

Ensure the `isOpen` prop is managed by the parent component to control the visibility.
<br/>
Use the `sendDataToParent` function to update the parent state when the BottomSheet is closed.


## FAQ

Q: How can I customize the BottomSheet?
<br/>
A: You can customize it using the props provided like `overlayOpacity`, `overlayBlur`, and `backgroundColor`.
<br/>
Q: How do I close the BottomSheet?
<br/>
A: Use the `sendDataToParent` function to change the state in the parent component.


## Contributing

Contributions are welcome! Please create an issue or a pull request.


## Contact Information

For any questions or feedback, please contact me via:
<br/>

Email: [hossein.azp94@gmail.com]
<br/>

LinkedIn: [https://www.linkedin.com/in/hosseinazadpour]


## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Links

https://github.com/HosseinAzadpour/react-smooth-sheet
