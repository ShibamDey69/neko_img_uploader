


# File Upload Utility

This utility provides functions to upload files to various image hosting services using Node.js. It utilizes Axios for HTTP requests and FormData for handling form data.

## Usage

### Installation

Make sure to install the required dependencies:

```bash
npm install neko_img_uploader
```

### Example Usage

Create an instance of the `Scrape` class:

```javascript
import Scrape from 'neko_img_uploader'; // Adjust the path based on your project structure
const scrape = new Scrape();
```

#### Upload to ImgBB

```javascript
(async() => {
   const imageUrl = await scrape.imgbb('path/to/local/image.jpg');
   console.log('Image uploaded to ImgBB:', imageUrl);
})();
```

or

```javascript
(async() => {
     const imageUrl = await scrape.imgbb('https://example.com/remote-image.jpg');
     console.log('Image uploaded to ImgBB:', imageUrl);
})();
```

#### Upload to File.Coffee

```javascript
(async() => {
    const fileCoffeeUrl = await scrape.file_coffee('path/to/local/image.jpg');
    console.log('Image uploaded to File.Coffee:', fileCoffeeUrl);
})();
```

or

```javascript
(async() => {
     const fileCoffeeUrl = await scrape.file_coffee('https://example.com/remote-image.jpg');
     console.log('Image uploaded to File.Coffee:', fileCoffeeUrl);
})();
```

#### Upload to Pixeldrain

```javascript
(async() => {
    const pixeldrainUrl = await scrape.pixeldrain('path/to/local/image.jpg');
    console.log('Image uploaded to Pixeldrain:', pixeldrainUrl);
})();
```

or

```javascript
(async() => {
   const pixeldrainUrl = await scrape.pixeldrain('https://example.com/remote-image.jpg');
   console.log('Image uploaded to Pixeldrain:', pixeldrainUrl);
})();
```

#### Upload to Pixhost

```javascript
(async() => {
   const pixhostUrl = await scrape.pixhost('path/to/local/image.jpg');
   console.log('Image uploaded to Pixhost:', pixhostUrl);
})();
```

or

```javascript
(async() => {
   const pixhostUrl = await scrape.pixhost('https://example.com/remote-image.jpg');
   console.log('Image uploaded to Pixhost:', pixhostUrl);
})();
```

#### Upload to Telegraph

```javascript
(async() => {
   const telegraph = await scrape.telegraph('path/to/local/image.jpg');
   console.log('Image uploaded to Telegraph:', telegraph);
})();
```

or

```javascript
(async() => {
   const telegraph = await scrape.telegraph('https://example.com/remote-image.jpg');
   console.log('Image uploaded to Telegraph:', telegraph);
})();
```

## Error Handling

If a file is not found or an error occurs during the upload process, an error message will be thrown.

```javascript
(async() => {
   try {
    const imageUrl = await scrape.imgbb('nonexistent-file.jpg');
  // ...
    } catch (error) {
     console.error('Error uploading to ImgBB:', error.message);
   }
}
```

## License

This utility is licensed under the [MIT License](LICENSE).

