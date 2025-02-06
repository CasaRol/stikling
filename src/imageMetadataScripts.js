const fs = require('fs')
//const ExifReader = require('exifreader');
const { exiftool } = require('exiftool-vendored')
const alberteTest = './images/alberte/475259443_28508224448822832_574924279702021620_n.jpg';

const extractImageMeta = async () => {
    const imageBuffer = fs.readFileSync(alberteTest)
    const tags = await exiftool.read(alberteTest);
    //const imageDate = tags['Special Instructions']; //.description;
    //const unprocessedTagValue = tags['DateTimeOriginal'].value;

    console.log("test")
    console.log(tags)
    //console.log(btoa(imageDate))
    //console.log(unprocessedTagValue)
}

extractImageMeta();