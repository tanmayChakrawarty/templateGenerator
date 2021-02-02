# Template Generator for Competitive Programming

It is an npm package that helps you to build files in your directory with your desired template for saving time in competitive programming directly from your terminal or cmd.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/chakrawarty99templategenerator) to install template generator.

```bash
npm i chakrawarty99templategenerator -g --save
```

## Usage

Type the following commands:-

 1. ```create -h or create --help ``` it will display all the commands.
 2. ```create -d <type> or create -dir <type>``` Name of the directory you want to 
     create
3. ```create -l or create --lang <type> ``` Language of your template and the new files that will be created
```
lang type 
py for python
java for java
c for c
cpp for c++
```
4. ```create -n, create --number <type>```Number of files you want inside your directory.By default number of files are 3.

5. ```create -t or create --template```Add the directory where your template is or go 
  to disered directory and type the command create -t

6. ```create -r, create --root```Sets the current dir as the root dir, for making new dirs, works same as -t, but sets the curr dir as root



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://opensource.org/licenses/ISC)