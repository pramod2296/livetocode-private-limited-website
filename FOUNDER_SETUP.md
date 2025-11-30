# Founder Section Setup Guide

## Adding Founder Image

1. Place your founder's photo in the `public` folder
2. Name the file `founder.jpg` (or update the filename in `src/components/Founder.jsx`)
3. Recommended image size: Square format (1:1 aspect ratio), at least 400x400 pixels
4. Supported formats: JPG, PNG, WebP

## Updating Founder Details

Edit the file `src/components/Founder.jsx` and update the following placeholders:

1. **Founder Name**: Replace `[Founder Name]` with the actual founder's name
2. **Founder Description**: Update the paragraphs with the founder's background and achievements
3. **Key Highlights**: Replace the placeholder text with actual achievements:
   - `[Years]` - Replace with number of years of experience
   - `[specific AI domain or technology]` - Replace with specific expertise
4. **Social Links**: Update the href attributes for LinkedIn, Twitter, and Email links (currently set to "#")

## Example Updates

```jsx
// Replace this:
<h3 className="text-3xl font-bold text-gray-900 mb-2">
  [Founder Name]
</h3>

// With this:
<h3 className="text-3xl font-bold text-gray-900 mb-2">
  Jane Doe
</h3>
```

The website will automatically show a placeholder if the image is not found, so you can preview the section even before adding the photo.

