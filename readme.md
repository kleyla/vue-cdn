## Vue JS in a simple page

## Data binding

Usamos "v-bind:"

```html
<a v-bind:href="website" target="_blank">Sitio web</a>
```

## Events

Usamos v-on:click="age++"

```html
<button v-on:click="age++">Add a year</button>
<!-- llamar a una funcion -->
<button v-on:click="add">Add a year</button>
```

- v-on:click
- v-on:dblclick
- v-on:mousemove

## Events modifiers

v-on:click.once solo se puede modificar una vez

```html
<button v-on:click.once="add(1)">Add a year Once</button>
```

- v-on:click.once
- v-on:click.prevent

## Keyboard Events

```html
<input type="text" v-on:keyup="logName" />
```

## Two way data binding

```html
<input type="text" v-model="name" />
```

## Dynamic CSS Classes

```html
<div v-bind:class="compClasses">
  <span>Karen3</span>
</div>
```

## Conditionals

```html
<p v-if="error">There has been an error</p>
<p v-else-if="success">Success</p>
<p v-show="error">Show There has been an error</p>
```

## Looping with v-for

```html
<template v-for="(girl, index) in girls">
  <h4>{{index}}. {{girl.name}}</h4>
  <p>{{girl.age}}</p>
</template>
```

## Multiple Vue Instances

```javascript
var two = new Vue({
  el: "vue-app-one",
});
```

## Components

```javascript
Vue.component("name-component", {
  template: "<p>HI, i am a component</p>",
}
```

## Refs

```html
<input type="text" ref="my-name" />
```
