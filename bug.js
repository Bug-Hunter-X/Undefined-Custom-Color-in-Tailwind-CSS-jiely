```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // This color is not defined in the theme
      },
    },
  },
  plugins: [],
};
```
```javascript
// In a component
<div className="bg-custom-blue">
  {/* ... */}
</div>
```