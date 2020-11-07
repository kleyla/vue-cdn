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
