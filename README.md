# anothergrid.css

anothergrid.css is a responsive grid system built up of two grids. The first of which is the basic grid which is your standard 12 column grid system. The second grid being the responsive grid system, that is built up of four different grid sizes, extra small, small, medium and large.

> note: for the purpose of these examples 1em is equal to 16px (1em = 16px), and this is how the pixel conversions for the media queries are generated.

### The basic grid

The basic grid activates at 35em or 560px.

### The responsive grid system

The responsive grid system incorporates devices orientaion into its sizing, so the grid differs slightly between portrait and landscape, which aids in content readability. The four grid sizes, extra small, small, medium and large of the grid system give you the flexibility to tackle pretty much any layout imaginable.

* The **extra small grid** is active in viewport sizes with
  * a max-width of 35em or 560px in portrait and landscape,
  * a min-width of 35em or 560px in landscape.
* The **small grid** is active in viewport sizes with
  * a min-width of 35em or 560px in portrait,
  * a min-width of 45em or 720px in landscape.
* The **medium grid** is active in viewport sizes with
  * a min-width of 45em or 720px in both portrait and landscape.
* The **large grid** is active in viewport sizes with
  * a min-width of 60em or 960px in landscape.

## Contribution Guidelines
Anyone is welcome to contribute. It is a pretty simple setup. Just fork and clone this repo. Move into the folder in your command line app and run `npm install` and then `npm run watch`. When you are finished with your changes run `npm run prod` and create your PR.

## License
[MIT](LICENSE)
