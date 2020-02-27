# Neumorphic-UI v0.1

![Preview](/assets/screenshot.png)

## What this is
This is a React component library built on [styled-components](https://styled-components.com/) based on the style of neumorphism.

Formal documentation and website coming soon at neumorphic-ui.com (not yet live.)


As of this writing, completed components include:
  - AppBar
  - Button
  - Checkbox
  - Drawer
  - Input
  - MenuItem
  - Paper
  - RadioButton
  - Select
  - Switch
  - Typography

## What is Neumorphism/Neomorphism
It combines elements of 3D and soft lighting to create a pseudo-realistic effect. [This article](https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6) explains it way better.

## How to use this
- Install the project with `npm i neumorphic-react`
- Import a component (i.e. a button) with: `import { Button } from 'neumorphic-react`
- Create a button with some text: `<Button>Hello</Button>`

## Features
This library will let you customize stylistic elements such as:
- ( In Development ) Direction of light ( this impacts shadows and highlights)
- ( In Development )Colors. Why is this special? Neumorphism requires the use of highlights and shadows to achieve a realistic effect. These shadows and highlights are variations of some base color. It would be tedious to recalculate thsee everytime. This library will allow you to specify a base color and auto-calculate the appropriate light/shadow colors.

# Migrating from Material-UI
If you are a frequent user of [Material-UI](https://material-ui.com/) ( I am very grateful for their work), you may notice that the components in this library are named the same as those in Material-UI. This is intentional.

To convert your Material-UI to Neumorphic-UI, simply change the name of your imports. 

For example:  

Change
`import { Button } from '@material-ui/core'`
to
`import { Button } from 'neumorphic-ui'`

That's it.

# Bugs
Please help me find bugs. This project is in the very early stages so there will likely be many. 

# Want to get involved? 
Send me a message on Github or Twitter (@turckalicious)

