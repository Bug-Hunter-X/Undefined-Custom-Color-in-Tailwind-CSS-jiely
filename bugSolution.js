```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff', // Correctly define the custom color
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