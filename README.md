# UnderlineEmphasis

This component draws a purple squiggly underline underneath whatever text children are passed in.

![image](https://user-images.githubusercontent.com/4197647/75850834-4ceef980-5e3c-11ea-98cf-ee05b8da9535.png)

Package uses [tsdx](https://github.com/jaredpalmer/tsdx) as the build system.

Use via `npm install underline-emphasis`

## Development

`npm start` in both the root directory and the example directory. The root one will watch for changes.

If you want to see the squiggly by itself replace the return with `<div dangerouslySetInnerHTML={{__html: svgImage}}/>`.
